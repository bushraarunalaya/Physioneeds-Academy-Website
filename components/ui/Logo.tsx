import Image from "next/image";
import Link from "next/link";

/** Official PhysioNeeds Academy logo (public/brand/logo.png, 300×236). Black lettering: use on light surfaces. */
export default function Logo({ height = 56, priority = false }: { height?: number; priority?: boolean }) {
  return (
    <Link href="/" aria-label="PhysioNeeds Academy home" className="logo">
      <Image src="/brand/logo.png" alt="PhysioNeeds Academy" width={Math.round(height * (300 / 236))} height={height} priority={priority} />
    </Link>
  );
}
