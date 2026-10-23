import type { ReactNode } from "react";

export default function Section({ id, tone = "", full = false, children }: { id?: string; tone?: "" | "dk" | "alt"; full?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`sec ${tone}`}>
      {full ? children : <div className="w">{children}</div>}
    </section>
  );
}

export function Head({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <header className="head">
      {eyebrow && <p className="ey">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
