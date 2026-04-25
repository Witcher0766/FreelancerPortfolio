import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" style={{ padding: "5rem clamp(1rem, 5vw, 3rem)" }}>
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
                        About Me
                    </h2>
                    <div style={{ width: 48, height: 3, background: "#10b981", margin: "12px auto 0", borderRadius: 99 }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 20,
                        padding: "clamp(1.5rem, 4vw, 2.5rem)",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2.5rem",
                    }}
                >
                    {/* Professional Summary */}
                    <div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
                            Professional Summary
                        </h3>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748b", lineHeight: 1.75 }}>
                            Software Development Engineer with 2+ years delivering scalable full-stack, Android, and ERP applications. Proficient in Angular, Spring Boot, Flutter, React, React Native, and Node.js with expertise in REST API design, WebSocket integration, and RBAC.
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748b", lineHeight: 1.75, marginTop: "0.75rem" }}>
                            Shipped an ERP platform serving{" "}
                            <span style={{ color: "#10b981", fontWeight: 600 }}>18,000+ users</span>, an Android app with{" "}
                            <span style={{ color: "#10b981", fontWeight: 600 }}>5,000+ installs</span>, and cut feature delivery time by{" "}
                            <span style={{ color: "#10b981", fontWeight: 600 }}>35%</span>{" "}
                            via a JSON-to-code scaffolding framework.
                        </p>
                    </div>

                    {/* Education + Languages */}
                    <div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
                            Education
                        </h3>
                        <div style={{
                            background: "rgba(99,102,241,0.08)",
                            border: "1px solid rgba(99,102,241,0.2)",
                            borderRadius: 12,
                            padding: "1.25rem",
                            marginBottom: "1.75rem",
                        }}>
                            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#f1f5f9" }}>
                                B.Tech — Computer Science
                            </div>
                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6366f1", marginTop: 4 }}>
                                College of Engineering Roorkee
                            </div>
                            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#475569", marginTop: 4 }}>
                                2020 – 2024 · Roorkee, Uttarakhand
                            </div>
                        </div>

                        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Languages
                        </h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {["TypeScript", "JavaScript", "Java", "Dart", "HTML", "CSS"].map((l) => (
                                <span
                                    key={l}
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.8rem",
                                        fontWeight: 500,
                                        color: "#94a3b8",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        padding: "4px 12px",
                                        borderRadius: 99,
                                    }}
                                >
                                    {l}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;