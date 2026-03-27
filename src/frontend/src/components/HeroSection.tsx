import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { OrbitalModel } from "./OrbitalModel";

function LearnMoreButton() {
  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "rgba(201,166,106,0.6)";
    e.currentTarget.style.color = "#E7C989";
    e.currentTarget.style.boxShadow = "0 0 18px rgba(201,166,106,0.15)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
    e.currentTarget.style.color = "#F2F4F7";
    e.currentTarget.style.boxShadow = "none";
  };
  return (
    <button
      type="button"
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.18)",
        color: "#F2F4F7",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        borderRadius: 10,
        padding: "0.8rem 1.9rem",
        cursor: "pointer",
        transition: "border-color 0.25s, color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-ocid="hero.learn_more.secondary_button"
    >
      LEARN MORE
    </button>
  );
}

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 2rem 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              color: "#C9A66A",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 24,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A66A)",
              }}
            />
            IMMERSIVE DIGITAL EXPERIENCES
            <span
              style={{
                display: "inline-block",
                width: 24,
                height: 1,
                background: "linear-gradient(90deg, #C9A66A, transparent)",
              }}
            />
          </motion.p>

          {/* H1 — maximum drama */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="cinzel-display"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              fontWeight: 900,
              color: "#F2F4F7",
              lineHeight: 0.95,
              marginBottom: "1.25rem",
            }}
          >
            MH
            <br />
            {/* EMPIRE gets animated gold shimmer */}
            <span className="gold-text">EMPIRE</span>
          </motion.h1>

          {/* Subhead — wider tracking, more breathing room */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="cinzel"
            style={{
              fontSize: "clamp(0.7rem, 1.2vw, 0.88rem)",
              fontWeight: 400,
              color: "rgba(166,172,182,0.8)",
              letterSpacing: "0.32em",
              marginBottom: "2rem",
              textTransform: "uppercase",
              borderLeft: "2px solid rgba(201,166,106,0.4)",
              paddingLeft: "1rem",
            }}
          >
            ARCHITECTS OF IMMERSIVE 3D REALITIES
          </motion.p>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              color: "#A6ACB6",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2.75rem",
              maxWidth: 440,
              fontFamily: "Inter, sans-serif",
            }}
          >
            We craft boundary-defying digital universes where brands transcend
            the ordinary and audiences discover the extraordinary.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <MagneticButton
              className="gold-btn"
              data-ocid="hero.explore_services.primary_button"
            >
              ◈ EXPLORE DIMENSIONS
            </MagneticButton>
            <LearnMoreButton />
          </motion.div>
        </motion.div>

        {/* Right: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.1, ease: "easeOut" }}
          style={{ width: "100%", height: 540, position: "relative" }}
        >
          <OrbitalModel />
          <div
            style={{
              position: "absolute",
              bottom: "4%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 340,
              height: 70,
              background:
                "radial-gradient(ellipse, rgba(201,166,106,0.3) 0%, transparent 70%)",
              filter: "blur(24px)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Background gold nebula */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(201,166,106,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </section>
  );
}
