import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import project images
import project4 from "../assets/project-1.jpg";
import project5 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project1 from "../assets/project-4.JPG";
import project2 from "../assets/project-5.JPG";

const Project = () => {
  const projects = [
    { src: project1, alt: "Project 1" },
    { src: project2, alt: "Project 2" },
    { src: project3, alt: "Project 3" },
    { src: project4, alt: "Project 4" },
    { src: project5, alt: "Project 5" },
  ];

  return (
    <div className="border-t border-b border-gray-300 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" id="projects">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          className="flex flex-col justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-center text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent dark:text-white mb-6">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 font-semibold text-xl md:text-2xl">
            Prototypes, Digital Products (Apps, Websites, SaaS solutions) <br /> and
            design systems which are visually pleasing, <br /> user-centric and easy to
            use.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full h-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <img
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    src={project.src}
                    alt={project.alt}
                  />
                  {/* <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {project.alt}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Description of the project goes here.
                    </p>
                  </div> */}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;