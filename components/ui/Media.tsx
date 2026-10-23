import Image from "next/image";
import Parallax from "../motion/Parallax";

/** Rounded image frame with a GSAP parallax drift. */
export function ParallaxImage({ src, alt, height = 420, speed = 10 }: { src: string; alt: string; height?: number; speed?: number }) {
  return (
    <div className="frame" style={{ height }}>
      <Parallax speed={speed} className="plx">
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 560px" className="cover" />
      </Parallax>
    </div>
  );
}

/** Slot for media we do not have a URL for yet (videos, certificate, patient results). */
export function MediaSlot({ label, height = 220 }: { label: string; height?: number }) {
  return <div className="slot" style={{ height }} role="img" aria-label={label}>{label}</div>;
}

export function VideoEmbed({ src, title, height = 340 }: { src: string; title: string; height?: number }) {
  return (
    <div className="video-frame" style={{ height }}>
      <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" />
    </div>
  );
}
