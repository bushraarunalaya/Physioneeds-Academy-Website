"use client";

import { useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";

type Qualification = { id: string; label: string; short: string; icon: string; description: string };
type Course = { title: string; duration: string; type: string; audience: string; href: string; accent: string };
type Group = { title: string; eyebrow: string; courses: Course[] };

const qualifications: Qualification[] = [
  { id: "bpt", label: "BPT graduate", short: "BPT", icon: "◎", description: "You can enrol in fellowships, postgraduate certificates and physio-only skill courses." },
  { id: "student", label: "BPT student / final year", short: "Student", icon: "◌", description: "Start building clinical confidence with certifications and hands-on skill courses." },
  { id: "mpt", label: "MPT", short: "MPT", icon: "✦", description: "Take your specialist practice further with advanced fellowships and clinical tracks." },
  { id: "doctor", label: "Doctor (MBBS)", short: "MBBS", icon: "+", description: "Explore rehabilitation, wellness and integrative courses designed for healthcare professionals." },
  { id: "ayush", label: "AYUSH (BAMS / BHMS)", short: "AYUSH", icon: "☼", description: "Explore integrative, rehabilitation and patient-care learning paths." },
  { id: "pharmacy", label: "B.Pharm / pharmacy", short: "Pharmacy", icon: "⊕", description: "Add practical rehabilitation and patient education skills to your healthcare toolkit." },
  { id: "nursing", label: "Nursing", short: "Nursing", icon: "♡", description: "Choose patient-care, rehabilitation and wellness courses for your next step." },
  { id: "sports", label: "Sports trainer / coach", short: "Sports", icon: "↗", description: "Build a stronger sports-support toolkit with performance and recovery programmes." },
  { id: "ped", label: "BPED / MPED", short: "PE", icon: "◈", description: "Explore sports, recovery and movement-focused learning experiences." },
  { id: "diploma", label: "Healthcare diploma", short: "Diploma", icon: "▣", description: "Find accessible courses that help you grow your clinical and wellness skill set." },
  { id: "general", label: "12th / general public", short: "Open", icon: "↯", description: "Begin with accessible rehabilitation, wellness and personal development courses." },
];

const course = (title: string, duration: string, type: string, audience: string, href: string, accent: string): Course => ({ title, duration, type, audience, href, accent });

const bptGroups: Group[] = [
  { title: "Fellowships", eyebrow: "Go deeper", courses: [
    course("Fellowship in Sports Physiotherapy & Rehabilitation", "6 months", "Fellowship", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Fellowship-in-Sports-Physiotherapy-and-Rehabilitation-696226c1bb5f4611e0b464f9", "#e8b344"),
    course("Fellowship in Musculoskeletal Physiotherapy & Rehabilitation", "6 months", "Fellowship", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Fellowship-in-Musculoskeletal-Physiotherapy-and-Rehab-FMPR-6969d4e3ea147a42b3b53e12", "#6fa8a1"),
    course("Fellowship in Orthopaedic Manual Therapy", "6 months", "Fellowship", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Fellowship-in-Orthopaedic-Manual-Therapy-FOMT-6962266c44d62e6119114feb", "#8299c8"),
    course("Fellowship in Orthopaedic Physiotherapy & Rehabilitation", "6 months", "Fellowship", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Fellowship-in-Orthopaedic-Physiotherapy-and-Rehab-FOPR-696226957e8f735388d9bb0e", "#ce9a76"),
  ]},
  { title: "Postgraduate certificates", eyebrow: "Level up", courses: [
    course("PG Certificate in Orthopaedic Manual Therapy", "Postgraduate", "PG certificate", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Post-Graduate-Diploma-in-Orthopaedic-Manual-Therapy-PGDOMT-Copy-685fb33969daac5915d600c2", "#8299c8"),
    course("PG Certificate in Orthopaedic Physiotherapy & Rehab", "Postgraduate", "PG certificate", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/PG-Diploma-in-Orthopedic-Physiotherapy-and-Rehab-68512df537f59920cf4ca270", "#6fa8a1"),
    course("PG Certificate in Advanced Sports Physiotherapy & Rehab", "Postgraduate", "PG certificate", "BPT / MPT graduates", "https://www.e-physioneeds.com/courses/Postgraduate-Certification-Course-in-Advanced-Sports-Physiotherapy-and-Rehabilitation-6916f15d9664b2707177df25", "#e8b344"),
  ]},
  { title: "Certification courses", eyebrow: "Build skills", courses: [
    course("Certification in Sports Physiotherapy & Rehabilitation", "3 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Online-Sports-Fellowship-645b4141e4b08c3db6046d0a", "#e8b344"),
    course("Certification in Musculoskeletal Physiotherapy & Rehabilitation", "3 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Musculoskeletal-Fellowship-6599222ce4b051e9187c02a4", "#6fa8a1"),
    course("Certification in Orthopaedic Manual Therapy", "3 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Certification-in-Orthopaedic-Manual-Therapy-COMT-68ad7ba0f002e717fab3c90c", "#8299c8"),
    course("Certification in Orthopaedic Physiotherapy & Rehabilitation", "3 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Certification-in-Orthopaedic-Physiotherapy-and-Rehabilitation-Copy-6915b863498f763613d4725c", "#ce9a76"),
    course("Certification in Paediatric Physiotherapy & Rehabilitation", "3 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Online-Paediatric-Physiotherapy-and-Rehab-69034006e6c4f270357aefb6", "#d8999f"),
    course("Certification in Shoulder Physiotherapy & Rehab", "2 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/A-Z-Shoulder-Course-65d248f4e4b055ebd1332ab4", "#a98aca"),
    course("Certification in Spine Physiotherapy & Rehab", "2 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/A-Z-Spine-6452276ce4b081d895e380e2", "#6fa8a1"),
    course("Certification in Knee Physiotherapy & Rehab", "2 months", "Certificate", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/A-Z-Knee-Course-64521d01e4b045fa3fda1940", "#e8b344"),
  ]},
  { title: "Skill courses", eyebrow: "Hands on", courses: [
    course("Certification in Dry Needling", "Short course", "Skill", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/Dry-Needling-6487046ae4b0688147c78db9", "#e8b344"),
    course("Tapedia — Certification in Taping", "Short course", "Skill", "Physiotherapy / sports / rehab candidate", "https://www.e-physioneeds.com/courses/Certification-in-Taping-64525a61e4b070504d0f60c3", "#6fa8a1"),
    course("Soft Tissue Manual Therapy Expert", "Short course", "Skill", "Physiotherapy / manual therapy candidate", "https://www.e-physioneeds.com/courses/Soft-Tissue-Manual-Therapy-64536e43e4b0079cc7ebc5a1", "#ce9a76"),
    course("IASTM Online", "Short course", "Skill", "Physiotherapy / sports / rehab candidate", "https://www.e-physioneeds.com/courses/Instrument-Assisted-Soft-Tissue-Mobilization-IASTM-64525660e4b0f01f19c435d1", "#8299c8"),
    course("KKMT — 3D Manual Therapy", "Short course", "Skill", "BPT / MPT students & graduates", "https://www.e-physioneeds.com/courses/KKMT-3D-Manual-Therapy-Peripheral-module-64533117e4b0ad4faa9afbb7", "#a98aca"),
    course("Cupping Therapy", "Short course", "Skill", "Physiotherapy / healthcare candidate", "https://www.e-physioneeds.com/courses/Cupping-Therapy-67c6895a0ede6d2dced93771", "#d8999f"),
    course("Positional Release Therapy", "Short course", "Skill", "Physiotherapy / manual therapy candidate", "https://www.e-physioneeds.com/courses/Certification-in-Positional-Release-Therapy-645b3829e4b05df3e2da8b19", "#6fa8a1"),
  ]},
];

const universalGroups: Group[] = [
  { title: "Rehab courses", eyebrow: "Open to all", courses: [course("Rehabilitation & patient-care pathways", "Flexible", "Course collection", "No prior qualification needed", "/courses", "#6fa8a1")] },
  { title: "Integrative & wellness courses", eyebrow: "26 courses", courses: [course("Integrative health & wellness pathways", "Flexible", "Course collection", "Anyone 12th pass or above", "/courses", "#e8b344")] },
  { title: "Other short courses", eyebrow: "12 courses", courses: [course("Hands-on clinical & manual therapy skills", "Short course", "Course collection", "Healthcare and wellness learners", "/courses", "#8299c8")] },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function EligibilityGuide() {
  const [active, setActive] = useState("bpt");
  const [query, setQuery] = useState("");
  const [openMore, setOpenMore] = useState(false);
  const selected = qualifications.find((item) => item.id === active) ?? qualifications[0];
  const normalized = query.trim().toLowerCase();
  const visibleQualifications = qualifications.filter((item) => !normalized || `${item.label} ${item.short}`.toLowerCase().includes(normalized));
  const groups = useMemo(() => {
    const base = active === "bpt" || active === "student" || active === "mpt" ? bptGroups : universalGroups;
    if (!normalized) return base;
    return base.map((group) => ({ ...group, courses: group.courses.filter((item) => `${item.title} ${item.type} ${item.audience}`.toLowerCase().includes(normalized)) })).filter((group) => group.courses.length);
  }, [active, normalized]);
  const totalMatches = groups.reduce((sum, group) => sum + group.courses.length, 0);

  useEffect(() => {
    gsap.fromTo(".eligibility-reveal", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .65, stagger: .05, ease: "power2.out" });
  }, [active, query]);

  function selectQualification(id: string) { setActive(id); setQuery(""); setOpenMore(false); document.querySelector("#eligibility-results")?.scrollIntoView({ behavior: "smooth", block: "start" }); }

  return <div className="eligibility-page">
    <section className="eligibility-hero">
      <div className="w eligibility-hero-inner">
        <div className="eligibility-kicker"><span>PHYSIONEEDS ACADEMY</span><i /> COURSE MATCHMAKER</div>
        <div className="eligibility-hero-copy">
          <p className="eyebrow">01 — Find your fit</p>
          <h1>Find the programme<br /><em>that fits your next chapter.</em></h1>
          <p className="eligibility-lead">Tell us where you are in your journey and we&apos;ll map the right clinical learning path in seconds.</p>
        </div>
        <div className="eligibility-orbit" aria-hidden="true"><span>YOUR<br />NEXT<br /><b>MOVE</b></span><i /><i /><i /></div>
      </div>
    </section>
    <main className="w eligibility-main">
      <section className="eligibility-selector" aria-labelledby="eligibility-selector-title">
        <div className="eligibility-section-head"><div><p className="eyebrow">Step 1</p><h2 id="eligibility-selector-title">What best describes you?</h2></div><span className="eligibility-step">01 <i /> 02 <i /> 03</span></div>
        <div className="eligibility-selection-layout">
          <div className="eligibility-choices">
            {visibleQualifications.map((item) => <button key={item.id} className={`eligibility-choice ${item.id === active ? "active" : ""}`} onClick={() => selectQualification(item.id)}><span className="eligibility-choice-icon">{item.icon}</span><span><b>{item.label}</b><small>{item.short}</small></span><Arrow /></button>)}
            {!visibleQualifications.length && <p className="eligibility-no-match">No qualification found. Try “BPT”, “nursing” or “sports”.</p>}
          </div>
          <aside className="eligibility-context"><span className="eligibility-context-number">0{qualifications.findIndex((item) => item.id === active) + 1}</span><p className="eyebrow">Your starting point</p><h3>{selected.label}</h3><p>{selected.description}</p><div className="eligibility-context-line"><span /> Tailored recommendations</div></aside>
        </div>
      </section>

      <section className="eligibility-results" id="eligibility-results" aria-labelledby="eligibility-results-title">
        <div className="eligibility-results-top"><div><p className="eyebrow">Step 2 — Your course map</p><h2 id="eligibility-results-title">Recommended for <em>{selected.short}</em></h2></div><div className="eligibility-match"><strong>{totalMatches}</strong><span>matched<br />pathways</span></div></div>
        <label className="eligibility-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search qualification, course or skill..." /><kbd>⌘ K</kbd></label>
        {groups.length ? groups.map((group) => <div className="eligibility-group" key={group.title}><div className="eligibility-group-head"><h3>{group.title}</h3><span>{group.eyebrow} <i>{group.courses.length}</i></span></div><div className="eligibility-course-grid">{group.courses.map((item) => <a className="eligibility-course eligibility-reveal" style={{ "--course-accent": item.accent } as React.CSSProperties} href={item.href} key={item.title} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span className="eligibility-course-mark">✦</span><div className="eligibility-course-body"><p>{item.type} <i>·</i> {item.duration}</p><h4>{item.title}</h4><small>For {item.audience}</small></div><Arrow /></a>)}</div></div>) : <div className="eligibility-empty"><span>⌁</span><h3>No exact match yet</h3><p>Try a broader search, or browse the complete course catalogue.</p><a className="btn btn-dark" href="/courses">Explore all courses <Arrow /></a></div>}
      </section>

      <section className={`eligibility-more ${openMore ? "open" : ""}`}><button className="eligibility-more-toggle" onClick={() => setOpenMore(!openMore)}><span><small>Step 3 — Keep exploring</small><strong>More pathways for every kind of learner</strong></span><b>{openMore ? "−" : "+"}</b></button>{openMore && <div className="eligibility-more-grid">{universalGroups.map((group) => <a href={group.courses[0].href} className="eligibility-more-card eligibility-reveal" key={group.title}><span>0{universalGroups.indexOf(group) + 1}</span><div><p>{group.eyebrow}</p><h3>{group.title}</h3></div><Arrow /></a>)}</div>}</section>
      <section className="eligibility-bottom"><div><p className="eyebrow">Not sure yet?</p><h2>Talk it through with a course counsellor.</h2></div><a className="btn btn-gold" href="tel:+918090080906">Call the reception <Arrow /></a></section>
    </main>
  </div>;
}
