import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Users Served", value: "18K+" },
  { label: "App Installs", value: "5K+" },
  { label: "Faster Delivery", value: "35%" },
  { label: "Code Reviews", value: "200+" },
];

const Profile = () => {
  const [title, setTitle] = useState("");
  const titles = ["Full Stack Developer", "Android Engineer", "ERP Architect", "AI Integrations"];
  const tidx = useRef(0);
  const cidx = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    let t;
    const tick = () => {
      const cur = titles[tidx.current];
      if (!del.current) {
        setTitle(cur.slice(0, cidx.current + 1));
        cidx.current++;
        if (cidx.current === cur.length) {
          del.current = true;
          t = setTimeout(tick, 1800);
          return;
        }
      } else {
        setTitle(cur.slice(0, cidx.current - 1));
        cidx.current--;
        if (cidx.current === 0) {
          del.current = false;
          tidx.current = (tidx.current + 1) % titles.length;
        }
      }
      t = setTimeout(tick, del.current ? 45 : 95);
    };
    t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem clamp(1rem, 5vw, 3rem) 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#6366f1",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Software Development Engineer · 2+ Years
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              color: "#f1f5f9",
              margin: "0 0 0.5rem",
              letterSpacing: "-0.04em",
            }}
          >
            Vishwajeet<br />
            <span style={{ color: "#6366f1" }}>Kumar</span>
          </h1>

          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: "1.5rem",
              minHeight: "2.5rem",
            }}
          >
            {title}
            <span style={{ color: "#6366f1", animation: "blink 1s step-end infinite" }}>|</span>
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: "2.5rem",
            }}
          >
            Delivered scalable ERP, Android, and full-stack apps serving{" "}
            <strong style={{ color: "#94a3b8" }}>18,000+ users</strong>. Expert in Angular,
            Spring Boot, Flutter, and AI-powered automation.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a
              href="#projects"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#f1f5f9",
                background: "#6366f1",
                padding: "12px 28px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#4f46e5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View Work →
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0172e5f8e76e258bcb?mp_source=share"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#10b981",
                background: "transparent",
                padding: "11px 28px",
                borderRadius: 10,
                textDecoration: "none",
                border: "1.5px solid rgba(16,185,129,0.4)",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.background = "rgba(16,185,129,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Hire Me on Upwork
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/Witcher0766" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/" },
              { label: "Instagram", href: "https://www.instagram.com/vishwajeet_kr076/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#475569",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#6366f1"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "min(280px, 100%)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="hero-stats"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "1.25rem",
                textAlign: "center",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#6366f1" }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#64748b", marginTop: 4 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Profile;