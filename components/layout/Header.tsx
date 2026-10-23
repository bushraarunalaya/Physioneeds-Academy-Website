"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="w hdr-in">
        <Logo height={52} priority />
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map((n) => (n.href.startsWith("http") ? <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a> : <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>))}
        </nav>
        <div className="hdr-act">
          <a href="https://www.e-physioneeds.com/s/checkout" className="hdr-link">Cart (0)</a>
          <a href="https://www.e-physioneeds.com/" className="hdr-link">Login</a>
          <Link href="#free" className="btn">Free access</Link>
          <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
    </header>
  );
}
