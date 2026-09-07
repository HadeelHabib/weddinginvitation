"use client";

import SectionReveal from "./SectionReveal";

export default function BlessingSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-paper-texture">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d4a437 0, #d4a437 1px, transparent 0, transparent 50%)",
          backgroundSize: "22px 22px",
        }}
      />

      <SectionReveal className="container-prose text-center relative z-10">
        <div className="glass-gold luxury-shadow ornate-corner" style={{ padding: "clamp(1.5rem, 5vw, 3.5rem)" }}>
          <p
            className="gold-text-solid text-amiri font-bold mb-7 leading-relaxed"
            style={{ fontSize: "clamp(1.15rem, 3vw, 1.75rem)" }}
          >
            بسم الله الرحمن الرحيم
          </p>

          <div className="section-divider mb-7">
            <div className="section-divider-line start" />
            <div className="w-2 h-2 rotate-45 bg-gold-400 rounded-[1px]" />
            <div className="section-divider-line end" />
          </div>

          <p
            className="gold-text-solid text-amiri leading-editorial"
            style={{ fontSize: "clamp(1rem, 2.3vw, 1.3rem)" }}
          >
            اللّهُمَّ بارِكْ لهُما وبارِكْ عليهِما
            <br className="hidden sm:block" />
            واجمَعْ بينهُما في خير
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
