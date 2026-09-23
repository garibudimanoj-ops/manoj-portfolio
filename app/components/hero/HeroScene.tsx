"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Initialize Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.2;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Root interactive group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Outer Geometric Lattice (Icosahedron Wireframe)
    const icoGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(icoGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.LineSegments(
      wireframeGeometry,
      wireframeMaterial
    );
    rootGroup.add(wireframeMesh);

    // 2. Glowing Nodes at Vertices
    const vertexPointsMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.09,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(icoGeometry, vertexPointsMaterial);
    rootGroup.add(nodePoints);

    // 3. Inner Crystalline Tech Core (Octahedron)
    const coreGeometry = new THREE.OctahedronGeometry(1.0, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      emissive: 0x0f172a,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // Inner wireframe overlay
    const coreWireGeometry = new THREE.WireframeGeometry(coreGeometry);
    const coreWireMaterial = new THREE.LineBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.7,
    });
    const coreWireMesh = new THREE.LineSegments(
      coreWireGeometry,
      coreWireMaterial
    );
    rootGroup.add(coreWireMesh);

    // 4. Orbital Tech Rings
    const ringGeometry = new THREE.TorusGeometry(2.65, 0.015, 8, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    rootGroup.add(ring2);

    // 5. Subtle Data Constellation Particles (Background depth)
    const particleCount = 35;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    rootGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.0, 15);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x6366f1, 2.5, 15);
    blueLight.position.set(-4, -3, 3);
    scene.add(blueLight);

    // Smooth Mouse / Pointer Tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = mouseX * 0.7;
      targetRotX = mouseY * 0.5;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // Animation & Lifecycle Management
    let animationFrameId: number;
    let isVisible = true;
    const startTime = performance.now();

    const animate = () => {
      if (!isVisible) return;

      const elapsedTime = (performance.now() - startTime) / 1000;

      if (!prefersReducedMotion) {
        // Smooth lerp towards pointer position
        currentRotX += (targetRotX - currentRotX) * 0.06;
        currentRotY += (targetRotY - currentRotY) * 0.06;

        rootGroup.rotation.x = currentRotX + Math.sin(elapsedTime * 0.4) * 0.05;
        rootGroup.rotation.y = currentRotY + elapsedTime * 0.15;
        rootGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

        // Counter-rotate rings and inner core
        ring1.rotation.z += 0.004;
        ring2.rotation.z -= 0.004;
        coreMesh.rotation.y -= 0.005;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Pause rendering when tab is hidden or scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting && document.visibilityState === "visible";
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Responsive Canvas Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Kick off animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Comprehensive Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();

      // Dispose Geometries and Materials
      icoGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      vertexPointsMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      coreWireGeometry.dispose();
      coreWireMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ring2.material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[440px] lg:max-w-[480px] mx-auto flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Soft background glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Interactive WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing pointer-events-auto"
      />
    </div>
  );
}
