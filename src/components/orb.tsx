import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec3 } from 'ogl';
import './Orb.css';

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
/* --- long shader from Orb.txt, unchanged --- */
precision highp float;
/* (keep everything exactly as provided in Orb.txt) */
/* (for brevity here, paste the full fragmentShader string) */
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
