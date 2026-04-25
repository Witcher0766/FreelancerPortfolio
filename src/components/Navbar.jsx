import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Experience", "Projects", "Capabilities", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(9,11,22,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(1rem, 5vw, 3rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "#f1f5f9",
            textDecoration: "none",
            letterSpacing: "-0.04em",
          }}
        >
          VK<span style={{ color: "#6366f1" }}>.</span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#94a3b8",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: 8,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f1f5f9";
                e.target.style.background = "rgba(99,102,241,0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#94a3b8";
                e.target.style.background = "transparent";
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:kumarvishwajeet076@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#f1f5f9",
              textDecoration: "none",
              padding: "7px 18px",
              background: "#6366f1",
              borderRadius: 8,
              marginLeft: 8,
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4f46e5";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6366f1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
            padding: 6,
          }}
          className="nav-hamburger"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            background: "rgba(9,11,22,0.97)",
            borderTop: "1px solid rgba(99,102,241,0.15)",
            padding: "1rem clamp(1rem, 5vw, 3rem)",
          }}
          className="nav-mobile"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#94a3b8",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f1f5f9")}
              onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:kumarvishwajeet076@gmail.com"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f1f5f9",
              textDecoration: "none",
              padding: "9px 22px",
              background: "#6366f1",
              borderRadius: 8,
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;