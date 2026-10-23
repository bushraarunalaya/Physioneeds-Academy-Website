"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { courses, courseImage, GROUPS, type Group } from "@/lib/data/courses";

const featuredCodes = ["FSPR", "FMPR", "CSPRS", "CSRS"];
type CourseMeta = { instructor: string; price?: string; was?: string };
const COURSE_META: Record<string, CourseMeta> = {
  CSPRS: { instructor: "Dr. Chakshu Bansal", price: "₹32,000", was: "₹70,000" }, CMPRS: { instructor: "Dr. Chakshu Bansal", price: "₹32,000", was: "₹70,000" },
  CSRS: { instructor: "Dr. Chakshu Bansal", price: "₹9,000", was: "₹28,000" }, CKRS: { instructor: "Dr. Chakshu Bansal", price: "₹9,000", was: "₹28,000" }, CSHRS: { instructor: "Dr. Chakshu Bansal", price: "₹9,000", was: "₹28,000" }, SPORTS: { instructor: "Dr. Chakshu Bansal", price: "₹32,000", was: "₹70,000" },
  CDNE: { instructor: "Dr. Chakshu Bansal", price: "₹1,200", was: "₹9,999" }, CTE: { instructor: "Dr. Chakshu Bansal", price: "₹1,200", was: "₹9,999" }, CIE: { instructor: "Dr. Chakshu Bansal", price: "₹2,600", was: "₹13,999" }, MET: { instructor: "Dr. Chakshu Bansal", price: "₹799", was: "₹6,000" }, MFR: { instructor: "Dr. Chakshu Bansal", price: "₹799", was: "₹3,996" }, PRT: { instructor: "Dr. Chakshu Bansal", price: "₹799", was: "₹5,000" },
  FSPR: { instructor: "Dr. Chakshu Bansal", price: "₹52,998", was: "₹1,20,000" }, FMPR: { instructor: "Dr. Chakshu Bansal · Prof. Krishna N. Sharma", price: "₹53,000", was: "₹1,20,000" }, FOPR: { instructor: "Dr. Chakshu Bansal", price: "₹53,000", was: "₹1,20,000" }, FOMT: { instructor: "Dr. Chakshu Bansal", price: "₹52,998", was: "₹1,20,000" }, FSMIM: { instructor: "Dr. Chakshu Bansal", price: "₹57,000", was: "₹1,20,000" },
  PGDOPR: { instructor: "Dr. Chakshu Bansal", price: "₹70,338.98", was: "₹1,50,000" }, PGDOMT: { instructor: "Prof. Krishna N. Sharma", price: "₹70,338.98", was: "₹1,50,000" }, INTERN: { instructor: "PhysioNeeds Academy faculty", price: "Contact for pricing" }, LABS: { instructor: "PhysioNeeds Academy faculty", price: "Contact for pricing" }, MEMBER: { instructor: "PhysioNeeds Academy faculty", price: "Contact for pricing" },
};
function normalize(value: string) { return value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9₹.]+/g, " ").trim(); }

