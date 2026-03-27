export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const cols = [
    {
      title: "SERVICES",
      links: [
        "Virtual Worlds",
        "3D Modeling",
        "Immersive Commerce",
        "Interactive VR",
      ],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Portfolio", "Case Studies", "Careers"],
    },
    {
      title: "CONTACT",
      links: ["hello@mhempire.io", "Schedule a Call", "Partnership"],
    },
  ];

  const linkStyle: React.CSSProperties = {
    color: "#A6ACB6",
    fontSize: "0.85rem",
    fontFamily: "Inter, sans-serif",
    textDecoration: "none",
    transition: "color 0.2s ease",
    cursor: "pointer",
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 2rem 2rem",
        marginTop: "4rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="glass-heavy"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: 20,
          padding: "3rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Logo + desc */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C9A66A, #E7C989)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#070A12",
                  fontFamily: "Cinzel, serif",
                  boxShadow: "0 0 12px rgba(201,166,106,0.4)",
                }}
              >
                M
              </div>
              <span
                className="cinzel"
                style={{
                  color: "#F2F4F7",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.1em",
                }}
              >
                MH EMPIRE
              </span>
            </div>
            <p
              style={{
                color: "#A6ACB6",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                fontFamily: "Inter, sans-serif",
                maxWidth: 240,
              }}
            >
              Architects of immersive digital realities. Crafting the future,
              one dimension at a time.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  color: "#F2F4F7",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {col.title}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {col.links.map((link) => (
                  <FooterLink key={link} style={linkStyle}>
                    {link}
                  </FooterLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "rgba(166,172,182,0.5)",
              fontSize: "0.75rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            &copy; {year} MH Empire. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(166,172,182,0.4)",
              fontSize: "0.75rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Built with &hearts; using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C9A66A", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  children,
  style,
}: { children: React.ReactNode; style: React.CSSProperties }) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#E7C989";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#A6ACB6";
  };
  return (
    <span
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
