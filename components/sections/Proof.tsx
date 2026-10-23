import Image from "next/image";
import Section, { Head } from "../ui/Section";
import Button from "../ui/Button";
import { VideoEmbed } from "../ui/Media";
import { founders } from "@/lib/data/content";

export function Founders() {
  return (
    <Section id="founders" tone="alt">
      <Head eyebrow="The people who teach here" title="Two clinicians, one standard" lead="PhysioNeeds Academy was built by practitioners, not by a content company. Both founders still teach, still publish, and still answer student questions personally." />
      <div className="g2">
        {founders.map((f) => (
          <article className="c" key={f.name}>
            <div className="frame" style={{ height: 300 }}><Image src={f.img} alt={f.name} fill sizes="560px" className="contain" /></div>
            <h3 className="gap">{f.name}</h3><p className="m">{f.role}</p><p className="m">{f.facts}</p>
            <blockquote>“{f.quote}”</blockquote><p className="m">{f.skills}</p>
          </article>
        ))}
      </div>
      <div className="acts top"><Button href="#catalogue">See the programmes they teach</Button><Button href="#callback" variant="ghost">Get the prospectus</Button></div>
    </Section>
  );
}

export function ClassVideo() {
  return (
    <Section tone="dk">
      <div className="g2 mid">
        <VideoEmbed src="https://player.vimeo.com/video/1209517242?title=0&byline=0&portrait=0" title="Why PhysioNeeds Academy exists" height={340} />
        <div>
          <Head eyebrow="Inside a class" title="Watch a full teaching session before deciding anything" lead="This is not a trailer. It is an unedited lesson pulled straight from a paid programme." />
          <p className="m gap">Assessment on a real patient, start to finish · hand placement and dosage at palpation level · the reasoning behind every progression</p>
          <div className="acts"><Button href="#masterclass">Get full demo access</Button></div>
        </div>
      </div>
    </Section>
  );
}

const SHIFTS = [
  ["Machine-dependent sessions: IFT, ultrasound, hot pack, repeat.", "Hands-on confidence in needling, manual therapy, taping and IASTM."],
  ["Assessment anxiety when a complex case walks in.", "Structured reasoning for spine, knee, shoulder, sports and MSK cases."],
  ["A CV identical to a thousand other BPT graduates.", "A specialist suffix that changes how a CV is read."],
  ["Patients dropping off after three or four sessions.", "Retention and referrals because outcomes arrive faster."],
  ["Salary frozen, with no clear route to a raise or private practice.", "Leverage to negotiate salary, package rates or open a clinic."],
];

/** Each row flips on hover or focus: the old situation fades back, the new one lights up. */
export function Change() {
  return (
    <Section>
      <Head eyebrow="The change" title="What actually shifts, six months in" lead="Hover a row to see where it ends up." />
      <div className="shift-head" aria-hidden="true"><span>Where most physios are</span><span /><span>Where our alumni are</span></div>
      <ul className="shifts">
        {SHIFTS.map(([from, to]) => (
          <li className="shift" key={from} tabIndex={0}>
            <p className="from"><span className="ico" aria-hidden="true">○</span>{from}</p>
            <span className="arr" aria-hidden="true">→</span>
            <p className="to"><span className="ico" aria-hidden="true">✓</span>{to}</p>
          </li>
        ))}
      </ul>
      <div className="conversation-cta"><span className="conversation-mark">↗</span><div><b>Not sure which shift is yours?</b><p className="m">Start a real conversation with an academic counsellor. Tell us what you treat, and we’ll map the next six months.</p></div><Button href="#callback" variant="ghost">Start the conversation</Button></div>
    </Section>
  );
}

export function VideoTestimonials() {
  return (
    <Section>
      <Head eyebrow="In their own words" title="Unscripted, from physiotherapists who finished" lead="Recorded on their own phones, in their own clinics, months after completing." />
      {/* TODO: replace slots with the real video testimonials */}
      <div className="g3 video-grid"><VideoEmbed src="https://player.vimeo.com/video/1217223033?title=0&byline=0&portrait=0" title="PhysioNeeds learner testimonial" height={250} /><VideoEmbed src="https://player.vimeo.com/video/1217223034?title=0&byline=0&portrait=0" title="PhysioNeeds learner testimonial" height={250} /><VideoEmbed src="https://player.vimeo.com/video/1217223036?title=0&byline=0&portrait=0" title="PhysioNeeds learner testimonial" height={250} /></div>
      <div className="acts top"><Button href="#free">Start free like they did</Button></div>
    </Section>
  );
}

export function Credentials() {
  return (
    <Section tone="alt">
      <div className="g2">
        <div>
          <Head eyebrow="Credentials" title="A certificate that survives scrutiny" lead="Physiotherapists have been handed enough worthless PDFs. So the certificate is filmed before you ever pay for a programme." />
          <ul className="list"><li>UK-accredited certification you can present to hospitals and employers.</li><li>A professional suffix — CSPRS, CSRS, CKRS, CDNE, FOMT — recognised across the profession.</li><li>Unique ID and QR verification, so any employer can confirm it in seconds.</li><li>Digital copy immediately, printed copy dispatched to your address.</li></ul>
          <div className="acts"><Button href="#catalogue">Choose a programme</Button></div>
        </div>
        <div id="outcomes">
          <Head eyebrow="Patient outcomes" title="The only assessment that really counts" lead="Range restored, pain reduced, function returned. These patients were treated using protocols taught inside the programmes." />
          <VideoEmbed src="https://player.vimeo.com/video/1200958266?title=0&byline=0&portrait=0" title="PhysioNeeds clinical outcomes" height={250} />
        </div>
      </div>
    </Section>
  );
}
