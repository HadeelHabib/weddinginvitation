"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HERO_VIDEO_SRC, HERO_AUDIO_SRC } from "@/lib/assets";

export default function HeroSlider({ onOpen }: { onOpen?: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    const boot = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(boot);
  }, []);

  const startAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.volume = 0.65;
      const p = a.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          /* browsers may block even gesture-init audio when tab not foreground — ignore */
        });
      }
    } catch {
      /* ignore */
    }
  };

  const startVideo = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (typeof onOpen === "function") {
      try { onOpen(); } catch { /* ignore */ }
    }
    const v = videoRef.current;
    if (!v) {
      setVideoStarted(true);
      return;
    }
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        setVideoStarted(true);
        startAudio();
      }).catch(() => {
        setVideoStarted(true);
        startAudio();
      });
    } else {
      setVideoStarted(true);
      startAudio();
    }
  }, [onOpen]);

  const handleVideoEnded = () => {
    setVideoFinished(true);
  };

  const reveal = mounted && videoFinished;

  useEffect(() => {
    if (videoStarted) return undefined;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      startVideo();
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      startVideo();
    };
    const onTouchStart = () => startVideo();
    const onScroll = (e: Event) => {
      e.preventDefault();
      startVideo();
    };
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === " " ||
        e.key === "PageUp" ||
        e.key === "PageDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Home" ||
        e.key === "End"
      ) {
        e.preventDefault();
        startVideo();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("keydown", onKey);
    };
  }, [videoStarted, startVideo]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden safe-top safe-bottom cursor-pointer select-none"
      onClick={startVideo}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startVideo();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="تشغيل الدعوة"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay={false}
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        onEnded={handleVideoEnded}
        x5-playsinline="true"
        webkit-playsinline="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/quicktime" />
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <audio
        ref={audioRef}
        preload="auto"
        autoPlay={false}
        loop
        muted={false}
        controls={false}
        playsInline
      >
        <source src={HERO_AUDIO_SRC} type="audio/mp4" />
        <source src={HERO_AUDIO_SRC} type="audio/aac" />
      </audio>

      <div className="absolute inset-0 bg-paper-texture pointer-events-none" style={{ opacity: 0.35 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: videoFinished
            ? "linear-gradient(180deg, rgba(255,254,247,0.72) 0%, rgba(253,250,240,0.78) 35%, rgba(250,245,228,0.72) 70%, rgba(253,250,240,0.7) 100%)"
            : "linear-gradient(180deg, rgba(255,254,247,0.12) 0%, rgba(212,164,55,0.08) 50%, rgba(255,254,247,0.12) 100%)",
          transition: "background 0.9s ease",
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        <div
          className="absolute top-[12%] bottom-[12%] hidden sm:block"
          style={{
            insetInlineStart: "clamp(1rem, 4vw, 3rem)",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(212,164,55,0.25), transparent)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        />
        <div
          className="absolute top-[12%] bottom-[12%] hidden sm:block"
          style={{
            insetInlineEnd: "clamp(1rem, 4vw, 3rem)",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(212,164,55,0.25), transparent)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        />

        <svg
          className="absolute text-gold-400/30"
          style={{
            top: "clamp(0.75rem, 2vw, 1.5rem)",
            insetInlineStart: "clamp(0.75rem, 2vw, 1.5rem)",
            width: "clamp(2.5rem, 6vw, 4.5rem)",
            height: "clamp(2.5rem, 6vw, 4.5rem)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M10,10 Q35,10 35,35 Q10,35 10,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.7"/>
        </svg>
        <svg
          className="absolute text-gold-400/30 scale-x-[-1]"
          style={{
            top: "clamp(0.75rem, 2vw, 1.5rem)",
            insetInlineEnd: "clamp(0.75rem, 2vw, 1.5rem)",
            width: "clamp(2.5rem, 6vw, 4.5rem)",
            height: "clamp(2.5rem, 6vw, 4.5rem)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M10,10 Q35,10 35,35 Q10,35 10,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.7"/>
        </svg>
        <svg
          className="absolute text-gold-400/30 scale-y-[-1]"
          style={{
            bottom: "clamp(0.75rem, 2vw, 1.5rem)",
            insetInlineStart: "clamp(0.75rem, 2vw, 1.5rem)",
            width: "clamp(2.5rem, 6vw, 4.5rem)",
            height: "clamp(2.5rem, 6vw, 4.5rem)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M10,10 Q35,10 35,35 Q10,35 10,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.7"/>
        </svg>
        <svg
          className="absolute text-gold-400/30 scale-[-1]"
          style={{
            bottom: "clamp(0.75rem, 2vw, 1.5rem)",
            insetInlineEnd: "clamp(0.75rem, 2vw, 1.5rem)",
            width: "clamp(2.5rem, 6vw, 4.5rem)",
            height: "clamp(2.5rem, 6vw, 4.5rem)",
            opacity: videoFinished ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M10,10 Q35,10 35,35 Q10,35 10,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      <div
        className="relative z-10 text-center px-[clamp(1rem,5vw,2rem)] max-w-[clamp(20rem,75vw,52rem)] mx-auto w-full pointer-events-none"
        style={{
          opacity: reveal ? 1 : 0,
          transition: "opacity 1s ease-out",
        }}
      >
        <div
          style={{
            transform: reveal ? "translateY(0)" : "translateY(28px)",
            transition: "transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          <p
            className="text-gold-600 mb-6 text-tajawal font-light"
            style={{
              fontSize: "clamp(0.7rem, 1.6vw, 0.95rem)",
              letterSpacing: "clamp(0.15em, 0.4vw, 0.35em)",
            }}
          >
            ✦ دعوة زفاف ✦
          </p>
        </div>

        <div
          style={{
            transform: reveal ? "scale(1)" : "scale(0.92)",
            transition: "transform 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s",
          }}
        >
          <div className="section-divider mb-8">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}>❦</span>
            <div className="section-divider-line end" />
          </div>

          <h1 className="mb-2 space-y-[0.5em]">
            <span
              className="block gold-text-solid text-amiri font-bold"
              style={{ fontSize: "clamp(1.35rem, 3.5vw, 2.25rem)" }}
            >
              أفراح آل الشاعر
            </span>
            <span
              className="block gold-text leading-[1.15] text-amiri font-bold"
              style={{ fontSize: "clamp(2.75rem, 10vw, 6.5rem)" }}
            >
              المهندس أسامة
            </span>
          </h1>

          <div className="section-divider mt-10 mb-10">
            <div className="section-divider-line start" />
            <span className="text-gold-400" style={{ fontSize: "clamp(0.8rem, 1.8vw, 1.1rem)" }}>✦ ✦ ✦</span>
            <div className="section-divider-line end" />
          </div>
        </div>

        <div
          style={{
            transform: reveal ? "translateY(0)" : "translateY(18px)",
            transition: "transform 1s cubic-bezier(0.22,1,0.36,1) 0.7s",
          }}
        >
          <p
            className="gold-text-solid text-amiri mb-2"
            style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)" }}
          >
            يوم السبت الموافق ١٢ / ٩ / ٢٠٢٦
          </p>
          <p
            className="text-gold-600 text-tajawal font-light mb-10"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
          >
            الساعة السابعة مساءً حتى الساعة العاشرة
          </p>
        </div>

        <p
          className="gold-text-solid text-amiri max-w-[clamp(18rem,55vw,30rem)] mx-auto leading-editorial mb-12"
          style={{
            fontSize: "clamp(0.85rem, 1.9vw, 1.05rem)",
            opacity: reveal ? 1 : 0,
            transition: "opacity 1s ease-out 1s",
          }}
        >
         
        </p>

        <div
          className="flex flex-col items-center"
          style={{
            gap: "clamp(0.5rem, 1.2vw, 0.75rem)",
            opacity: reveal ? 1 : 0,
            transition: "opacity 1s ease-out 1.4s",
          }}
        >
          <span className="text-gold-500 text-tajawal font-light tracking-[0.25em]" style={{ fontSize: "clamp(0.6rem, 1.3vw, 0.75rem)" }}>
            مرّر للأسفل
          </span>
          <div
            className="rounded-full border border-gold-400/50 flex items-start justify-center pt-2"
            style={{
              width: "clamp(1.35rem, 2.4vw, 1.6rem)",
              height: "clamp(2.2rem, 4vw, 2.6rem)",
              animation: "glow 2.5s ease-in-out infinite",
            }}
          >
            <div
              className="rounded-full bg-gold-400 animate-bounce"
              style={{
                width: "clamp(0.15rem, 0.4vw, 0.2rem)",
                height: "clamp(0.4rem, 0.9vw, 0.55rem)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
