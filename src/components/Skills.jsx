import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = {
  Frontend: ["Angular", "React", "React Native", "Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"],
  Backend: ["Spring Boot", "Node.js", "Express.js", "WebSocket", "REST APIs", "Microservices", "RBAC"],
  Mobile: ["Flutter", "Dart", "Android", "FCM Push Notifications", "Riverpod", "Hive"],
  "DB & Cloud": ["MongoDB", "MySQL", "Redis", "AWS S3", "AWS CDN", "Docker", "Firebase"],
  "AI & Tools": ["Ollama", "Mistral", "ChatGPT API", "Google Translation API", "Git", "Figma", "Postman", "Linux (Ubuntu)"],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      style={{
        padding: "5rem clamp(1rem, 5vw, 3rem)",
        background: "rgba(99,102,241,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section Title */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "-0.03em" }}>
            Skills & Technologies
          </h2>
          <div style={{ width: 48, height: 3, background: "#6366f1", margin: "12px auto 0", borderRadius: 99 }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748b", marginTop: "1rem" }}>
            Technologies I work with across web, mobile, cloud & AI.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {Object.keys(skills).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: selectedCategory === cat ? "#f1f5f9" : "#475569",
                background: selectedCategory === cat ? "#6366f1" : "rgba(255,255,255,0.03)",
                border: `1px solid ${selectedCategory === cat ? "#6366f1" : "rgba(255,255,255,0.07)"}`,
                padding: "8px 18px",
                borderRadius: 99,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.color = "#94a3b8";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "#475569";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              minHeight: 120,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {skills[selectedCategory].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#c7d2fe",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  padding: "10px 20px",
                  borderRadius: 10,
                  transition: "background 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.25)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;