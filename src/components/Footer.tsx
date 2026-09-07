"use client";

import SectionReveal from "./SectionReveal";

export default function Footer() {
  return (
    <footer
      className="section-padding relative overflow-hidden safe-bottom"
      style={{
        background:
          "linear-gradient(180deg, #fffef7 0%, #f5edd3 50%, #ede0b8 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div
          className="h-px"
          style={{
            width: "clamp(50%, 75vw, 85%)",
            background: "linear-gradient(to right, transparent, var(--color-gold-400), transparent)",
            opacity: 0.35,
          }}
        />
      </div>

      <div
        className="absolute inset-0 bg-paper-texture opacity-40"
        aria-hidden="true"
      />

      <SectionReveal className="container-narrow text-center relative z-10">
        <p
          className="gold-text-solid text-amiri font-bold mb-2"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)" }}
        >
          حضوركم يزيّن فرحتنا
        </p>
        <p
          className="gold-text-solid text-amiri mb-7"
          style={{ fontSize: "clamp(0.9rem, 2.1vw, 1.1rem)" }}
        >
          عائلة آل الشاعر
        </p>

        <div className="section-divider mb-8">
          <div className="section-divider-line start" />
          <span className="text-gold-400" style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>❦</span>
          <div className="section-divider-line end" />
        </div>

        <p
          className="text-gold-500 text-tajawal font-light"
          style={{
            fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
            letterSpacing: "0.2em",
          }}
        >
          #أفراح_آل_الشاعر
        </p>

        <p
          className="text-gold-500/60 text-tajawal font-light mt-8"
          style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.75rem)" }}
        >
          صُنعت بكل حب ♥ لفرحة لا تُنسى
        </p>
      </SectionReveal>
    </footer>
  );
}
