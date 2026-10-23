"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Background animation: two gold infinity-loop tubes (echoing the logo) and drifting particles. Pauses off-screen. */
class Lemniscate extends THREE.Curve<THREE.Vector3> {
  constructor(private s: number) { super(); }
  getPoint(t: number, target = new THREE.Vector3()) {
    const a = t * Math.PI * 2, d = 1 + Math.sin(a) ** 2;
    return target.set((this.s * Math.cos(a)) / d, (this.s * Math.sin(a) * Math.cos(a)) / d, Math.sin(a * 2) * 0.9);
  }
}

export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const gold = (o: number) => new THREE.MeshBasicMaterial({ color: 0xfbb02e, wireframe: true, transparent: true, opacity: o });
    const big = new THREE.Mesh(new THREE.TubeGeometry(new Lemniscate(5), 240, 0.22, 10, true), gold(0.32));
    const small = new THREE.Mesh(new THREE.TubeGeometry(new Lemniscate(3), 200, 0.14, 8, true), gold(0.5));
    big.position.x = small.position.x = 3;
    scene.add(big, small);

    const n = 500, pos = new Float32Array(n * 3);
    for (let i = 0; i < n * 3; i++) pos[i] = (Math.random() - 0.5) * 22;
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xfbb02e, size: 0.05, transparent: true, opacity: 0.6 }));
    scene.add(pts);

    const size = () => { const { clientWidth: w, clientHeight: h } = el; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    size();
    const ro = new ResizeObserver(size); ro.observe(el);
    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => { mouse.x = e.clientX / window.innerWidth - 0.5; mouse.y = e.clientY / window.innerHeight - 0.5; };
    window.addEventListener("pointermove", onMove);

    let visible = true, raf = 0;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 }); io.observe(el);
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const s = t * 0.0002;
      big.rotation.y = s * 1.4 + mouse.x * 0.6; big.rotation.x = Math.sin(s) * 0.3 + mouse.y * 0.4;
      small.rotation.y = -s * 2 + mouse.x * 0.8; small.rotation.z = s;
      pts.rotation.y = s * 0.5;
      renderer.render(scene, camera);
    };
    if (reduce) renderer.render(scene, camera); else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener("pointermove", onMove);
      [big, small].forEach((m) => { m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
      pg.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, []);
  return <div ref={host} className="scene" aria-hidden="true" />;
}
