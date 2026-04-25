import React from "react";
import { motion } from "framer-motion";

const capabilityData = [
  {
    title: "Full Stack Dev",
    icon: "⚡",
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    items: [
      "React, Angular, Next.js",
      "Spring Boot & Node.js APIs",
      "WebSocket Real-Time Systems",
      "Microservices & RBAC",
      "REST API Design",
      "ERP Platform Engineering",
    ],
  },
  {
    title: "Mobile & Cloud",
    icon: "📱",
    gradient: "from-violet-500 to-blue-500",
    glow: "shadow-violet-500/20",
    items: [
      "Flutter Cross-Platform Apps",
      "React Native (iOS & Android)",
      "FCM Push Notifications",
      "AWS S3 & CDN Pipelines",
      "Docker Containerization",
      "Google Play Console",
      "Firebase Integration",
    ],
    featured: true,
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    items: [
      "ChatGPT API Integration",
      "Ollama & Mistral (Local LLM)",
      "Google Translation API",
      "JSON-to-Code Scaffolding",
      "Multilingual Automation",
      "Document Generation CDN",
    ],
  },
];

const CapabilityCard = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`relative group rounded-3xl overflow-hidden ${data.featured ? "md:-mt-4 md:mb-4" : ""
      }`}
  >
    {/* Card background */}
    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/60 rounded-3xl p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-500">
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${data.gradient}`} />

      {/* Icon badge */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-2xl shadow-lg ${data.glow} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        {data.icon}
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-black text-center mb-6 bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {data.title}
      </h3>

      {/* Items */}
      <ul className="space-y-3">
        {data.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + i * 0.06 }}
            className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm font-medium"
          >
            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${data.gradient} flex-shrink-0`} />
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Subtle corner decoration */}
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${data.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
    </div>
  </motion.div>
);

const Capability = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      id="capabilities"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f0fdf4 100%)",
      }}
    >
      {/* Dark mode override */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:opacity-100 opacity-0" />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent dark:via-green-700" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            What I Do
          </motion.span>
          <h2
            className="text-5xl font-black text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            2+ years shipping production-grade systems — from ERP platforms to AI-powered apps — across web, mobile, and cloud.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {capabilityData.map((data, index) => (
            <CapabilityCard key={data.title} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capability;