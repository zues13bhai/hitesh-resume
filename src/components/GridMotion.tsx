import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

interface GridMotionProps {
  items?: (string | JSX.Element)[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({
  items = [],
  gradientColor = "rgba(0,0,0,0.4)",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) =>
    index % 3 === 0 ? "🚀" : index % 3 === 1 ? "⚡" : "🌟",
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 200;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="grid-motion-wrapper" ref={gridRef}>
      <section
        className="grid-motion-intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
