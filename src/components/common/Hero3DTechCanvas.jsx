import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/useTheme";

export const Hero3DTechCanvas = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    // Optimized pixel ratio to prevent GPU lag on high-DPI screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Color definitions based on theme
    const isDark = theme === "dark";
    const primaryColor = isDark ? 0xf59e0b : 0xd97706; // Amber
    const secondaryColor = isDark ? 0x10b981 : 0x059669; // Emerald
    const accentColor = isDark ? 0x38bdf8 : 0x0284c7; // Sky blue

    // Group to hold rotating tech objects
    const techGroup = new THREE.Group();
    if (width < 1024) {
      techGroup.position.set(0, 0, 0);
    } else {
      techGroup.position.set(1.4, 0.1, 0);
    }
    scene.add(techGroup);

    // 1. Optimized Wireframe Polyhedron (detail: 0 = 20 clean geometric faces)
    const coreGeometry = new THREE.IcosahedronGeometry(1.3, 0);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    techGroup.add(coreMesh);

    // 2. Inner core
    const innerGeometry = new THREE.SphereGeometry(0.5, 12, 12);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.28,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    techGroup.add(innerMesh);

    // 3. Orbiting Tech Rings
    const ringGeometry1 = new THREE.TorusGeometry(2.0, 0.015, 6, 48);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      transparent: true,
      opacity: isDark ? 0.55 : 0.38,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ringMesh1.rotation.x = Math.PI / 3;
    techGroup.add(ringMesh1);

    const ringGeometry2 = new THREE.TorusGeometry(2.35, 0.012, 6, 48);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: isDark ? 0.42 : 0.28,
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 5;
    techGroup.add(ringMesh2);

    // 4. Floating Tech Nodes / Particles
    const particleCount = 60;
    const particlePositions = new Float32Array(particleCount * 3);
    const radius = 2.6;

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius + 0.6;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.05,
      transparent: true,
      opacity: isDark ? 0.75 : 0.5,
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    techGroup.add(particlePoints);

    // State flags for ultra-smooth 60+ FPS scroll
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isIntersecting = true;
    let isScrolling = false;
    let scrollTimeout = null;
    let animationFrameId = null;

    // Passive pointer tracking
    const handlePointerMove = (e) => {
      if (isScrolling) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.7;
      targetRotationX = -y * 0.7;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Scroll listener: pause render while actively scrolling to give 100% thread to smooth browser scroll
    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (width < 1024) {
        techGroup.position.set(0, 0, 0);
      } else {
        techGroup.position.set(1.4, 0.1, 0);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Intersection Observer: Zero GPU usage when hero is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Clock & Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip GPU render tick if scrolled out of view or actively scrolling
      if (!isIntersecting || isScrolling) return;

      const delta = clock.getDelta();

      techGroup.rotation.y += delta * 0.22;
      ringMesh1.rotation.z += delta * 0.32;
      ringMesh2.rotation.z -= delta * 0.25;
      innerMesh.rotation.x -= delta * 0.18;

      techGroup.rotation.x += (targetRotationX - techGroup.rotation.x) * 0.05;
      techGroup.rotation.y += (targetRotationY - techGroup.rotation.y) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
