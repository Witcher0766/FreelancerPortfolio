import React from "react";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";

import { motion } from "framer-motion";


const Project = () => {
  return (
    <>
    <div className="border-t border-b border-gray-300 py-20" id="projects">
      <div className="max-w-7xl mx-auto p-6" >
        <motion.div
          className="d-flex flex-col justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-10">
            Projects
          </h2>
          <p className="text-center text-gray-600 font-semibold text-2xl">
            Prototypes, Digital Products (Apps, Websites, SaaS solutions) <br /> and
            design systems which are visually pleasing, <br /> user-centric and easy to
            use.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { src: project1, height: '24rem' },
            { src: project2, height: '20rem' },
            { src: project3, height: '24rem' },
            { src: project4, height: '20rem' },
            { src: project5, height: '20rem' },
            { src: project6, height: '20rem' },
            { src: project7, height: '20rem' },

          ].map((project, index) => (
            <motion.div
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/2 max-w-xl rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ height: project.height }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img className="w-full h-full object-cover" src={project.src} alt={`Project ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Project;