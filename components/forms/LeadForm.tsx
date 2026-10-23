"use client";
import { useState, type FormEvent } from "react";

export const QUALIFICATIONS = ["BPT student / intern", "BPT", "MPT", "Ph.D. / academic", "Clinic owner"];
const YEARS = ["Still studying", "Under 2 years", "2–5 years", "5–10 years", "10–20 years", "20+ years"];
const INTERESTS = ["Certification course", "Technique course", "Fellowship", "PG diploma", "Clinical internship", "Membership", "Not sure — please guide me"];
type Field = "name" | "phone" | "email" | "qualification" | "years" | "interest";

export default function LeadForm({ kind, fields, cta, success, dark = false }: { kind: string; fields: Field[]; cta: string; success: string; dark?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, ...data }) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error);
      setState("done");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setState("error");
    }
  }
  if (state === "done") return <p className="ok" role="status">{success}</p>;
  const sel = (name: string, label: string, opts: string[]) => (
    <label className="f">{label}<select name={name} required defaultValue="">{<option value="" disabled>Select</option>}{opts.map((o) => <option key={o}>{o}</option>)}</select></label>
  );
  return (
    <form onSubmit={onSubmit} className={`lead ${dark ? "on-dark" : ""}`}>
      <div className="fg">
        {fields.includes("name") && <label className="f">Name<input name="name" type="text" autoComplete="name" required /></label>}
        {fields.includes("phone") && <label className="f">Phone (10 digits)<input name="phone" type="tel" inputMode="numeric" autoComplete="tel" required /></label>}
        {fields.includes("email") && <label className="f">Email<input name="email" type="email" autoComplete="email" required /></label>}
        {fields.includes("qualification") && sel("qualification", "Qualification", QUALIFICATIONS)}
        {fields.includes("years") && sel("years", "Years in practice", YEARS)}
        {fields.includes("interest") && sel("interest", "What interests you?", INTERESTS)}
      </div>
      {state === "error" && <p className="err" role="alert">{msg}</p>}
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : cta}</button>
    </form>
  );
}
