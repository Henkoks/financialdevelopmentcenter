import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-city.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";

/**
 * Живий фоновий візуал: повільний аеро-обліт міста (відео),
 * реакція на рух курсора (паралакс + світлова пляма) та на скрол.
 */
export function CityBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    const onScroll = () => {
      setScrolled(Math.min(1, window.scrollY / (window.innerHeight || 1)));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const tx = (pointer.x - 0.5) * 26;
  const ty = (pointer.y - 0.5) * 18;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: `scale(${1.12 + scrolled * 0.06}) translate3d(${tx}px, ${ty - scrolled * 30}px, 0)`,
          transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
          filter: `saturate(1.05) brightness(${0.9 - scrolled * 0.25})`,
        }}
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* світлова пляма за курсором */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background: `radial-gradient(520px circle at ${pointer.x * 100}% ${pointer.y * 100}%, oklch(0.74 0.13 195 / 0.28), transparent 65%)`,
          transition: "background 200ms linear",
        }}
      />

      {/* технічна сітка */}
      <div
        className="grid-lines absolute inset-0 opacity-35"
        style={{
          maskImage:
            "radial-gradient(120% 90% at 50% 20%, black 20%, transparent 80%)",
          transform: `translate3d(${tx * -0.6}px, ${ty * -0.6}px, 0)`,
        }}
      />

      {/* вуаль для читабельності тексту */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />

      {/* м'які світлові плями */}
      <div
        className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{
          background: "var(--gradient-brand)",
          animation: "float-slow 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-25 blur-3xl"
        style={{
          background: "var(--gradient-brand)",
          animation: "float-slow 18s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
