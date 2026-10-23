"use client";
import { useEffect, useState } from "react";
import Section, { Head } from "../ui/Section";
import { testimonials } from "@/lib/data/content";

/** Curved 3D carousel: the active card faces you, the others fan out behind it on a curve. Arrows, dots, keyboard, click-to-focus, autoplay. */
export default function Testimonials() {
  const n = testimonials.length;
  const [a, setA] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setA((v) => (v + d + n) % n);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setA((v) => (v + 1) % n), 5000);
    return () => clearInterval(id);
  }, [paused, n]);
  return (
    <Section id="proof" tone="dk">
      <Head eyebrow="Who studies here" title="Not only new graduates. Clinicians with thirty years behind them." lead="Over 40% of learners have 10+ years in practice, with a 4.9★ average programme rating." />
      <div className="stage" role="group" aria-roledescription="carousel" aria-label="Learner stories" tabIndex={0}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); }}>
        <div className="ring3d">
          {testimonials.map(([yrs, q, who, role], i) => {
            const o = ((i - a + n + n / 2) % n) - n / 2;
            const ao = Math.abs(o);
            const initials = who.replace("Dr. ", "").split(" ").map((w) => w[0]).slice(0, 2).join("");
            return (
              <figure key={who} className={`t3 ${o === 0 ? "now" : ""}`} aria-hidden={o !== 0}
                style={{ ["--o" as string]: o, ["--ao" as string]: ao, opacity: ao > 2.5 ? 0 : 1 - ao * 0.22, zIndex: 10 - Math.round(ao * 2), pointerEvents: ao > 2.5 ? "none" : "auto" }}
                onClick={() => o !== 0 && setA(i)}>
                <span className="tag">{yrs} ★★★★★</span>
                <blockquote>“{q}”</blockquote>
                <figcaption><span className="av" aria-hidden="true">{initials}</span><span><b>{who}</b><span className="m">{role}</span></span></figcaption>
              </figure>
            );
          })}
        </div>
        <button className="arw l" aria-label="Previous story" onClick={() => go(-1)}>←</button>
        <button className="arw r" aria-label="Next story" onClick={() => go(1)}>→</button>
      </div>
      <div className="dots" role="tablist" aria-label="Choose a story">
        {testimonials.map(([, , who], i) => <button key={who} role="tab" aria-selected={i === a} aria-label={`Story ${i + 1}`} className={i === a ? "on" : ""} onClick={() => setA(i)} />)}
      </div>
    </Section>
  );
}
