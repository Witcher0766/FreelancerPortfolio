import React, { useState } from "react";
import { motion } from "framer-motion";

const experience = [
    {
        company: "Schoyo Technologies LLP",
        role: "Software Development Engineer",
        period: "December 2023 – Present",
        location: "India",
        highlights: [
            "Engineered and deployed 10+ scalable ERP modules using Angular, Spring Boot, and Flutter; the platform currently serves 18,000+ active users across 3 organizational tiers.",
            "Architected a cross-platform Android application in Flutter with 5,000+ installs on Google Play, featuring FCM Push Notifications, Hive offline storage, and Riverpod state management; achieved a 4.2-star rating.",
            "Developed a microservice-based CDN pipeline for dynamic document generation using Thymeleaf and AWS CDN, improving load performance by 40% and reducing server-side rendering time by 25%.",
            "Configured real-time WebSocket communication via Spring Boot across Angular and Flutter clients, enabling sub-100ms bidirectional updates for 1,000+ concurrent sessions with zero polling overhead.",
            "Enforced Role-Based Access Control (RBAC) across a core ERP module, managing granular permissions over 8+ configurable roles and 40+ discrete permission nodes spanning multiple organizational hierarchies.",
            "Automated multilingual workflows via Google Translation API and an internal LLM assistant (Ollama, Mistral), cutting localization effort by ~50% and repetitive data-entry tasks by 30%.",
            "Designed a JSON-to-code scaffolding framework converting data models into production-ready frontend, backend, and Android modules, reducing feature delivery time by 35% across a 6-person team.",
            "Oversaw 15+ Android releases on Google Play Console and conducted 200+ peer code reviews, reducing post-release bugs by 20% and raising team-wide adherence to coding standards.",
        ],
        tags: ["Angular", "Spring Boot", "Flutter", "AWS", "WebSocket", "RBAC", "Redis", "LLM"],
    },
];

const WorkExperience = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <section id="experience" style={{ padding: "5rem clamp(1rem, 5vw, 3rem)" }}>
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
                        Work Experience
                    </h2>
                    <div style={{ width: 48, height: 3, background: "#f59e0b", margin: "12px auto 0", borderRadius: 99 }} />
                </motion.div>

                {experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderLeft: "3px solid #6366f1",
                            borderRadius: 20,
                            padding: "clamp(1.5rem, 4vw, 2.5rem)",
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            <div>
                                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
                                    {exp.role}
                                </h3>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#6366f1", fontWeight: 600, marginTop: 4 }}>
                                    {exp.company}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
                                <span style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#94a3b8",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    padding: "5px 14px",
                                    borderRadius: 99,
                                }}>
                                    {exp.period}
                                </span>
                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#475569" }}>
                                    📍 {exp.location}
                                </span>
                            </div>
                        </div>

                        {/* Tech tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                            {exp.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "0.72rem",
                                        fontWeight: 500,
                                        color: "#6366f1",
                                        background: "rgba(99,102,241,0.1)",
                                        border: "1px solid rgba(99,102,241,0.2)",
                                        padding: "3px 10px",
                                        borderRadius: 6,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Highlights grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "0.75rem",
                        }}>
                            {exp.highlights.map((h, j) => (
                                <div key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                    <span style={{ color: "#6366f1", fontSize: "0.9rem", flexShrink: 0, marginTop: 3 }}>▸</span>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#64748b", margin: 0, lineHeight: 1.65 }}>
                                        {h}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;