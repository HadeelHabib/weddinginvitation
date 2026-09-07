"use client";

import SectionReveal from "./SectionReveal";

const events = [
  { time: "٧:٠٠ مساءً", title: "استقبال الضيوف", icon: "🌙" },
  { time: "٧:٣٠ مساءً", title: "بداية الحفل", icon: "💍" },
  { time: "٨:٣٠ مساءً", title: "العشاء", icon: "🍽" },
  { time: "٩:٣٠ مساءً", title: "فقرات الحفل", icon: "🎶" },
  { time: "١٠:٠٠ مساءً", title: "نهاية الحفل", icon: "🌟" },
];

export default function Timeline() {
  return (
    <section className="section-padding">
      <SectionReveal className="container-prose">
        <div className="text-center mb-10">
          <div className="section-divider mb-3">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}>❦</span>
            <div className="section-divider-line end" />
          </div>
          <h2
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
          >
            برنامج الحفل
          </h2>
        </div>

        <div className="sm:hidden space-fluid-y">
          {events.map((event, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="flex items-start" style={{ gap: "clamp(0.75rem, 2.5vw, 1rem)" }}>
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="rounded-full flex items-center justify-center luxury-shadow shrink-0"
                    style={{
                      width: "clamp(3rem, 11vw, 3.75rem)",
                      height: "clamp(3rem, 11vw, 3.75rem)",
                      fontSize: "clamp(1rem, 3.5vw, 1.25rem)",
                      background:
                        "linear-gradient(135deg, var(--color-cream-100) 0%, var(--color-champagne-200) 100%)",
                      border: "2px solid rgba(212,164,55,0.35)",
                    }}
                  >
                    {event.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="glass-gold luxury-shadow card-md card-inset-md">
                    <p
                      className="text-gold-500 text-tajawal font-light"
                      style={{ fontSize: "clamp(0.75rem, 2vw, 0.85rem)" }}
                    >
                      {event.time}
                    </p>
                    <p
                      className="gold-text-solid text-amiri font-bold leading-snug"
                      style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)" }}
                    >
                      {event.title}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="hidden sm:block relative max-w-2xl mx-auto">
          <div
            className="absolute top-0 bottom-0 w-px left-1/2 -translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--color-gold-400) 15%, var(--color-gold-400) 85%, transparent)",
            }}
          />
          <div className="space-fluid-y">
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              const content = (
                <div className={`glass-gold luxury-shadow card-md card-inset-md ${isEven ? "text-end" : "text-start"}`}>
                  <p
                    className="text-gold-500 text-tajawal font-light"
                    style={{ fontSize: "clamp(0.8rem, 1.7vw, 0.95rem)" }}
                  >
                    {event.time}
                  </p>
                  <p
                    className="gold-text-solid text-amiri font-bold leading-snug"
                    style={{ fontSize: "clamp(1.05rem, 2.3vw, 1.25rem)" }}
                  >
                    {event.title}
                  </p>
                </div>
              );
              const icon = (
                <div
                  className="rounded-full flex items-center justify-center luxury-shadow"
                  style={{
                    width: "clamp(3.5rem, 7vw, 4.75rem)",
                    height: "clamp(3.5rem, 7vw, 4.75rem)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    background:
                      "linear-gradient(135deg, var(--color-cream-100) 0%, var(--color-champagne-200) 100%)",
                    border: "2px solid rgba(212,164,55,0.35)",
                  }}
                >
                  {event.icon}
                </div>
              );
              return (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="relative grid grid-cols-2 gap-6 items-center">
                    {isEven ? (
                      <>
                        <div className="justify-self-end pr-6">{content}</div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{icon}</div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{icon}</div>
                        <div className="col-start-2 justify-self-start pl-6">{content}</div>
                      </>
                    )}
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
