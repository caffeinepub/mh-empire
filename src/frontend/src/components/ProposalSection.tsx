import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useActor } from "../hooks/useActor";

function PlayButton() {
  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "rgba(201,166,106,0.38)";
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.boxShadow = "0 0 28px rgba(201,166,106,0.45)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "rgba(201,166,106,0.18)";
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 14px rgba(201,166,106,0.2)";
  };
  return (
    <button
      type="button"
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "rgba(201,166,106,0.18)",
        border: "1px solid rgba(201,166,106,0.55)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        color: "#E7C989",
        transition: "all 0.3s ease",
        backdropFilter: "blur(8px)",
        boxShadow:
          "0 0 14px rgba(201,166,106,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-ocid="proposal.play.button"
    >
      &#9654;
    </button>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#A6ACB6",
  fontSize: "0.7rem",
  letterSpacing: "0.14em",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

export function ProposalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { actor } = useActor();

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setIsSubmitting(true);
    setError("");
    try {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      await actor.submitContact(
        id,
        form.name,
        form.email,
        form.projectType,
        form.message,
      );
      setSubmitted(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="portfolio"
      style={{ padding: "7rem 2rem", position: "relative", zIndex: 1 }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              color: "#C9A66A",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                width: 20,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A66A)",
              }}
            />
            ELEVATING ENGAGEMENT
          </p>

          <h2
            className="cinzel-section"
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
              fontWeight: 700,
              color: "#F2F4F7",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            The future of
            <br />
            <span className="gold-text">interactive storytelling</span>
          </h2>

          <p
            style={{
              color: "#A6ACB6",
              fontSize: "0.95rem",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            We don&apos;t just build digital experiences &mdash; we engineer
            emotional journeys. Every pixel, every interaction, every moment is
            crafted to forge lasting connections between brands and their
            audiences.
          </p>

          {/* Video Card */}
          <div
            className="glass"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              marginBottom: "2.5rem",
              background: "rgba(201,166,106,0.04)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(201,166,106,0.07) 0%, rgba(120,183,255,0.03) 100%)",
              }}
            />
            <PlayButton />
            <span
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1.25rem",
                color: "#A6ACB6",
                fontSize: "0.72rem",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              SHOWREEL 2026
            </span>
          </div>

          {/* Client logos */}
          <div>
            <p
              style={{
                color: "#A6ACB6",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              TRUSTED BY
            </p>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {["NEXUS", "AURORA", "VERTEX", "SYNTH", "PRISM"].map((brand) => (
                <span
                  key={brand}
                  className="cinzel"
                  style={{
                    color: "rgba(166,172,182,0.35)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="glass-heavy"
            style={{
              borderRadius: 24,
              padding: "2.75rem",
              /* Gold top-edge accent — the panel leans into the brand */
              borderTop: "1px solid rgba(201,166,106,0.28)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.04), 0 0 60px rgba(201,166,106,0.06), 0 16px 56px rgba(0,0,0,0.5)",
            }}
            data-ocid="proposal.form.panel"
          >
            <h3
              className="cinzel-panel"
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#F2F4F7",
                marginBottom: "0.6rem",
              }}
            >
              REQUEST A PROPOSAL
            </h3>
            <p
              style={{
                color: "#A6ACB6",
                fontSize: "0.82rem",
                fontFamily: "Inter, sans-serif",
                marginBottom: "2.25rem",
                lineHeight: 1.6,
              }}
            >
              Tell us about your vision and we&apos;ll craft something
              extraordinary.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "3rem 1rem" }}
                data-ocid="proposal.form.success_state"
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    filter: "drop-shadow(0 0 12px rgba(201,166,106,0.6))",
                  }}
                >
                  ✦
                </div>
                <h4
                  className="cinzel-panel"
                  style={{
                    color: "#E7C989",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  INQUIRY RECEIVED
                </h4>
                <p
                  style={{
                    color: "#A6ACB6",
                    fontSize: "0.875rem",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  We&apos;ll reach out within 24 hours to begin crafting your
                  vision.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <label htmlFor="proposal-name" style={labelStyle}>
                    Name
                  </label>
                  <input
                    id="proposal-name"
                    className="dark-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    data-ocid="proposal.name.input"
                  />
                </div>
                <div>
                  <label htmlFor="proposal-email" style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="proposal-email"
                    className="dark-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    data-ocid="proposal.email.input"
                  />
                </div>
                <div>
                  <label htmlFor="proposal-project" style={labelStyle}>
                    Project Type
                  </label>
                  <select
                    id="proposal-project"
                    value={form.projectType}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, projectType: e.target.value }))
                    }
                    required
                    data-ocid="proposal.project_type.select"
                    style={{
                      background: "rgba(255,255,255,0.055)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 10,
                      color: form.projectType ? "#F2F4F7" : "#A6ACB6",
                      padding: "0.75rem 1rem",
                      width: "100%",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9rem",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled style={{ background: "#0B0F1A" }}>
                      Select project type
                    </option>
                    <option
                      value="virtual-worlds"
                      style={{ background: "#0B0F1A" }}
                    >
                      Virtual Worlds
                    </option>
                    <option
                      value="3d-modeling"
                      style={{ background: "#0B0F1A" }}
                    >
                      3D Modeling
                    </option>
                    <option
                      value="immersive-commerce"
                      style={{ background: "#0B0F1A" }}
                    >
                      Immersive Commerce
                    </option>
                    <option
                      value="interactive-vr"
                      style={{ background: "#0B0F1A" }}
                    >
                      Interactive VR
                    </option>
                    <option value="custom" style={{ background: "#0B0F1A" }}>
                      Custom Project
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="proposal-message" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    id="proposal-message"
                    className="dark-input"
                    placeholder="Describe your vision..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={4}
                    required
                    data-ocid="proposal.message.textarea"
                    style={{ resize: "vertical" }}
                  />
                </div>

                {error && (
                  <p
                    style={{
                      color: "#ff6b6b",
                      fontSize: "0.8rem",
                      fontFamily: "Inter, sans-serif",
                    }}
                    data-ocid="proposal.form.error_state"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="gold-btn"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  data-ocid="proposal.form.submit_button"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(201,166,106,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </section>
  );
}
