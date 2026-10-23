"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Section, { Head } from "../ui/Section";
import Button from "../ui/Button";
import { courses, courseImage, GROUPS, TAGS, type Group } from "@/lib/data/courses";
import { matchCourse } from "@/lib/search";

/** Live search + specialty chips + category tabs, all combined. Reads lib/data/courses (swap for an API later). */
export default function Catalogue() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [group, setGroup] = useState<Group | null>(null);
  const list = useMemo(() => courses.filter((c) => matchCourse(c, q) && (!tag || c.tags.includes(tag)) && (!group || c.group === group)), [q, tag, group]);
  const filtered = Boolean(q || tag || group);
  const visible = filtered ? list : list.slice(0, 5);
  const reset = () => { setQ(""); setTag(null); setGroup(null); };
  const chip = (label: string, on: boolean, fn: () => void) => <button key={label} className={`chip ${on ? "on" : ""}`} aria-pressed={on} onClick={fn}>{label}</button>;
  return (
    <Section id="catalogue">
      <Head eyebrow="The full catalogue" title="Programmes for every stage of a career" lead="Short certifications to sharpen one skill. Fellowships and PG diplomas to build a specialist identity. Internships and city labs to put your hands on real patients." />
      <div className="c filters">
        <label className="f">Search by course, region or suffix
          <span className="sbox"><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try spine, CDNE, dn, msk, fellowship sports" />{q && <button type="button" className="x" aria-label="Clear search" onClick={() => setQ("")}>×</button>}</span>
        </label>
        <div className="chips" role="group" aria-label="Specialty">{chip("All specialties", !tag, () => setTag(null))}{TAGS.map((t) => chip(t, tag === t, () => setTag(tag === t ? null : t)))}</div>
        <div className="chips" role="group" aria-label="Category">{chip("All categories", !group, () => setGroup(null))}{GROUPS.map((g) => chip(g, group === g, () => setGroup(group === g ? null : g)))}</div>
      </div>
      <p className="m count" aria-live="polite">{filtered ? `${list.length} matching programmes` : `5 featured programmes of ${courses.length}`}{filtered && <button className="lnk" onClick={reset}>Clear filters</button>}</p>
      {list.length === 0 ? (
        <div className="c empty"><h3>Nothing matched that search</h3><p className="m">Try another keyword, or ask a counsellor and we will point you to the right programme.</p><div className="acts"><button className="btn" onClick={reset}>Show all programmes</button><Button href="#callback" variant="ghost">Ask a counsellor</Button></div></div>
      ) : (
        <div className="g4 pgrid" key={`${q}|${tag}|${group}`}>
          {visible.map((c, n) => (
            <a key={c.code} href={c.href} target="_blank" rel="noopener noreferrer" className="pcard" style={{ ["--i" as string]: n }}>
              <div className="pimg">
                <Image src={courseImage(c)} alt="" fill sizes="(max-width: 900px) 90vw, 280px" className="cover" />
                <span className="pcode">{c.code}</span>
              </div>
              <div className="pbody">
                <b>{c.title}</b>
                <span className="m">{c.note}</span>
                <span className="go">View programme <i aria-hidden="true">→</i></span>
              </div>
            </a>
          ))}
        </div>
      )}
      <div className="acts top"><Button href="https://www.e-physioneeds.com/s/store">Browse the full course store</Button><Button href="#callback" variant="ghost">Help me choose a programme</Button></div>
    </Section>
  );
}
