"use client";

import { useState, useEffect } from "react";
import SectionReveal from "./SectionReveal";

const WHATSAPP_NUMBER = "966535767379";
const STORAGE_KEY = "wedding_congrats_v1";

const DEFAULT_CONGRATS: string[] = [
  "ألف مبروك يا أبو أسامة 🤍 بالرفاه والبنين إن شاء الله",
  "عقبال ما نفرح بيكم بأحلى المناسبات، دعوة بغاية الذوق 😍",
  "مبارك يا مهندس، الله يجعل أيامك كلها أفراح ويبارك لك في حياتك الجديدة",
  "بيت جديد عامر بالمحبة إن شاء الله، ألف مبروك والله يجمعكم في خير",
  "الله يبارك لكما ويبارك عليكما ويجمع بينكما في خير، أجمل التمنيات للعريس الكريم",
  "تقبل الله منا ومنكم صالح الأعمال، ومبارك لكما هذا اليوم الجميل 💛",
];

function buildAttendanceLabel(value: string | null) {
  switch (value) {
    case "yes":
      return "نعم — سأحضر ✅";
    case "no":
      return "لا — لن أستطيع الحضور ❌";
    case "maybe":
      return "ربما — سأؤكد لاحقاً ⚠️";
    default:
      return "لم يُحدّد";
  }
}

