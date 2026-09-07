"use client";

import SectionReveal from "./SectionReveal";

export default function VenueSection() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-paper-texture"
      style={{
        background:
          "linear-gradient(180deg, #fffef7 0%, #faf5e4 50%, #fffef7 100%)",
      }}
    >
      <SectionReveal className="container-prose text-center">
        <div className="section-header mb-10">
          <div className="section-divider">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}>✦</span>
            <div className="section-divider-line end" />
          </div>
          <h2
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
          >
            مكان الحفل
          </h2>
        </div>

        <div className="glass-gold luxury-shadow luxury-shadow-hover card-xl card-inset-xl">
          <div
            className="mx-auto rounded-full flex items-center justify-center"
            style={{
              width: "clamp(4rem, 10vw, 5.5rem)",
              height: "clamp(4rem, 10vw, 5.5rem)",
              background: "linear-gradient(135deg, var(--color-gold-200), var(--color-gold-400))",
            }}
          >
            <svg
              className="text-cream-50"
              style={{ width: "clamp(1.75rem, 5vw, 2.75rem)", height: "clamp(1.75rem, 5vw, 2.75rem)" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <h3
            className="gold-text-solid text-amiri font-bold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
          >
            مزرعة طل القمر
          </h3>
          <p
            className="text-gold-600 text-tajawal font-light"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
          >
            تل الرمان — مقابل مطعم خيل وليل
          </p>

          <div>
            <a
              href="https://maps.app.goo.gl/HaKDDFugW8VwmxXw7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg
                style={{ width: "clamp(0.9rem, 2vw, 1.1rem)", height: "clamp(0.9rem, 2vw, 1.1rem)" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              الموقع على الخريطة
            </a>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="container-wide mt-[clamp(2.5rem,7vw,4.5rem)]" delay={0.2}>
        <div className="text-center mb-[clamp(1.5rem,4vw,2.5rem)]">
          <h2
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.4rem, 3.8vw, 2.1rem)" }}
          >
            تنويهات
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 grid-fluid">
          {[
            { icon: "🕐", text: "يُرجى الحضور قبل الموعد بنصف ساعة" },
            { icon: "👔", text: "نتشرّف بحضوركم بأبهى حلّة" },
            { icon: "👨‍👩‍👧‍👦", text: "الدعوة تشمل حاملها والعائلة الكريمة" },
          ].map((note, i) => (
            <div
              key={i}
              className="glass-gold text-center luxury-shadow luxury-shadow-hover card-md card-inset-md"
            >
              <span className="block" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>{note.icon}</span>
              <p
                className="gold-text-solid text-amiri leading-relaxed"
                style={{ fontSize: "clamp(0.85rem, 1.9vw, 1rem)" }}
              >
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
