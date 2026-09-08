import { useEffect, useRef } from "react";
import { Building2, Droplets, Gauge, ReceiptText, Zap } from "lucide-react";

const nodes = [
  { Icon: Building2, label: "Абоненти", className: "left-[8%] top-[18%]" },
  { Icon: Droplets, label: "Постачання", className: "right-[8%] top-[12%]" },
  { Icon: Gauge, label: "Облік", className: "left-[15%] bottom-[13%]" },
  { Icon: Zap, label: "Послуги", className: "right-[11%] bottom-[16%]" },
];

export function InfrastructureVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const onMove = (event: PointerEvent) => {
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      visual.style.setProperty("--visual-x", `${x * 10}px`);
      visual.style.setProperty("--visual-y", `${y * 10}px`);
    };
    visual.addEventListener("pointermove", onMove);
    return () => visual.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={visualRef} className="infrastructure-visual" aria-label="Схема взаємодії учасників розрахункової системи">
      <div className="visual-grid" />
      <div className="visual-ring visual-ring-outer" />
      <div className="visual-ring visual-ring-inner" />
      <div className="visual-axis visual-axis-horizontal" />
      <div className="visual-axis visual-axis-vertical" />

      <div className="visual-core">
        <span className="visual-core-icon"><ReceiptText /></span>
        <strong>ЄРЦ</strong>
        <small>єдина система</small>
      </div>

      {nodes.map(({ Icon, label, className }, index) => (
        <div key={label} className={`visual-node ${className}`} style={{ animationDelay: `${index * 0.6}s` }}>
          <Icon />
          <span>{label}</span>
        </div>
      ))}

      <span className="visual-index left-5 top-5">СХЕМА 01</span>
      <span className="visual-index bottom-5 right-5">СИСТЕМНИЙ КОНТУР</span>
    </div>
  );
}