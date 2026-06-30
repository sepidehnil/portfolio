'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const fragmentShader = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  varying vec2 v_texCoord;

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    for(float i = 1.0; i < 4.0; i++) {
      p.x += 0.3 / i * sin(i * 3.0 * p.y + u_time * 0.3);
      p.y += 0.3 / i * cos(i * 3.0 * p.x + u_time * 0.3);
    }

    float r = 0.5 + 0.5 * sin(p.x + p.y + 1.0);
    float g = 0.5 + 0.5 * sin(p.x + p.y + 2.0);
    float b = 0.5 + 0.5 * sin(p.x + p.y + 3.0);

    vec3 color1 = vec3(0.075, 0.478, 0.8);
    vec3 color2 = vec3(0.074, 0.074, 0.074);

    vec3 finalColor = mix(color2, color1, 0.1 * r);
    finalColor += 0.05 * vec3(r, g, b);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vertexShader = `
  varying vec2 v_texCoord;
  void main() {
    v_texCoord = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

export function HeroShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    let frameId = 0;
    const animate = (timestamp: number) => {
      uniforms.u_time.value = timestamp / 1000;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
