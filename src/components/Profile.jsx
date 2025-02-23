import React from "react";
import gifImage from "../assets/png.png";
import ParticleConfig from "./config/ParticleConfig";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <div
      className="flex flex-col md:flex-row pt-40 items-center md:items-start justify-between md:justify-around max-w-7xl mx-auto p-4 h-auto md:h-[100vh] lg:h-[100vh]"
      id="parent-particles"
    >
      <ParticleConfig />
      {/* Text Content */}
      <motion.div
        className="md:w-3/5 md:pl-10 p-3 gap-3 flex flex-col justify-center md:text-left text-center md:h-[55vh] lg:h-[55vh]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
      >
         <motion.h1
          className="text-black dark:text-white font-bold sm:text-3xl md:text-5xl text-2xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          UX/UI/Product Designer <br /> & Front-end Developer
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 font-medium md:text-xl sm:text-lg text-sm mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I am specialize in designing and developing user-centric digital products and immersive experiences, empowering people and brands to achieve their goals with creativity and innovation.
        </motion.p>
        <motion.div
          className="flex gap-5 pt-4 text-center justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects">
            <button className="sm:px-8 px-6 py-3 text-sm sm:text-lg bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              View my work
            </button>
          </a>
          <a href="https://www.upwork.com/freelancers/~0172e5f8e76e258bcb?mp_source=share" target="_blank" rel="noreferrer">
            <button className="sm:px-8 px-6 py-3 text-sm sm:text-lg bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              Hire me
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-2/5 mt-4 md:mt-0 flex justify-center h-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        
      >
        <img
          src={gifImage}
          alt="Placeholder"
          className="w-full md:w-auto max-w-xs md:max-w-md object-contain"
        />
      </motion.div>
    </div>
    </>
  );
};

export default Profile;
