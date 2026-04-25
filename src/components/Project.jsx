import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../utils/projectsData";

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="rounded-3xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-2xl border border-white/60 dark:border-gray-700/60 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Image */}
    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-gray-900 font-bold rounded-full text-xs shadow-lg hover:scale-105 transition-transform"
          >
            View Live →
          </a>
        )}
      </div>
      {/* Top tag */}
      <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 shadow">
        Project
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3
        className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {project.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
        >
          View Project
          <span className="text-base">→</span>
        </a>
      )}
    </div>
  </motion.div>
);

const Project = () => {
  return (
    <section
      className="relative py-28 overflow-hidden bg-white dark:bg-gray-900"
      id="projects"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />

      {/* Decorative shapes */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            Portfolio
          </motion.span>
          <h2
            className="text-5xl font-black text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Real-world apps, dashboards, and tools built with modern stacks.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-14"
            style={{ "--swiper-navigation-color": "#2563eb", "--swiper-pagination-color": "#2563eb" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} style={{ height: "auto", display: "flex" }}>
                <div style={{ width: "100%", display: "flex" }}>
                  <ProjectCard project={project} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;