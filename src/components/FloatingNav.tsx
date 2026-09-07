"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "الرئيسية", icon: "🏠" },
  { id: "countdown", label: "العد التنازلي", icon: "⏳" },
  { id: "timeline", label: "البرنامج", icon: "📋" },
  { id: "venue", label: "المكان", icon: "📍" },
  { id: "rsvp", label: "التأكيد", icon: "✉" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const bottomOffset = "max(1.25rem, env(safe-area-inset-bottom))";
  const btnSize = "clamp(2.75rem, 7vw, 3.25rem)";

  return (
    <div
      className="fixed z-40 left-1/2 -translate-x-1/2"
      style={{
        bottom: bottomOffset,
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) ${visible ? "translateY(0)" : "translateY(120%)"}`,
        transition: "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {isOpen && (
        <div
          className="glass-gold luxury-shadow"
          style={{
            position: "absolute",
            bottom: `calc(${btnSize} + 0.85rem)`,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "0.5rem",
            borderRadius: "var(--radius-2xl)",
            minWidth: "min(80vw, 16rem)",
            animation: "fadeInUp 0.22s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl gold-text-solid text-tajawal transition-colors hover:bg-gold-100"
              style={{
                fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                fontWeight: 400,
              }}
            >
              <span style={{ fontSize: "1.1em" }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        className="flex items-center justify-center text-cream-50 transition-all duration-300"
        style={{
          width: btnSize,
          height: btnSize,
          borderRadius: "var(--radius-full)",
          background: "linear-gradient(135deg, var(--color-gold-400) 0%, var(--color-gold-500) 50%, var(--color-gold-600) 100%)",
          boxShadow: "0 6px 24px rgba(212,164,55,0.45)",
        }}
      >
        <span
          style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "transform 0.22s ease",
            display: "inline-block",
          }}
        >
          {isOpen ? "✕" : "☰"}
        </span>
      </button>
    </div>
  );
}