export default function CoursesStore() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"All" | Group>("All");
  const root = useRef<HTMLDivElement>(null);
  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    return courses.filter((course) => {
      const meta = COURSE_META[course.code];
      const haystack = normalize(`${course.code} ${course.title} ${course.note} ${course.tags.join(" ")} ${meta?.instructor ?? ""}`);
      return (active === "All" || course.group === active) && terms.every((term) => haystack.includes(term));
    });
  }, [active, query]);
  const groups = active === "All" ? GROUPS : [active];

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".store-kicker, .store-hero h1, .store-hero .lead, .store-hero-actions, .store-hero-stats", { y: 24, opacity: 0, duration: .8, stagger: .1, ease: "power3.out" });
      gsap.from(".store-orb.one, .store-figure", { scale: .94, opacity: 0, duration: 1.1, ease: "power2.out", stagger: .1 });
      gsap.from(".store-section", { scrollTrigger: { trigger: ".store-body", start: "top 75%" }, y: 32, opacity: 0, duration: .8, stagger: .12, ease: "power2.out" });
    }, root);
    return () => ctx.revert();
  }, []);

  return <div className="store-page" ref={root}>
    <section className="store-hero">
      <div className="store-grid" /><div className="store-orb one" /><div className="store-hero-lines" aria-hidden="true"><span className="line-main" /><span className="line-short" /><span className="line-vertical" /><b>01</b></div>
      <div className="w">
        <span className="store-kicker">The PhysioNeeds catalogue</span>
        <h1>Build the clinical edge your <em>career</em> deserves.</h1>
        <p className="lead">Learn from practising clinicians through focused certifications, mentored fellowships and hands-on programmes designed for the real world.</p>
        <div className="store-hero-actions"><a className="btn" href="#explore">Explore programmes <span aria-hidden="true"> ↓</span></a><span className="store-hero-note"><b>●</b> February intake now open</span></div>
        <div className="store-hero-stats"><span className="store-stat"><strong>20+</strong><span>programmes</span></span><span className="store-stat"><strong>25k+</strong><span>clinicians learning</span></span><span className="store-stat"><strong>4.9/5</strong><span>learner rating</span></span></div>
      </div>
    </section>

    <div className="store-body w" id="explore">
      <div className="store-toolbar"><div><span className="ey">Find your next skill</span><h2>Choose your direction.</h2><p>From your first focused certification to a specialist fellowship, start where your ambition is.</p></div><label className="store-search"><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses or skills" aria-label="Search courses" /><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg></label></div>
      <div className="store-tabs" role="tablist" aria-label="Course categories"><button className={`store-tab ${active === "All" ? "active" : ""}`} onClick={() => setActive("All")}>All programmes</button>{GROUPS.map((group) => <button key={group} className={`store-tab ${active === group ? "active" : ""}`} onClick={() => setActive(group)}>{group}</button>)}</div>
      {query && filtered.length === 0 ? <div className="store-empty">No programmes match “{query}”. Try a different specialty or <button className="lnk" onClick={() => setQuery("")}>clear your search</button>.</div> : groups.map((group) => {
        const items = filtered.filter((course) => course.group === group);
        const groupId = group.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
        return <section className="store-section" id={groupId} key={group}><div className="store-section-head"><div><h3>{group}</h3><span>{items.length} programmes · designed for measurable progress</span></div><a href={`#${groupId}`}>View category ↗</a></div><div className="store-cards">{items.slice(0, active === "All" ? 4 : 12).map((course) => <CourseCard key={course.code} course={course} />)}</div></section>;
      })}
      {!query && active === "All" && <section className="store-section"><div className="store-section-head"><div><h3>Featured pathways</h3><span>Where most clinicians begin</span></div></div><div className="store-cards">{featuredCodes.map((code) => { const course = courses.find((item) => item.code === code)!; return <CourseCard key={course.code} course={course} />; })}</div></section>}
      <section className="store-bottom"><div><span className="ey">Not sure where to start?</span><h2>Let a clinician help you choose the right next step.</h2><p>Tell us where you are in your career and what you want to master. We’ll point you towards the most relevant programme.</p></div><a className="btn" href="tel:+918090080906">Talk to a counsellor <span aria-hidden="true"> ↗</span></a></section>
    </div>
  </div>;
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const meta = COURSE_META[course.code];
  return <a className="store-card" href={course.href} target="_blank" rel="noopener noreferrer"><div className="store-card-img"><Image src={courseImage(course)} alt="" fill sizes="(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 280px" /><span className="store-card-code">{course.code}</span></div><div className="store-card-body"><h4>{course.title}</h4><p className="store-instructor">{meta?.instructor}</p><p>{course.note}</p><div className="store-price">{meta?.was && <del>{meta.was}</del>}<strong>{meta?.price ?? "Contact for pricing"}</strong></div><span className="store-card-link">View programme <span aria-hidden="true">→</span></span></div></a>;
}

function LegacyCourseCard({ course }: { course: (typeof courses)[number] }) {
  return <a className="store-card" href={course.href} target="_blank" rel="noopener noreferrer"><div className="store-card-img"><Image src={courseImage(course)} alt="" fill sizes="(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 280px" /><span className="store-card-code">{course.code}</span></div><div className="store-card-body"><h4>{course.title}</h4><p>{course.note}</p><span className="store-card-link">View programme <span aria-hidden="true">→</span></span></div></a>;
}
