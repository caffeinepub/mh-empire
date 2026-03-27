import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";

function NavLink({
  href,
  children,
  ocid,
}: { href: string; children: React.ReactNode; ocid: string }) {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#E7C989";
    e.currentTarget.style.textShadow = "0 0 12px rgba(201,166,106,0.4)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#A6ACB6";
    e.currentTarget.style.textShadow = "none";
  };
  return (
    <a
      href={href}
      data-ocid={ocid}
      style={{
        color: "#A6ACB6",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.14em",
        fontFamily: "Inter, sans-serif",
        textDecoration: "none",
        transition: "color 0.2s ease, text-shadow 0.2s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
}

export function Header() {
  const navLinks = ["EXPERIENCE", "SOLUTIONS", "PORTFOLIO", "ABOUT"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "1.25rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "min(90vw, 1100px)",
      }}
    >
      <div
        className="glass-heavy"
        style={{
          borderRadius: "999px",
          padding: "0.7rem 1.25rem 0.7rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          /* Extra gold-tinted top edge for the header pill */
          borderTop: "1px solid rgba(201,166,106,0.22)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C9A66A, #E7C989)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 14px rgba(201,166,106,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
              fontSize: 11,
              fontWeight: 900,
              color: "#070A12",
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.05em",
            }}
          >
            M
          </div>
          <span
            className="cinzel"
            style={{
              color: "#F2F4F7",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.12em",
              textShadow: "0 0 20px rgba(201,166,106,0.15)",
            }}
          >
            MH EMPIRE
          </span>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <NavLink
              key={link}
              href={`#${link.toLowerCase()}`}
              ocid={`nav.${link.toLowerCase()}.link`}
            >
              {link}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <MagneticButton
          className="gold-btn"
          style={
            {
              padding: "0.55rem 1.2rem",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
            } as React.CSSProperties
          }
          data-ocid="header.get_started.primary_button"
        >
          GET STARTED
        </MagneticButton>
      </div>
    </motion.header>
  );
}
