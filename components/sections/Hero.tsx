"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { slides } from "@/lib/data/content";

/** One message at a time. Slides cross-fade with a quiet editorial photo treatment. */
export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + slides.length) % slides.length);
  return (
    <section className="hero dk" aria-roledescription="carousel" aria-label="Why physiotherapists choose PhysioNeeds" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="hero-stack">
        {slides.map((s, n) => (
          <article key={s.title} className={`hero-slide ${n === i ? "active" : ""}`} aria-hidden={n !== i} aria-roledescription="slide" aria-label={`${n + 1} of ${slides.length}`}>
            <div className="hero-copy">
              <p className="ey">{s.eyebrow}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.body}</p>
              <div className="acts"><Button href={s.ctas[0][1]}>{s.ctas[0][0]}</Button><Button href={s.ctas[1][1]} variant="ghost">{s.ctas[1][0]}</Button></div>
            </div>
            <div className="hero-art">
              <span className="halo" aria-hidden="true" />
              <div className="arch"><Image src={s.img} alt={s.alt} fill sizes="(max-width: 900px) 80vw, 460px" className="cover" priority={n === 0} /></div>
              <div className="chip-float"><b>80,000+</b><span>physiotherapists trained</span></div>
            </div>
          </article>
        ))}
      </div>
      <div className="hero-ctl">
        <button className="rnd" aria-label="Previous slide" onClick={() => go(i - 1)}>←</button>
        <div className="pgs">
          {slides.map((s, n) => (
            <button key={s.title} className="pg" aria-label={`Go to slide ${n + 1}`} aria-current={n === i} onClick={() => go(n)}>
              {n === i && <i key={i} className={paused ? "paused" : ""} onAnimationEnd={() => go(i + 1)} />}
              {n < i && <i className="full" />}
            </button>
          ))}
        </div>
        <button className="rnd" aria-label="Next slide" onClick={() => go(i + 1)}>→</button>
      </div>
    </section>
  );
}