function readStoredCongrats(): string[] {
  if (typeof window === "undefined") return DEFAULT_CONGRATS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONGRATS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_CONGRATS;
    const cleaned = parsed.filter((x) => typeof x === "string" && x.trim().length > 0);
    if (cleaned.length === 0) return DEFAULT_CONGRATS;
    return cleaned;
  } catch {
    return DEFAULT_CONGRATS;
  }
}

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string | null>(null);
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [congrats, setCongrats] = useState<string[]>(() => readStoredCongrats());

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(congrats));
    } catch {
      /* ignore quota / disabled storage */
    }
  }, [congrats]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    setSubmitted(true);

    if (trimmedMessage) {
      setCongrats((prev) => {
        if (prev.includes(trimmedMessage)) return prev;
        return [trimmedMessage, ...prev];
      });
    }

    const attendanceLine = buildAttendanceLabel(attendance);
    const guestsLabel = guests === 0 ? "أنا وحدي (٠ مرافقين)" : `${guests} مرافق${guests === 1 ? "" : "ين"} + حضوري`;
    const parts: string[] = [
      "💌 *تأكيد حضور — دعوة زفاف آل الشاعر*",
      "",
      `👤 الاسم: ${trimmedName || "—"}`,
      `🎟️ الحضور: ${attendanceLine}`,
      `👥 العدد: ${guestsLabel}`,
    ];
    if (trimmedMessage) {
      parts.push("", "💬 كلمة للعريس:", trimmedMessage);
    }
    parts.push("", "— أرسلت من صفحة الدعوة");
    const text = parts.join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="section-padding relative overflow-hidden bg-paper-texture"
      style={{
        background:
          "linear-gradient(180deg, #fffef7 0%, #faf5e4 30%, #f5edd3 60%, #faf5e4 100%)",
      }}
    >
      <SectionReveal className="container-narrow">
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
            تأكيد الحضور
          </h2>
          <p
            className="text-gold-600 text-tajawal font-light"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}
          >
            يسعدنا تأكيد حضوركم
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="glass-gold luxury-shadow space-fluid-y card-xl"
          >
            <div>
              <label
                className="block gold-text-solid text-amiri mb-2"
                style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}
              >
                الاسم الكريم
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسمك الكريم"
                className="field-input"
                required
              />
            </div>

            <div>
              <label
                className="block gold-text-solid text-amiri mb-3"
                style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}
              >
                هل ستحضر؟
              </label>
              <div className="flex grid-fluid">
                {[
                  { value: "yes", label: "نعم" },
                  { value: "no", label: "لا" },
                  { value: "maybe", label: "ربما" },
                ].map((opt) => {
                  const isActive = attendance === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setAttendance(opt.value)}
                      className="flex-1 rounded-xl text-tajawal transition-all duration-300"
                      style={{
                        paddingBlock: "clamp(0.6rem, 1.75vw, 0.85rem)",
                        fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
                        fontWeight: isActive ? 500 : 400,
                        background: isActive
                          ? "linear-gradient(135deg, var(--color-gold-400), var(--color-gold-500))"
                          : "var(--color-cream-50)",
                        color: isActive ? "var(--color-cream-50)" : "var(--color-gold-600)",
                        border: isActive
                          ? "1px solid transparent"
                          : "1px solid var(--color-gold-200)",
                        boxShadow: isActive ? "0 4px 14px rgba(212,164,55,0.3)" : "none",
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label
                className="block gold-text-solid text-amiri mb-3"
                style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}
              >
                عدد المرافقين (عدا حضورك — ٠ إن كنت وحدك)
              </label>
              <div className="flex items-center justify-center grid-fluid">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(0, guests - 1))}
                  className="rounded-full bg-cream-50 border border-gold-200 text-gold-600 hover:bg-gold-100 transition-colors flex items-center justify-center"
                  style={{
                    width: "clamp(2.25rem, 6vw, 2.75rem)",
                    height: "clamp(2.25rem, 6vw, 2.75rem)",
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  }}
                >
                  −
                </button>
                <span
                  className="gold-text-solid text-playfair font-bold text-center tabular-nums"
                  style={{
                    width: "clamp(2.25rem, 8vw, 3.25rem)",
                    fontSize: "clamp(1.4rem, 5vw, 2rem)",
                  }}
                >
                  {guests}
                </span>
                <button
                  type="button"
                  onClick={() => setGuests(guests + 1)}
                  className="rounded-full bg-cream-50 border border-gold-200 text-gold-600 hover:bg-gold-100 transition-colors flex items-center justify-center"
                  style={{
                    width: "clamp(2.25rem, 6vw, 2.75rem)",
                    height: "clamp(2.25rem, 6vw, 2.75rem)",
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label
                className="block gold-text-solid text-amiri mb-2"
                style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}
              >
                كلمة للعريس 💌
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اكتب تهنئتك للعريس..."
                rows={3}
                className="field-input resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl text-cream-50 text-tajawal font-semibold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                paddingBlock: "clamp(0.75rem, 2vw, 1rem)",
                fontSize: "clamp(0.95rem, 2.1vw, 1.1rem)",
                background: "linear-gradient(135deg, var(--color-gold-400) 0%, var(--color-gold-500) 50%, var(--color-gold-600) 100%)",
                boxShadow: "0 6px 20px rgba(212,164,55,0.4)",
              }}
            >
              إرسال التأكيد
            </button>
          </form>
        ) : (
          <div className="space-fluid-y">
            <div className="glass-gold text-center luxury-shadow card-xl card-inset-xl">
              <div style={{ fontSize: "clamp(2.25rem, 7vw, 3.25rem)" }}>💛</div>
              <p
                className="gold-text-solid text-amiri font-bold"
                style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
              >
                شكراً لتأكيدكم
              </p>
              <p
                className="text-gold-500 text-tajawal font-light"
                style={{ fontSize: "clamp(0.85rem, 1.9vw, 1rem)" }}
              >
                نتطلّع لرؤيتكم في أجمل ليلة
              </p>
            </div>
          </div>
        )}
      </SectionReveal>

      <SectionReveal className="container-wide mt-[clamp(2.5rem,7vw,4.5rem)]" delay={submitted ? 0.15 : 0.3}>
        <div className="space-fluid-y">
          <div className="text-center">
            <div className="section-divider mb-4">
              <div className="section-divider-line start" />
              <span className="text-gold-400" style={{ fontSize: "clamp(0.75rem, 1.6vw, 0.95rem)" }}>❦</span>
              <div className="section-divider-line end" />
            </div>
            <h3
              className="gold-text text-amiri font-bold"
              style={{ fontSize: "clamp(1.2rem, 3.2vw, 1.75rem)" }}
            >
              كلمات المهنّئين
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-fluid">
            {congrats.map((msg, i) => (
              <SectionReveal key={`c-${i}`} delay={i * 0.06}>
                <div
                  className="glass-gold luxury-shadow luxury-shadow-hover card-md card-inset-md"
                >
                  <p
                    className="gold-text-solid text-tajawal font-light leading-relaxed text-center"
                    style={{ fontSize: "clamp(0.85rem, 1.9vw, 1rem)" }}
                  >
                    {msg}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
