import { useEffect, useRef } from "react";
import * as THREE from "three";

// US cities with freight routes
const cities = [
  { name: "Los Angeles", lat: 34.05, lon: -118.24 },
  { name: "Chicago", lat: 41.88, lon: -87.63 },
  { name: "Houston", lat: 29.76, lon: -95.37 },
  { name: "Atlanta", lat: 33.75, lon: -84.39 },
  { name: "Dallas", lat: 32.78, lon: -96.80 },
  { name: "Memphis", lat: 35.15, lon: -90.05 },
  { name: "Louisville", lat: 38.25, lon: -85.76 },
  { name: "Indianapolis", lat: 39.77, lon: -86.16 },
  { name: "Columbus", lat: 39.96, lon: -82.99 },
  { name: "Nashville", lat: 36.16, lon: -86.78 },
  { name: "Kansas City", lat: 39.10, lon: -94.58 },
  { name: "Denver", lat: 39.74, lon: -104.99 },
  { name: "Phoenix", lat: 33.45, lon: -112.07 },
  { name: "Seattle", lat: 47.61, lon: -122.33 },
  { name: "Miami", lat: 25.76, lon: -80.19 },
  { name: "New York", lat: 40.71, lon: -74.01 },
];

// Freight route pairs
const routes = [
  [0, 1], [0, 3], [0, 12], [0, 13],
  [1, 2], [1, 6], [1, 7], [1, 15],
  [2, 4], [2, 14], [2, 3],
  [3, 9], [3, 14],
  [4, 10], [4, 5],
  [5, 6], [5, 9],
  [7, 8], [8, 15],
  [10, 11], [11, 12], [11, 13],
];

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function createArcCurve(start: THREE.Vector3, end: THREE.Vector3, radius: number): THREE.CatmullRomCurve3 {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const dist = start.distanceTo(end);
  mid.normalize().multiplyScalar(radius + dist * 0.15);
  return new THREE.CatmullRomCurve3([start, mid, end], false);
}

export default function GlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Globe wireframe sphere
    const globeRadius = 1.2;
    const wireGeo = new THREE.SphereGeometry(globeRadius, 40, 40);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // Atmosphere glow
    const glowGeo = new THREE.SphereGeometry(globeRadius * 1.05, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    globeGroup.add(new THREE.Mesh(glowGeo, glowMat));

    // City points
    const pointGeo = new THREE.SphereGeometry(0.015, 8, 8);
    const cityPositions: THREE.Vector3[] = [];

    cities.forEach((city) => {
      const pos = latLonToVec3(city.lat, city.lon, globeRadius);
      cityPositions.push(pos);

      // Bright point
      const pointMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
      const point = new THREE.Mesh(pointGeo, pointMat);
      point.position.copy(pos);
      globeGroup.add(point);

      // Pulse ring
      const ringGeo = new THREE.RingGeometry(0.018, 0.025, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);
    });

    // Route arcs
    const arcMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.25,
    });

    routes.forEach(([fromIdx, toIdx]) => {
      const from = cityPositions[fromIdx];
      const to = cityPositions[toIdx];
      const curve = createArcCurve(from, to, globeRadius);
      const points = curve.getPoints(40);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      globeGroup.add(new THREE.Line(geometry, arcMaterial));
    });

    // Moving cargo dots on routes
    const cargoDots: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; speed: number; t: number }[] = [];
    const cargoGeo = new THREE.SphereGeometry(0.012, 6, 6);

    routes.forEach(([fromIdx, toIdx], i) => {
      if (i % 2 !== 0) return; // only animate every other route
      const from = cityPositions[fromIdx];
      const to = cityPositions[toIdx];
      const curve = createArcCurve(from, to, globeRadius);
      const cargoMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
      const cargo = new THREE.Mesh(cargoGeo, cargoMat);
      globeGroup.add(cargo);
      cargoDots.push({
        mesh: cargo,
        curve,
        speed: 0.0008 + Math.random() * 0.0006,
        t: Math.random(),
      });
    });

    // Rotate globe to show Americas
    globeGroup.rotation.y = -1.8;
    globeGroup.rotation.x = 0.3;

    // Animation
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.003;

      // Slow rotation
      globeGroup.rotation.y += 0.0008;

      // Move cargo dots
      cargoDots.forEach((dot) => {
        dot.t += dot.speed;
        if (dot.t > 1) dot.t = 0;
        const pos = dot.curve.getPoint(dot.t);
        dot.mesh.position.copy(pos);
      });

      // Pulse city rings
      globeGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.RingGeometry) {
          const scale = 1 + Math.sin(time * 3 + child.position.x * 5) * 0.3;
          child.scale.set(scale, scale, scale);
          (child.material as THREE.MeshBasicMaterial).opacity = 0.4 - Math.sin(time * 3 + child.position.x * 5) * 0.2;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px]"
      style={{ background: "transparent" }}
    />
  );
}
