"use client";

import SectionReveal from "./SectionReveal";

export default function InvitationCard() {
  return (
    <section className="section-padding">
      <SectionReveal className="container-prose text-center">
        <div className="section-header mb-10">
          <div className="section-divider">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}>❦</span>
            <div className="section-divider-line end" />
          </div>
          <h2
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
          >
            بطاقة دعوة
          </h2>
        </div>

        <div className="gold-border-gradient card-xl">
          <p
            className="gold-text-solid text-amiri font-bold leading-editorial"
            style={{ fontSize: "clamp(1rem, 2.4vw, 1.35rem)" }}
          >
            بسم الله الرحمن الرحيم
          </p>
          <p
            className="gold-text-solid text-amiri leading-editorial"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            يتشرف السيد <strong>أجود جميل الشاعر</strong> بدعوتكم لحضور حفل زفاف ابنه
          </p>
          <p
            className="gold-text text-amiri font-bold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
          >
            المهندس أسامة
          </p>
          <p
            className="gold-text-solid text-amiri leading-editorial"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            يوم السبت الموافق ١٢ / ٩ / ٢٠٢٦
            <br className="hidden sm:block" />
            وذلك في تمام الساعة السابعة مساءً حتى الساعة العاشرة
          </p>
          <p
            className="text-gold-600 text-amiri"
            style={{ fontSize: "clamp(0.85rem, 1.9vw, 1.05rem)" }}
          >
            في مزرعة طل القمر، تل الرمان، مقابل مطعم خيل وليل
          </p>
          <p
            className="gold-text-solid text-amiri font-bold"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
          >
            حضوركم يفرحنا ♥
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
