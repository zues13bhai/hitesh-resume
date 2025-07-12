import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec3 } from 'ogl';
import "../styles/orb.css";


interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  className?: string;
}

const vert = /* glsl */`
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const frag = /* glsl */`
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform float hue;
uniform float hover;
uniform float rot;
uniform float hoverIntensity;
varying vec2 vUv;

vec3 hueShift(vec3 color, float hueAdjust) {
  const mat3 rgb2yiq = mat3(
    0.299, 0.587, 0.114,
    0.596, -0.274, -0.322,
    0.211, -0.523, 0.312
  );
  const mat3 yiq2rgb = mat3(
    1.0, 0.956, 0.621,
    1.0, -0.272, -0.647,
    1.0, -1.106, 1.703
  );
  vec3 yiq = rgb2yiq * color;
  float hueAngle = hueAdjust * 3.14159 / 180.0;
  float cosA = cos(hueAngle);
  float sinA = sin(hueAngle);
  mat3 hueRotation = mat3(
    1.0, 0.0, 0.0,
    0.0, cosA, -sinA,
    0.0, sinA, cosA
  );
  return clamp(yiq2rgb * (hueRotation * yiq), 0.0, 1.0);
}

float drawCircle(vec2 uv, vec2 center, float radius) {
  float d = length(uv - center);
  return smoothstep(radius, radius - 0.01, d);
}

void main() {
  vec2 uv = vUv;
  vec2 resolution = iResolution.xy;
  vec2 st = gl_FragCoord.xy / resolution;

  float time = iTime * 0.5;

  float glow = 0.0;
  vec3 color = vec3(0.0);

  float a = atan(uv.y - 0.5, uv.x - 0.5) + rot;
  float r = length(uv - 0.5);
  float wave = sin(10.0 * a + time) * 0.03;

  for (float i = 1.0; i <= 3.0; i++) {
    vec2 p = vec2(0.5) + vec2(cos(a + i * 2.0) * r, sin(a + i * 2.0) * r);
    float d = drawCircle(uv, p + wave, 0.15);
    glow += d * (1.2 - r);
  }

  color += vec3(0.2, 0.4, 0.8) * glow;
  color = hueShift(color, hue + time * 20.0);

  float pulse = 0.4 + 0.6 * sin(time * 2.0 + r * 12.0);
  color *= mix(1.0, pulse, hover * hoverIntensity);

  gl_FragColor = vec4(color, 1.0);
}
`;


const Orb: React.FC<OrbProps> = ({
  hue = 0,
  hoverIntensity = 0.3,
  rotateOnHover = true,
  forceHoverState = false,
  className = ''
}) => {
  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    /* ------------ OGL boilerplate ------------- */
    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        hue: { value: hue },
        hover: { value: 0 },
        rot: { value: 0 },
        hoverIntensity: { value: hoverIntensity }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w * dpr, h * dpr);
      gl.canvas.style.width = `${w}px`;
      gl.canvas.style.height = `${h}px`;
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    };
    window.addEventListener('resize', resize);
    resize();

    let targetHover = 0;
    let last = 0;
    let rot = 0;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const uvx = ((e.clientX - r.left) / Math.min(r.width, r.height)) * 2 - 1;
      const uvy = ((e.clientY - r.top) / Math.min(r.width, r.height)) * 2 - 1;
      targetHover = Math.hypot(uvx, uvy) < 0.8 ? 1 : 0;
    };
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', () => (targetHover = 0));

    let raf: number;
    const loop = (t = 0) => {
      raf = requestAnimationFrame(loop);
      const dt = (t - last) * 0.001;
      last = t;
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.hue.value = hue;
      program.uniforms.hoverIntensity.value = hoverIntensity;
      const hvr = forceHoverState ? 1 : targetHover;
      program.uniforms.hover.value += (hvr - program.uniforms.hover.value) * 0.1;
      if (rotateOnHover && hvr > 0.5) rot += dt * 0.3;
      program.uniforms.rot.value = rot;
      renderer.render({ scene: mesh });
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMove);
      container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  return <div ref={ctnDom} className={`orb-container ${className}`} />;
};

export default Orb;
