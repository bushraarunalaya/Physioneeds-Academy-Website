"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";

type Product = { title: string; slug: string; image: string; kind: string; description: string; accent: string };

const products: Product[] = [
  { title: "Shockwave Therapy in Physiotherapy", slug: "SHOCKWAVE-THERAPY-IN-PHYSIOTHERAPY-686b9fcf003cf27effdc0ab7", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b9fcf003cf27effdc0ab7/cover.jpg?v=3", kind: "Clinical tool", description: "A clear introduction to applying shockwave therapy with better clinical context.", accent: "#e0d1cd" },
  { title: "Lower Limb Fractures and Physiotherapy Management", slug: "LOWER-LIMB-FRACTURES-AND-PHYSIOTHERAPY-MANAGEMENT-686b9f403141e278566919e8", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b9f403141e278566919e8/cover.jpg?v=2", kind: "Rehabilitation", description: "A practical reference for progressing lower-limb fracture rehabilitation.", accent: "#e0d1cd" },
  { title: "Upper Limb Fractures and Physiotherapy Management", slug: "UPPER-LIMB-FRACTURES-AND-PHYSIOTHERAPY-MANAGEMENT-686b98c43dada04dc64c5fc3", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b98c43dada04dc64c5fc3/cover.jpg?v=2", kind: "Rehabilitation", description: "Use this compact guide to structure upper-limb recovery from protection to function.", accent: "#e0d1cd" },
  { title: "Laser in Physiotherapy", slug: "LASER-IN-PHYSIOTHERAPY-686b919c3853f1190dbac66d", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b919c3853f1190dbac66d/cover.jpg?v=3", kind: "Clinical tool", description: "Build a more informed foundation for using laser modalities in practice.", accent: "#e0d1cd" },
  { title: "Advanced Blood Flow Restriction Training", slug: "ADVANCED-BLOOD-FLOW-RESTRICTION-TRAINING-686b907e003cf27effdc0a88", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b907e003cf27effdc0a88/cover.jpg?v=2", kind: "Performance", description: "Explore the principles behind safer, more purposeful BFR programming.", accent: "#e0d1cd" },
  { title: "How to Be the Best Physio", slug: "HOW-TO-BE-THE-BEST-PHYSIO-686b8de63853f1190dbac666", image: "https://d502jbuhuh9wk.cloudfront.net/digital_products/62bd97c60cf2f0525dc732d0/686b8de63853f1190dbac666/cover.jpg?v=3", kind: "Career", description: "A short mindset and practice guide for building a stronger physiotherapy career.", accent: "#e0d1cd" },
];

const filters = ["All", "Clinical tool", "Rehabilitation", "Performance", "Career"];
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function DigitalProducts() {
  const [filter, setFilterState] = useState("All");
  const [query, setQuery] = useState("");
  const setFilter = (nextFilter: string) => {
    setFilterState(nextFilter);
    setQuery("");
  };
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visible = useMemo(() => products.filter((product) => {
    const matchesFilter = filter === "All" || product.kind === filter;
    const searchableText = `${product.title} ${product.kind} ${product.description} ${product.slug}`.toLocaleLowerCase();
    return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery));
  }), [filter, normalizedQuery]);

  useEffect(() => {
    gsap.fromTo(".digital-reveal", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .65, stagger: .07, ease: "power2.out" });
  }, [filter, query]);

  return <div className="digital-page">
    <section className="digital-hero">
      <div className="w digital-hero-grid">
        <div className="digital-hero-copy digital-reveal"><p className="eyebrow">The PhysioNeeds library</p><h1>Small files.<br /><em>Big clinical shifts.</em></h1><p>Free digital products for the moments between patients: a focused read, a useful protocol, a better question to take into your next session.</p><a className="btn btn-gold" href="#digital-library">Browse the library <Arrow /></a></div>
        <div className="digital-orbit digital-reveal" aria-hidden="true"><span>OPEN<br /><b>ACCESS</b></span><i /><i /><i /></div>
      </div>
      <div className="digital-marquee"><span>READ · APPLY · RETURN · READ · APPLY · RETURN · </span></div>
    </section>
    <main className="w digital-main">
      <section className="digital-intro digital-reveal"><div><p className="eyebrow">A useful place to start</p><h2>Pick the idea<br /><em>you need today.</em></h2></div><p>Every resource is free to open and designed to be useful before it becomes another tab you never revisit.</p></section>
      <section className="digital-library" id="digital-library"><div className="digital-library-head"><div><p className="eyebrow">{visible.length} resources · free access</p><h2>Browse digital products</h2></div><label className="digital-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the library" aria-label="Search digital products" /></label></div><div className="digital-filter-row" role="tablist" aria-label="Product categories">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><div className="digital-grid">{visible.map((product, index) => <a className="digital-card digital-reveal" href={`https://www.e-physioneeds.com/products/${product.slug}`} target="_blank" rel="noreferrer" key={product.slug} style={{ "--product-accent": product.accent, "--product-index": index } as React.CSSProperties}><div className="digital-card-image"><Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 42vw, 300px" /></div><div className="digital-card-body"><p>{product.kind} <i>·</i> Digital product</p><h3>{product.title}</h3><span>{product.description}</span><strong>Open resource <Arrow /></strong></div></a>)}</div>{!visible.length && <div className="digital-empty"><h3>Nothing in this corner yet.</h3><p>Try a broader search or return to the full library.</p><button onClick={() => { setFilter("All"); setQuery(""); }}>Show everything <Arrow /></button></div>}</section>
      <section className="digital-callout digital-reveal"><div><p className="eyebrow">Keep the momentum</p><h2>One useful resource can change the next appointment.</h2></div><a className="btn btn-dark" href="/courses">Explore courses <Arrow /></a></section>
    </main>
  </div>;
}
