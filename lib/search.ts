import type { Course } from "./data/courses";

const SYN: Record<string, string> = { dn: "dry needling", msk: "musculoskeletal", pg: "pg diploma", fellow: "fellowship", tape: "taping", ortho: "orthopaedic", orthopedic: "orthopaedic", iastm: "instrument assisted", cert: "certification" };

/** Every word typed must match somewhere in the course (title, code, note, specialty, category). Short forms like "dn" or "msk" work. */
export function matchCourse(c: Course, query: string): boolean {
  const hay = `${c.title} ${c.code} ${c.note} ${c.tags.join(" ")} ${c.group}`.toLowerCase();
  return query.toLowerCase().split(/\s+/).filter(Boolean).every((t) => [t, SYN[t]].filter(Boolean).some((v) => hay.includes(v as string)));
}
