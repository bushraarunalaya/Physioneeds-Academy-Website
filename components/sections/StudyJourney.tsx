"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { Head } from "../ui/Section";
import { steps } from "@/lib/data/content";

const svg = (d: ReactNode) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>;
const ICONS = [
  svg(<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>),
  svg(<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m10 9.5 4.5 2.5-4.5 2.5z" /></>),
  svg(<><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.4" /><path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5M15.5 14.8c2.4-.3 4.3.9 5 3.7" /></>),
  svg(<path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3L3 14.5a1.5 1.5 0 0 1 2.4-1.7L8 15" />),
  svg(<><circle cx="12" cy="9" r="5" /><path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" /></>),
];

/** The five steps as a path: a gold line draws as you scroll and each stop lights up when you reach it. */
export default function StudyJourney() {
  const root = useRef<HTMLOListElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = root.current!.querySelectorAll<HTMLElement>(".jstep");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach((el) => el.classList.add("on")); line.current!.style.transform = "scaleX(1)"; return; }
    const ctx = gsap.context(() => {
      gsap.fromTo(line.current, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 65%", scrub: 0.6 } });
      items.forEach((el) => ScrollTrigger.create({ trigger: el, start: "top 80%", toggleClass: { targets: el, className: "on" } }));
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <Section tone="alt">
      <Head eyebrow="How study works here" title="Designed around a working clinician’s week" lead="Nobody is asking you to take leave. The structure assumes you are seeing patients tomorrow morning." />
      <ol className="journey" ref={root}>
        <span className="jline" aria-hidden="true"><span ref={line} /></span>
        {steps.map(([t, b], n) => (
          <li className="jstep" key={t} style={{ ["--n" as string]: n }}>
            <span className="jnode">{ICONS[n]}</span>
            <div className="jcard"><span className="jnum">Step {n + 1}</span><h3>{t}</h3><p className="m">{b}</p></div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
