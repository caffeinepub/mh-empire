import { AnimatePresence, motion } from "motion/react";

interface Particle {
  id: number;
  angle: number;
  distance: number;
  size: number;
}

interface ParticleExplosionProps {
  active: boolean;
  x: number;
  y: number;
}

export function ParticleExplosion({ active, x, y }: ParticleExplosionProps) {
  const particles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * Math.PI * 2 + Math.random() * 0.5,
    distance: 60 + Math.random() * 80,
    size: 4 + Math.random() * 6,
  }));

  return (
    <AnimatePresence>
      {active &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0,
              x: Math.cos(p.angle) * p.distance,
              y: Math.sin(p.angle) * p.distance,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: x,
              top: y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "radial-gradient(circle, #E7C989, #C9A66A)",
              pointerEvents: "none",
              zIndex: 9998,
              boxShadow: "0 0 6px #C9A66A",
            }}
          />
        ))}
    </AnimatePresence>
  );
}
