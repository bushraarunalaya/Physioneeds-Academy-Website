"use client";
import { useEffect, useState } from "react";
import Section, { Head } from "../ui/Section";
import { offers, OFFER_ENDS_AT } from "@/lib/data/content";

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const end = new Date(OFFER_ENDS_AT).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return left;
}

export default function Offers() {
  const left = useCountdown();
  const p = (n: number) => String(n).padStart(2, "0");
  const parts = left === null ? ["--", "--", "--", "--"] : [p(Math.floor(left / 864e5)), p(Math.floor(left / 36e5) % 24), p(Math.floor(left / 6e4) % 60), p(Math.floor(left / 1e3) % 60)];
  return (
    <Section tone="dk">
      <Head eyebrow="Current offers" title="Intake pricing, running this month" />
      <div className="clock" role="timer" aria-label="Time left on current offers">{["Days", "Hrs", "Min", "Sec"].map((l, i) => <div className="c" key={l}><h3>{parts[i]}</h3><p className="m">{l}</p></div>)}</div>
      <div className="g3">
        {offers.map(([tag, t, b, code]) => (
          <div className="c card" key={code}>
            <span className="tag">{tag}</span><h3>{t}</h3><p className="m">{b}</p>
            <button className="code" onClick={() => navigator.clipboard?.writeText(code)} aria-label={`Copy code ${code}`}>{code} · Copy</button>
          </div>
        ))}
      </div>
    </Section>
  );
}
