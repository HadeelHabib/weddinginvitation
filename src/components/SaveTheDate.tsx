"use client";

import SectionReveal from "./SectionReveal";

export default function SaveTheDate() {
  const googleCalUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%D8%A3%D9%81%D8%B1%D8%A7%D8%AD+%D8%A2%D9%84+%D8%A7%D9%84%D8%B4%D8%A7%D8%B9%D8%B1+-+%D8%B2%D9%81%D8%A7%D9%81+%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3+%D8%A3%D8%B3%D8%A7%D9%85%D8%A9&dates=20260912T190000/20260912T220000&ctz=Asia/Baghdad&location=%D9%85%D8%B2%D8%B1%D8%B9%D8%A9+%D8%B7%D9%84+%D8%A7%D9%84%D9%82%D9%85%D8%B1+%D8%AA%D9%84+%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%86";

  return (
    <section className="section-padding">
      <SectionReveal className="container-narrow text-center">
        <div className="glass-gold luxury-shadow luxury-shadow-hover relative overflow-hidden" style={{ padding: "clamp(1.5rem, 5vw, 3.25rem)" }}>
          <div className="absolute -top-10 -end-10 rounded-full bg-gold-200/15" style={{ width: "clamp(7rem, 22vw, 12rem)", height: "clamp(7rem, 22vw, 12rem)" }} />
          <div className="absolute -bottom-10 -start-10 rounded-full bg-gold-300/15" style={{ width: "clamp(6rem, 18vw, 10rem)", height: "clamp(6rem, 18vw, 10rem)" }} />

          <div className="relative z-10">
            <p
              className="text-gold-500 text-tajawal font-light mb-5"
              style={{
                fontSize: "clamp(0.7rem, 1.7vw, 0.85rem)",
                letterSpacing: "0.22em",
              }}
            >
              ✦ احفظ الموعد ✦
            </p>

            <div className="mb-7">
              <p
                className="gold-text-solid text-amiri mb-3"
                style={{ fontSize: "clamp(0.9rem, 2.1vw, 1.1rem)" }}
              >
                أيلول / سبتمبر ٢٠٢٦
              </p>
              <div
                className="inline-flex items-center justify-center rounded-2xl mb-4 mx-auto"
                style={{
                  width: "clamp(6.5rem, 18vw, 9rem)",
                  height: "clamp(6.5rem, 18vw, 9rem)",
                  background: "linear-gradient(135deg, var(--color-gold-400) 0%, var(--color-gold-500) 50%, var(--color-gold-600) 100%)",
                  boxShadow: "0 10px 30px rgba(212,164,55,0.35)",
                }}
              >
                <div className="text-center">
                  <span
                    className="block text-cream-50 text-playfair font-bold leading-none"
                    style={{ fontSize: "clamp(2.25rem, 8vw, 3.5rem)" }}
                  >
                    ١٢
                  </span>
                  <span
                    className="block text-cream-200 text-tajawal font-light mt-1"
                    style={{ fontSize: "clamp(0.7rem, 1.7vw, 0.85rem)" }}
                  >
                    السبت
                  </span>
                </div>
              </div>
              <p
                className="gold-text-solid text-amiri"
                style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
              >
                الساعة السابعة مساءً حتى العاشرة
              </p>
            </div>

            <p
              className="text-gold-500 text-tajawal font-light mb-6"
              style={{ fontSize: "clamp(0.7rem, 1.6vw, 0.8rem)" }}
            >
              📲 أضِف الموعد إلى تقويم هاتفك بضغطة
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={googleCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg
                  style={{ width: "clamp(0.85rem, 1.9vw, 1rem)", height: "clamp(0.85rem, 1.9vw, 1rem)" }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                تقويم جوجل
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
