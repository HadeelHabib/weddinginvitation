"use client";

import { useState, useEffect } from "react";
import SectionReveal from "./SectionReveal";

const WEDDING_DATE = new Date("2026-09-12T22:00:00+03:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false,
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center" style={{ gap: "clamp(0.5rem, 1.75vw, 0.9rem)" }}>
      <div
        className="glass-gold luxury-shadow flex items-center justify-center"
        style={{
          width: "clamp(3.75rem, 14vw, 6.5rem)",
          height: "clamp(3.75rem, 14vw, 6.5rem)",
          borderRadius: "var(--radius-xl)",
          background:
            "linear-gradient(135deg, rgba(255,255,240,0.92) 0%, rgba(247,231,206,0.85) 100%)",
        }}
      >
        <span
          className="gold-text text-playfair font-bold tabular-nums"
          style={{ fontSize: "clamp(1.6rem, 6vw, 3rem)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="text-gold-600 text-tajawal font-light"
        style={{ fontSize: "clamp(0.65rem, 1.7vw, 0.9rem)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="countdown-section"
      className="section-padding relative overflow-hidden bg-paper-texture"
      style={{
        background:
          "linear-gradient(180deg, #fffef7 0%, #fdfaf0 30%, #faf5e4 60%, #fdfaf0 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[clamp(3rem,8vw,6rem)] overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220%] rounded-[50%] bg-cream-50"
          style={{ height: "clamp(5rem, 18vw, 12rem)" }}
        />
      </div>

      <SectionReveal className="container-prose text-center relative z-10">
        <div className="section-header mb-10">
          <div className="section-divider">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(0.75rem, 1.6vw, 1rem)" }}>✦</span>
            <div className="section-divider-line end" />
          </div>
          <h2
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
          >
            باقٍ على فرحنا
          </h2>
        </div>

        {time.passed ? (
          <p
            className="gold-text-solid text-amiri"
            style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.6rem)" }}
          >
            حلّ يوم الفرح — نراكم الليلة 💛
          </p>
        ) : (
          <div
            className="flex justify-center items-start flex-wrap"
            style={{ gap: "clamp(0.5rem, 2.5vw, 1.5rem)" }}
          >
            <CountdownUnit value={time.days} label="يوم" />
            <CountdownUnit value={time.hours} label="ساعة" />
            <CountdownUnit value={time.minutes} label="دقيقة" />
            <CountdownUnit value={time.seconds} label="ثانية" />
          </div>
        )}
      </SectionReveal>
    </section>
  );
}
