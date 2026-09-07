"use client";

import { useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: "circle" | "diamond" | "leaf";
}

function generatePetals(): Petal[] {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 8,
    size: Math.random() * 10 + 6,
    opacity: Math.random() * 0.3 + 0.1,
    type: (["circle", "diamond", "leaf"] as const)[Math.floor(Math.random() * 3)],
  }));
}

export default function PetalOverlay() {
  const [petals] = useState<Petal[]>(generatePetals);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background:
              p.type === "circle"
                ? "radial-gradient(circle, #d4a437, #f0d67b)"
                : p.type === "diamond"
                ? "linear-gradient(45deg, #d4a437, #f7e7ce)"
                : "linear-gradient(135deg, #d4a437, #e6c35a)",
            borderRadius:
              p.type === "circle"
                ? "50%"
                : p.type === "diamond"
                ? "2px"
                : "50% 0 50% 0",
            transform: p.type === "diamond" ? "rotate(45deg)" : undefined,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
