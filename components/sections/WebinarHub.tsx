"use client";

import { useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";

type Webinar = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  time: string;
  format: "Live" | "Masterclass" | "Conversation";
  topic: string;
  status: "upcoming" | "past";
  href: string;
};

// Add future sessions here. The filters and cards below will update automatically.
const webinars: Webinar[] = [];

const formats = [
  { number: "01", label: "Clinical masterclasses", text: "Go beyond the textbook with focused, practical teaching." },
  { number: "02", label: "Live conversations", text: "Ask questions and learn directly from experienced clinicians." },
  { number: "03", label: "Community sessions", text: "Stay curious, connected and in step with modern practice." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function WebinarHub() {
  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming");
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const visible = useMemo(() => webinars.filter((item) => {
    const matchesFilter = filter === "all" || item.status === filter;
    const matchesSearch = !normalized || `${item.title} ${item.speaker} ${item.topic}`.toLowerCase().includes(normalized);
    return matchesFilter && matchesSearch;
  }), [filter, normalized]);

  useEffect(() => {
    gsap.fromTo(".webinar-reveal", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .65, stagger: .08, ease: "power2.out" });
  }, [filter, query]);

  return <div className="webinar-page">
    <section className="webinar-hero">
      <div className="w webinar-hero-inner">
        <div className="webinar-kicker"><span>PHYSIONEEDS ACADEMY</span><i /><span>LIVE LEARNING</span></div>
        <div className="webinar-hero-copy"><p className="eyebrow">Webinars & conversations</p><h1>Make your next<br /><em>breakthrough live.</em></h1><p>Ideas move faster when curious people meet. Join practical sessions built for the clinicians, coaches and healthcare learners shaping better care.</p></div>
        <div className="webinar-signal" aria-hidden="true"><span /><span /><span /><span /><b>LIVE<br /><em>LEARNING</em></b></div>
      </div>
    </section>
    <main className="w webinar-main">
      <section className="webinar-intro"><div><p className="eyebrow">The programme</p><h2>Small sessions.<br /><em>Big perspective.</em></h2></div><p>From clinical deep-dives to open conversations, every webinar is designed to turn one good hour into a more confident next step.</p></section>
      <section className="webinar-library" id="webinar-library">
        <div className="webinar-library-head"><div><p className="eyebrow">Explore the sessions</p><h2>What&apos;s happening</h2></div><label className="webinar-search"><span>⌕</span><input aria-label="Search webinars" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sessions..." /></label></div>
        <div className="webinar-tabs" role="tablist" aria-label="Webinar status"><button className={filter === "upcoming" ? "active" : ""} onClick={() => setFilter("upcoming")} role="tab" aria-selected={filter === "upcoming"}>Upcoming <i>{webinars.filter((item) => item.status === "upcoming").length}</i></button><button className={filter === "past" ? "active" : ""} onClick={() => setFilter("past")} role="tab" aria-selected={filter === "past"}>Past <i>{webinars.filter((item) => item.status === "past").length}</i></button><button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} role="tab" aria-selected={filter === "all"}>All <i>{webinars.length}</i></button></div>
        {visible.length ? <div className="webinar-grid">{visible.map((item) => <a className="webinar-card webinar-reveal" href={item.href} key={item.id}><div className="webinar-card-top"><span>{item.format}</span><small>{item.status === "upcoming" ? "Reserve your place" : "Watch replay"}</small></div><div className="webinar-card-art"><span>PN</span><b>{item.topic}</b></div><div className="webinar-card-body"><p>{item.date} <i>·</i> {item.time}</p><h3>{item.title}</h3><small>With {item.speaker}</small><strong>View session <Arrow /></strong></div></a>)}</div> : <div className="webinar-empty webinar-reveal"><div className="webinar-empty-mark"><span /><span /><span /></div><p className="eyebrow">{filter === "past" ? "The archive is just beginning" : "The next session is taking shape"}</p><h3>{filter === "past" ? "No replays yet." : "Be first in the room."}</h3><p>{normalized ? "No session matches that search. Try another topic." : "We’re curating the next practical conversation for our learning community. Leave your details and we’ll let you know when registration opens."}</p><a href="#notify" className="btn btn-dark">Notify me <Arrow /></a></div>}
      </section>
      <section className="webinar-formats"><div className="webinar-formats-head"><div><p className="eyebrow">Designed for real practice</p><h2>There&apos;s always<br /><em>something to take away.</em></h2></div><p>Clear ideas. Generous experts. A useful next step.</p></div><div className="webinar-format-grid">{formats.map((item) => <article className="webinar-format" key={item.number}><span>{item.number}</span><div><h3>{item.label}</h3><p>{item.text}</p></div><Arrow /></article>)}</div></section>
      <section className="webinar-notify" id="notify"><div><p className="eyebrow">Never miss the good stuff</p><h2>Keep a seat open<br />for your next idea.</h2><p>We&apos;ll only send you the sessions worth showing up for.</p></div><form onSubmit={(event) => event.preventDefault()}><label htmlFor="webinar-email">Your email address</label><div><input id="webinar-email" type="email" required placeholder="you@example.com" /><button className="btn btn-gold" type="submit">Keep me posted <Arrow /></button></div></form></section>
    </main>
  </div>;
}
