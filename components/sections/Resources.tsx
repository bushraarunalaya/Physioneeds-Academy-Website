import Image from "next/image";
import Section, { Head } from "../ui/Section";
import { books, faqs } from "@/lib/data/content";

const bookImages = [
  "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/SxZbw12.png",
  "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/7Ep8w13.png",
  "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/rN31a14.png",
  "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/2HFfr45.png",
];

export function Books() {
  return (
    <Section id="books">
      <Head eyebrow="The bookshelf" title="Six physiotherapy books written between patients" lead="Printed copies ship across India; digital editions download instantly and are included with membership." />
      <div className="g4 book-grid">{books.map(([t, b, cta, h], n) => <a key={t} href={h} target="_blank" rel="noopener noreferrer" className="c card"><div className="book-cover"><Image src={bookImages[n]} alt="" fill sizes="(max-width: 900px) 90vw, 280px" /></div><h3>{t}</h3><p className="m">{b}</p><p className="more">{cta}</p></a>)}</div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="narrow">
        <Head eyebrow="Before you enrol" title="Questions worth asking" lead="If yours is not answered here, message the academic team on WhatsApp. A person replies, usually within the hour." />
        <div className="stack">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </Section>
  );
}
