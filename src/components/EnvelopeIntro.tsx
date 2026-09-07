"use client";

import { useState } from "react";

interface Particle {
  w: number;
  h: number;
  bg: string;
  left: string;
  top: string;
  dur: number;
  delay: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 22 }, () => ({
    w: Math.random() * 7 + 2,
    h: Math.random() * 7 + 2,
    bg: `rgba(212, 164, 55, ${(Math.random() * 0.4 + 0.1).toFixed(3)})`,
    left: `${(Math.random() * 100).toFixed(1)}%`,
    top: `${(Math.random() * 100).toFixed(1)}%`,
    dur: Math.random() * 3 + 2.5,
    delay: Math.random() * 2.5,
  }));
}

export default function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const [particles] = useState<Particle[]>(generateParticles);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1800);
  };

  if (isOpening) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: "radial-gradient(ellipse at center, #fdfaf0 0%, #f5edd3 40%, #ede0b8 100%)",
          animation: "fadeOut 1s ease-out 1s forwards",
        }}
      />
    );
  }

  const envW = "clamp(17rem, 75vw, 28rem)";
  const envH = "clamp(12rem, 52vw, 19rem)";
  const sealSize = "clamp(5rem, 22vw, 7.5rem)";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center safe-top safe-bottom"
      style={{
        background: "radial-gradient(ellipse at center, #fdfaf0 0%, #f5edd3 40%, #ede0b8 100%)",
      }}
    >
      <div className="absolute inset-0 bg-paper-texture opacity-60" aria-hidden="true" />

      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w,
            height: p.h,
            background: p.bg,
            left: p.left,
            top: p.top,
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="relative cursor-pointer select-none"
        style={{ animation: "scaleIn 1s cubic-bezier(0.22,1,0.36,1)" }}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <div
          className="relative mx-auto"
          style={{ width: envW, height: envH }}
        >
          <div
            className="absolute inset-0 rounded-[clamp(0.5rem,1.2vw,0.75rem)] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f5edd3 0%, #ede0b8 50%, #e6d5a8 100%)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(212,164,55,0.22), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: "55%",
                background: "linear-gradient(180deg, #ede0b8 0%, #e6d5a8 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "60%",
                clipPath: "polygon(0 40%, 50% 0, 100% 40%, 100% 100%, 0 100%)",
                background: "linear-gradient(180deg, #f0e4c8 0%, #ede0b8 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.4) 0%, transparent 60%)",
              }}
            />
          </div>

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ animation: "glow 2.5s ease-in-out infinite" }}
          >
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: sealSize,
                height: sealSize,
                background: "radial-gradient(circle at 35% 35%, #e6c35a 0%, #d4a437 30%, #b8860b 70%, #8b6914 100%)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.20), inset 0 2px 4px rgba(255,255,255,0.30), inset 0 -2px 4px rgba(0,0,0,0.12)",
              }}
            >
              <div className="text-center px-2">
                <p
                  className="text-cream-50 leading-tight"
                  style={{
                    fontFamily: "var(--font-amiri)",
                    fontSize: "clamp(0.55rem, 2.2vw, 0.75rem)",
                  }}
                >
                  بسم الله
                </p>
                <p
                  className="text-cream-50 leading-tight"
                  style={{
                    fontFamily: "var(--font-amiri)",
                    fontSize: "clamp(0.48rem, 1.9vw, 0.68rem)",
                  }}
                >
                  الرحمن الرحيم
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute left-1/2 -translate-x-1/2 text-tajawal font-medium text-cream-50"
          style={{
            bottom: "clamp(-4rem, -14vw, -5rem)",
            paddingInline: "clamp(1.25rem, 4.5vw, 2.25rem)",
            paddingBlock: "clamp(0.6rem, 2vw, 0.85rem)",
            borderRadius: "var(--radius-full)",
            background: "linear-gradient(135deg, var(--color-gold-400) 0%, var(--color-gold-500) 50%, var(--color-gold-600) 100%)",
            boxShadow: "0 5px 20px rgba(212,164,55,0.45)",
            animation: "glow 2.5s ease-in-out infinite",
            fontSize: "clamp(0.5rem, 1vw, 1rem)",
            letterSpacing: "0.02em",
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          اضغط لفتح الدعوة ❦
        </button>
      </div>
    </div>
  );
}
