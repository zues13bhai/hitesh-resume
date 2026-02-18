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

  // AI and ML tech images from Unsplash
  const aiMlImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80", // AI Brain illustration
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80", // Machine Learning
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=400&q=80", // Neural Networks
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80", // Data Science
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80", // AI Technology
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80", // Chatbot AI
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", // Data Analytics
    "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=400&q=80", // Machine Learning Code
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80", // Computer Vision
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80", // AI Robot
    "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?auto=format&fit=crop&w=400&q=80", // Deep Learning
    "https://images.unsplash.com/photo-1593376853899-fbb47a057c9b?auto=format&fit=crop&w=400&q=80", // Neural Network Visualization
    "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=400&q=80", // AI Ethics
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80", // AI Assistant
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80", // Python Programming
    "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=400&q=80", // Algorithm Visualization
    "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=400&q=80", // TensorFlow
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=400&q=80", // Artificial Intelligence
    "https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=400&q=80", // Quantum Computing
    "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?auto=format&fit=crop&w=400&q=80", // OpenAI
    "https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&w=400&q=80", // GPT Models
    "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=400&q=80", // Computer Science
    "https://images.unsplash.com/photo-1599134842279-fe807d23316e?auto=format&fit=crop&w=400&q=80", // LLM Training
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=400&q=80", // Prompt Engineering
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80", // Tech Innovation
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80", // AI Development
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80", // Automation
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // Technology
  ];

  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => aiMlImages[index % aiMlImages.length],
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
