import { useRef, useEffect } from "react";
import * as THREE from "three";

interface ShapeBlurProps {
  variation?: number;
  pixelRatioProp?: number;
  shapeSize?: number;
  roundness?: number;
  borderSize?: number;
  circleSize?: number;
  circleEdge?: number;
}

const vertexShader = /* glsl */ `
  varying vec2 v_texcoord;
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      v_texcoord = uv;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 v_texcoord;

  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform float u_pixelRatio;
  uniform float u_time;

  uniform float u_shapeSize;
  uniform float u_roundness;
  uniform float u_borderSize;
  uniform float u_circleSize;
  uniform float u_circleEdge;

  #ifndef PI
  #define PI 3.1415926535897932384626433832795
  #endif

  float sdRoundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  void main() {
    vec2 uv = v_texcoord;
    vec2 resolution = u_resolution * u_pixelRatio;
    vec2 fragCoord = uv * resolution;
    
    vec2 center = resolution * 0.5;
    vec2 pos = fragCoord - center;
    
    // Normalize coordinates
    float aspect = resolution.x / resolution.y;
    pos.x /= resolution.y;
    pos.y /= resolution.y;
    
    // Create animated shapes
    float time = u_time * 0.5;
    
    // Main shape
    vec2 shapePos = pos + vec2(sin(time) * 0.1, cos(time * 0.7) * 0.1);
    float shape = sdRoundedBox(shapePos, vec2(u_shapeSize * 0.3), u_roundness * 0.1);
    
    // Circle overlay
    vec2 circlePos = pos + vec2(cos(time * 1.2) * 0.15, sin(time * 0.8) * 0.15);
    float circle = sdCircle(circlePos, u_circleSize * 0.2);
    
    // Combine shapes
    float d = min(shape, circle);
    
    // Create gradient effect
    float alpha = smoothstep(u_borderSize, 0.0, abs(d));
    alpha *= smoothstep(u_circleEdge, 0.0, abs(circle));
    
    // Color gradient
    vec3 color1 = vec3(0.5, 0.2, 0.9); // Purple
    vec3 color2 = vec3(0.2, 0.6, 1.0); // Blue
    vec3 color3 = vec3(0.9, 0.3, 0.5); // Pink
    
    vec3 color = mix(color1, color2, sin(time + pos.x * 2.0) * 0.5 + 0.5);
    color = mix(color, color3, sin(time * 0.7 + pos.y * 3.0) * 0.5 + 0.5);
    
    gl_FragColor = vec4(color, alpha * 0.3);
  }
`;

const ShapeBlur: React.FC<ShapeBlurProps> = ({
  variation = 0,
  pixelRatioProp = 1,
  shapeSize = 0.5,
  roundness = 0.5,
  borderSize = 0.05,
  circleSize = 0.5,
  circleEdge = 1,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const materialRef = useRef<THREE.ShaderMaterial>();
  const animationRef = useRef<number>();

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(pixelRatioProp);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Geometry and Material
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_resolution: { value: new THREE.Vector2(1, 1) },
        u_pixelRatio: { value: pixelRatioProp },
        u_time: { value: 0 },
        u_shapeSize: { value: shapeSize },
        u_roundness: { value: roundness },
        u_borderSize: { value: borderSize },
        u_circleSize: { value: circleSize },
        u_circleEdge: { value: circleEdge },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    currentMount.appendChild(renderer.domElement);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!materialRef.current) return;

      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;

      materialRef.current.uniforms.u_mouse.value.set(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !materialRef.current)
        return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      rendererRef.current.setSize(width, height);
      materialRef.current.uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Animation loop
    const animate = (time: number) => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_time.value = time * 0.001;
      }

      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const currentMount = mountRef.current;
      if (currentMount && rendererRef.current) {
        currentMount.removeChild(rendererRef.current.domElement);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (materialRef.current) {
        materialRef.current.dispose();
      }

      geometry.dispose();
    };
  }, [
    variation,
    pixelRatioProp,
    shapeSize,
    roundness,
    borderSize,
    circleSize,
    circleEdge,
  ]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default ShapeBlur;
