import { useMemo } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 0.5 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.6,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(120,183,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201,166,106,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: star.id % 5 === 0 ? "#78B7FF" : "#F2F4F7",
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite alternate`,
            }}
          />
        ))}
        <style>{`
          @keyframes twinkle {
            from { opacity: 0.1; transform: scale(0.8); }
            to { opacity: 0.8; transform: scale(1.3); }
          }
        `}</style>
      </div>
      {/* Vignette */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(7,10,18,0.8) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
