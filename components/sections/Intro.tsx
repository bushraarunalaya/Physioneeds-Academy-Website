import Section from "../ui/Section";
import Button from "../ui/Button";
import { ParallaxImage } from "../ui/Media";
import { stats } from "@/lib/data/content";

export default function Intro() {
  return (
    <Section>
      <div className="g2 mid">
        <div>
          <p className="ey">Since 2015 · 80,000+ physiotherapists in 190+ countries</p>
          <h1>Online physiotherapy courses that make your hands the reason patients recover.</h1>
          <p className="lead">Dry needling, manual therapy, sports rehabilitation, spine, knee and shoulder — certification courses, fellowships, PG diplomas and supervised internships taught by clinicians who still treat patients every week.</p>
          <div className="acts"><Button href="#catalogue">Explore programmes</Button><Button href="#free" variant="ghost">Open free library</Button></div>
          <p className="m top">Study alongside full-time practice · Verified certificate with QR · Lifetime revision access · EMI on longer programmes</p>
        </div>
        <div className="rel">
          <ParallaxImage src="https://res.cloudinary.com/dnckhtzkd/image/upload/v1781528343/WhatsApp_Image_2026-06-15_at_18.27.56_tpnpvc.jpg" alt="Dr. Chakshu Bansal, Founder of PhysioNeeds Academy" height={460} />
          <div className="badge"><b>Dr. Chakshu Bansal, PT, Ph.D.</b><p className="m">Founder &amp; Chief Mentor · 16+ yrs clinical · 6 books · 3× world record</p></div>
        </div>
      </div>
      <div className="g4 top">{stats.map(([v, l]) => <div className="c" key={l}><h3 className="big">{v}</h3><p className="m">{l}</p></div>)}</div>
    </Section>
  );
}
