import Image from "next/image";
import Section, { Head } from "../ui/Section";
import Button from "../ui/Button";
import LeadForm from "../forms/LeadForm";
import { ParallaxImage } from "../ui/Media";

export function Callback() {
  return (
    <Section id="callback" tone="alt">
      <div className="g2 mid">
        <Head eyebrow="Course guidance" title="Still weighing a certification against a fellowship?" lead="Tell us your qualification, your caseload and your goal. We will map the honest answer, even when that answer is the cheaper programme." />
        <div className="c"><LeadForm kind="callback" fields={["name", "phone", "qualification", "interest"]} cta="Request a free callback" success="Request received. A counsellor will reach you shortly on WhatsApp." /><div className="top"><Button href="https://wa.me/918090080906?text=Hi%20PhysioNeeds%20Academy%2C%20please%20help%20me%20choose%20between%20a%20certification%20and%20a%20fellowship" variant="ghost">Ask on WhatsApp</Button></div></div>
      </div>
    </Section>
  );
}

export function FreeHandbook() {
  return (
    <Section id="free">
      <div className="g2 mid">
        <ParallaxImage src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" alt="Physiotherapy protocol handbook" height={440} />
        <div>
          <Head eyebrow="Free · PDF" title="The Outpatient Protocol Handbook" lead="Forty-eight pages of assessment sequences and treatment progressions for the eight presentations that fill an Indian outpatient department." />
          <p className="m gap">Printable subjective and objective checklists · session-by-session progressions for low back, knee and shoulder · home-programme sheets</p>
          <LeadForm kind="handbook" fields={["name", "phone", "email", "qualification"]} cta="Send me the handbook" success="Request received. The handbook is on its way." />
        </div>
      </div>
    </Section>
  );
}

export function Masterclass() {
  return (
    <Section id="masterclass" tone="dk">
      <div className="g2 mid">
        <div>
          <Head eyebrow="Free · Live seat" title="Thursday evening clinical masterclass" lead="Every Thursday at 8:30 pm IST a faculty member takes one difficult case apart on camera and answers questions live. Attendance is free and the recording is shared afterwards." />
          <p className="m">One full case from history to discharge planning · bring your own patient question · recording and case notes to everyone who registers</p>
        </div>
        <div className="c"><LeadForm dark kind="masterclass" fields={["name", "phone", "email", "qualification"]} cta="Reserve my seat" success="Registration received. One reminder before the session, nothing else." /></div>
      </div>
    </Section>
  );
}

export function SkillsReview() {
  return (
    <Section tone="alt">
      <Head eyebrow="Accreditation & recognition" title="Recognised, and verifiable" />
      <div className="logos"><Image src="https://image2url.com/r2/default/images/1775215113902-6a381e44-2dc5-441d-b684-ee7ef654279b.png" alt="PhysioNeeds Academy accreditation and recognition logos" width={900} height={160} unoptimized /></div>
      <div className="g2 mid top">
        <Head eyebrow="Free access" title="A twelve-question clinical skills review" lead="Four minutes of honest questions. You get a written summary of where your gaps sit and which programmes address them, including the recommendation to study nothing at all if that is right." />
        <div className="c"><LeadForm kind="review" fields={["name", "phone", "qualification", "years"]} cta="Begin the review" success="Review request received. Your results will be sent to WhatsApp and email." /></div>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="next-step" tone="dk">
      <div className="g2 mid">
        <div>
          <Head eyebrow="Your next step" title="Six months from now, you will wish you had started today." />
          <div className="acts"><Button href="#callback">Talk to an academic counsellor</Button><Button href="#free" variant="ghost">Claim free access</Button></div>
        </div>
        <div className="c"><h3>One clinical letter a week. Nothing else.</h3><p className="m gap">A case breakdown, a technique note and one paper worth reading, every Sunday morning.</p><LeadForm dark kind="newsletter" fields={["email", "qualification"]} cta="Subscribe" success="You are subscribed. The next letter arrives on Sunday." /></div>
      </div>
    </Section>
  );
}
