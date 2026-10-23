import Image from "next/image";
import Section, { Head } from "../ui/Section";
import HorizontalScroll from "../motion/HorizontalScroll";
import { specialties } from "@/lib/data/content";

/** Pinned horizontal-scroll gallery. Each card deep-links into the catalogue filter. */
export default function Specialties() {
  return (
    <Section tone="dk" full>
      <HorizontalScroll header={<Head eyebrow="Browse by clinical specialty" title="What walks into your OPD every week?" lead="Pick a region and see every course, technique and book that supports it." />}>
        {specialties.map(([t, n, d, img]) => (
          <a key={t} href="#catalogue" className="spec">
            <div className="frame" style={{ height: 240 }}><Image src={img} alt={`${t} course`} fill sizes="320px" className="cover" /></div>
            <span className="tag">{n}</span><h3>{t}</h3><p className="m">{d}</p>
          </a>
        ))}
      </HorizontalScroll>
    </Section>
  );
}
