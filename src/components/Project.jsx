import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    name: "PrefAI",
    icon: "🤖",
    accentColor: "#6366f1",
    stack: ["React Native", "Expo", "Redux", "Node.js", "Express.js", "MongoDB", "Stripe", "ChatGPT API", "Google Translation API", "Firebase"],
    description: "Cross-platform AI-powered productivity app for iOS & Android automating personal workflows across scheduling, communication, and document management.",
    highlights: [
      "Invoice chat interface via ChatGPT API — query and summarize invoice data conversationally across multiple languages.",
      "Meeting calendar with custom scheduling, Firebase push notifications, and Stripe Checkout for subscription billing.",
      "Global state managed via Redux Toolkit for seamless multi-screen performance.",
    ],
    link: null,
  },
  {
    name: "MERNMart",
    icon: "🛒",
    accentColor: "#10b981",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "REST API", "PayPal"],
    description: "Full-stack e-commerce platform with JWT authentication, product catalog, shopping cart, and complete order lifecycle management.",
    highlights: [
      "Role-based admin dashboard enabling real-time product, account, and per-order delivery status management.",
      "PayPal gateway integration for secure, scalable checkout flows.",
      "Optimized global state via Redux Toolkit — fully responsive UI across desktop and mobile.",
    ],
    link: null,
  },
];

const Project = () => {
  return (
    <section
      id="projects"
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "-0.03em" }}>
            Projects
          </h2>
          <div style={{ width: 48, height: 3, background: "#10b981", margin: "12px auto 0", borderRadius: 99 }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748b", marginTop: "1rem" }}>
            Real-world apps built with modern full-stack and AI-powered stacks.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            style={{ padding: "1rem 0.5rem 3.5rem" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    padding: "2rem",
                    height: "100%",
                    transition: "border-color 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.accentColor}40`;
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon + Name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "2.25rem" }}>{project.icon}</span>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.68rem",
                          fontWeight: 500,
                          color: project.accentColor,
                          background: `${project.accentColor}18`,
                          border: `1px solid ${project.accentColor}30`,
                          padding: "3px 9px",
                          borderRadius: 6,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {project.highlights.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <span style={{ color: project.accentColor, flexShrink: 0, marginTop: 3, fontSize: "0.7rem" }}>◆</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "1.25rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: project.accentColor,
                        textDecoration: "none",
                      }}
                    >
                      View Project →
                    </a>
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;