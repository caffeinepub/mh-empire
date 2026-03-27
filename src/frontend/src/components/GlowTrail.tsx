import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function GlowTrail() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 100 });
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(201,166,106,0.15) 0%, rgba(201,166,106,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
