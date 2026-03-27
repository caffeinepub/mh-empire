import { motion, useSpring } from "motion/react";
import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  "data-ocid"?: string;
}

export function MagneticButton({
  children,
  className,
  style,
  onClick,
  "data-ocid": ocid,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { damping: 15, stiffness: 200 });
  const y = useSpring(0, { damping: 15, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 80) {
      x.set(dx * 0.35);
      y.set(dy * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className={className}
      onClick={onClick}
      data-ocid={ocid}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
    >
      {children}
    </motion.button>
  );
}
