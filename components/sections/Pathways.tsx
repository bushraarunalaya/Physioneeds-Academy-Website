import Section, { Head } from "../ui/Section";
import Button from "../ui/Button";
import ArrowCarousel from "../ui/ArrowCarousel";
import { problems, doors } from "@/lib/data/content";

export function Guidance() {
  return (
    <Section tone="dk">
      <div className="band">
        <div><h3>Not sure which course fits the patients you actually treat?</h3><p className="lead">Speak to an academic counsellor before spending a rupee. Free, no pressure, no sales sequence.</p></div>
        <div className="acts"><Button href="#callback">Get course guidance</Button><Button href="#callback" variant="ghost">Get prospectus</Button></div>
      </div>
    </Section>
  );
}

export function Problems() {
  return (
    <Section>
      <Head eyebrow="The real reason careers stall" title="Your degree gave you knowledge. Patients pay for confidence." lead="Find the one that sounds like your week." />
      <ArrowCarousel label="Common frustrations">
        {problems.map(([q, b, cta, href]) => (
          <a key={q} href={href} className="pb">
            <span className="qm" aria-hidden="true">“</span>
            <h3>{q}</h3><p className="m">{b}</p><p className="more">{cta} →</p>
          </a>
        ))}
      </ArrowCarousel>
    </Section>
  );
}

export function Doors() {
  return (
    <Section tone="alt">
      <Head eyebrow="Four clear doors" title="Everything we offer sits in one of these four places" />
      <div className="g4">
        {doors.map(([k, t, b, h]) => (
          <a key={k} href={h} className={`c card door ${k === "D" ? "inv" : ""}`}><span className="tag">{k}</span><h3>{t}</h3><p className="m">{b}</p></a>
        ))}
      </div>
    </Section>
  );
}

export function Why() {
  return (
    <Section>
      <div className="g2 mid">
        <div>
          <Head eyebrow="Why we exist" title="College taught you conditions. Patients ask you for outcomes." lead="There is a gap between naming a pathology and knowing what to do with your hands for the next twenty minutes. Nobody closes it for you after graduation." />
          <div className="acts"><Button href="#catalogue">Find the right programme</Button><Button href="#callback" variant="ghost">Talk to a counsellor</Button></div>
        </div>
        <div className="stack">
          <div className="c"><b>Every technique is demonstrated on a real patient</b>, never described over a slide.</div>
          <div className="c"><b>Every module ends with a protocol</b> you can apply in tomorrow morning’s clinic.</div>
          <div className="c"><b>Every faculty member still treats patients</b>, which keeps the teaching current.</div>
        </div>
      </div>
    </Section>
  );
}
