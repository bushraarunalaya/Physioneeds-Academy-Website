"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Pins the section and scrolls its track sideways as you scroll down (desktop). Native swipe on mobile. */
export default function HorizontalScroll({ header, children }: { header: ReactNode; children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const dist = () => Math.max(0, track.current!.scrollWidth - window.innerWidth + 64);
      gsap.to(track.current, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: wrap.current, pin: true, scrub: 0.8, end: () => "+=" + dist(), invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <div ref={wrap} className="hz">
      <div className="w">{header}</div>
      <div ref={track} className="hz-track">{children}</div>
    </div>
  );
}
