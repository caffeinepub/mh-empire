import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ParticleExplosion } from "./ParticleExplosion";

const services = [
  {
    id: 1,
    title: "VIRTUAL WORLDS",
    icon: "🌐",
    description:
      "Architect sprawling virtual realms with photorealistic rendering, physics simulations, and real-time environmental storytelling.",
  },
  {
    id: 2,
    title: "3D MODELING",
    icon: "⬡",
    description:
      "Precision-crafted assets that breathe life into concepts — from high-poly sculpts to game-ready optimized meshes.",
  },
  {
    id: 3,
    title: "IMMERSIVE COMMERCE",
    icon: "◎",
    description:
      "Transform product experiences with interactive 3D configurators, virtual showrooms, and AR integration.",
  },
  {
    id: 4,
    title: "INTERACTIVE VR",
    icon: "◈",
    description:
      "Full-spectrum VR solutions: spatial design, haptic feedback choreography, and multi-user presence platforms.",
  },
];

interface ExplosionState {
  active: boolean;
  x: number;
  y: number;
  cardId: number | null;
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [explosion, setExplosion] = useState<ExplosionState>({
    active: false,
    x: 0,
    y: 0,
    cardId: null,
  });

  const handleCardClick = (e: React.MouseEvent, cardId: number) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setExplosion({ active: true, x: cx, y: cy, cardId });
    setTimeout(() => setExplosion((prev) => ({ ...prev, active: false })), 800);
  };

  return (
    <section
      ref={ref}
      id="solutions"
      style={{ padding: "7rem 2rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          {/* Eyebrow with flanking lines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                flex: 1,
                maxWidth: 80,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(201,166,106,0.5))",
              }}
            />
            <p
              style={{
                color: "#C9A66A",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              WHAT WE BUILD
            </p>
            <span
              style={{
                flex: 1,
                maxWidth: 80,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(201,166,106,0.5), transparent)",
              }}
            />
          </div>

          <h2
            className="cinzel-section"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              fontWeight: 700,
              color: "#F2F4F7",
            }}
          >
            OUR <span className="gold-text">SERVICES</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="service-card"
              onClick={(e) => handleCardClick(e, service.id)}
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Icon ring — gold-bordered circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,166,106,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: "1.5rem",
                  background: "rgba(201,166,106,0.07)",
                  boxShadow:
                    "0 0 14px rgba(201,166,106,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="cinzel-panel"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "#F2F4F7",
                  marginBottom: "1rem",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#A6ACB6",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {service.description}
              </p>

              <ViewDetailsButton index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <ParticleExplosion
        active={explosion.active}
        x={explosion.x}
        y={explosion.y}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(120,183,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </section>
  );
}

function ViewDetailsButton({ index }: { index: number }) {
  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "rgba(201,166,106,0.12)";
    e.currentTarget.style.borderColor = "rgba(201,166,106,0.7)";
    e.currentTarget.style.boxShadow = "0 0 14px rgba(201,166,106,0.2)";
    e.currentTarget.style.color = "#E7C989";
  };
  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.borderColor = "rgba(201,166,106,0.35)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.color = "#C9A66A";
  };
  return (
    <button
      type="button"
      style={{
        background: "transparent",
        border: "1px solid rgba(201,166,106,0.35)",
        color: "#C9A66A",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        borderRadius: 7,
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-ocid={`services.view_details.button.${index + 1}`}
    >
      VIEW DETAILS →
    </button>
  );
}
