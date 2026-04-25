import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Full Stack Web",
    icon: "⚡",
    accentColor: "#6366f1",
    items: [
      "Angular & React SPA Development",
      "Spring Boot REST APIs",
      "WebSocket Real-Time Systems",
      "Microservices Architecture",
      "RBAC Permission Systems",
      "SaaS Platform Solutions",
    ],
  },
  {
    title: "Mobile & Android",
    icon: "📱",
    accentColor: "#10b981",
    items: [
      "Flutter Cross-Platform Apps",
      "FCM Push Notifications",
      "Offline Storage with Hive",
      "Google Play Console Releases",
      "React Native Development",
      "Riverpod State Management",
    ],
  },
  {
    title: "AI Integration",
    icon: "🧠",
    accentColor: "#f59e0b",
    items: [
      "LLM Workflows (Ollama, Mistral)",
      "ChatGPT API Integration",
      "Google Translation API",
      "Automation Pipelines",
      "Multilingual Processing",
      "Conversational Interfaces",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    accentColor: "#06b6d4",
    items: [
      "AWS S3 & CDN Pipelines",
      "Docker Containerization",
      "Firebase Hosting & Auth",
      "Redis Caching",
      "CDN Performance Optimization",
      "Linux (Ubuntu) Server Admin",
    ],
  },
];

const Capability = () => {
  return (
    <section
      id="capabilities"
      style={{
        padding: "5rem clamp(1rem, 5vw, 3rem)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section Title */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "-0.03em" }}>
            Capabilities
          </h2>
          <div style={{ width: 48, height: 3, background: "#6366f1", margin: "12px auto 0", borderRadius: 99 }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748b", marginTop: "1rem" }}>
            I bring ideas to life with creativity, innovation, and expertise.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}>
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "1.75rem",
                transition: "border-color 0.25s, background 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cap.accentColor}40`;
                e.currentTarget.style.background = `${cap.accentColor}08`;
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{cap.icon}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "1rem",
              }}>
                {cap.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {cap.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: cap.accentColor,
                      flexShrink: 0,
                      display: "inline-block",
                    }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#64748b",
                      lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capability;