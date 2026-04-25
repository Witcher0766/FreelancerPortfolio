import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "5rem clamp(1rem, 5vw, 3rem)",
        background: "rgba(99,102,241,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <div style={{
            display: "inline-block",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#10b981",
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.25)",
            padding: "5px 14px",
            borderRadius: 99,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}>
            ● Available for Work
          </div>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            margin: "0 0 1.25rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}>
            In Need of a Designer<br />or Developer?
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#64748b",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}>
            I'm currently available for freelance work and full-time roles.
            Have a project in mind or want to collaborate? Let's talk.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="mailto:kumarvishwajeet076@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#f1f5f9",
                background: "#6366f1",
                padding: "13px 30px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#4f46e5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Send a Message
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
                padding: "12px 30px",
                borderRadius: 10,
                textDecoration: "none",
                border: "1.5px solid rgba(16,185,129,0.4)",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.background = "rgba(16,185,129,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Hire on Upwork
            </a>
          </div>

          {/* Contact Details */}
          <div style={{
            display: "flex",
            gap: "2.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#475569", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                Phone
              </div>
              <a
                href="tel:+917070761869"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                +91 7070761869
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#475569", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                Email
              </div>
              <a
                href="mailto:kumarvishwajeet076@gmail.com"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                kumarvishwajeet076@gmail.com
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#475569", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                Country
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#94a3b8" }}>India 🇮🇳</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;