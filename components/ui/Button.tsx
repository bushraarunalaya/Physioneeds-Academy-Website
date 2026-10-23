import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "ghost" }) {
  const cls = variant === "ghost" ? "btn ghost" : "btn";
  const external = href.startsWith("http");
  return external ? (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link className={cls} href={href}>{children}</Link>
  );
}
