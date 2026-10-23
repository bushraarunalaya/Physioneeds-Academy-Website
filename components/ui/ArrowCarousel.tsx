"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Scroll-snap carousel with arrow buttons on both sides. Arrows disable at either end. */
export default function ArrowCarousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  useEffect(() => {
    const el = ref.current!;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const by = (dir: number) => {
    const el = ref.current!;
    const card = el.firstElementChild as HTMLElement;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };
  return (
    <div className="car">
      <button className="arw l" aria-label="Previous" disabled={edge.start} onClick={() => by(-1)}>←</button>
      <div ref={ref} className="car-track" role="group" aria-label={label} tabIndex={0}>{children}</div>
      <button className="arw r" aria-label="Next" disabled={edge.end} onClick={() => by(1)}>→</button>
    </div>
  );
}
