'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function SkillsCrystal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(2, 0),
      new THREE.MeshPhongMaterial({
        color: 0x007acc,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        shininess: 100,
      }),
    );
    scene.add(crystal);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0x007acc, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', resize);

    let frameId = 0;
    const animate = () => {
      crystal.rotation.x += 0.005;
      crystal.rotation.y += 0.01;
      crystal.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      crystal.geometry.dispose();
      (crystal.material as THREE.Material).dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
  );
}
