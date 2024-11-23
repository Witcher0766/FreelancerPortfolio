import React from "react";
import gifImage from "../assets/png.png";
import ParticleConfig from "./config/ParticleConfig";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      {/* <div className="flex flex-col md:flex-row pt-40 items-center md:items-start justify-between md:justify-around max-w-7xl mx-auto p-4  h-auto md:h-[100vh] lg:h-[100vh]  " id="parent-particles">
          <ParticleConfig />
        <div className="md:w-3/5  md:pl-10 p-3 gap-3 flex flex-col justify-center md:text-left text-center md:h-[55vh] lg:h-[55vh]  ">
          <p className="text-gray-500  dark:text-gray-300 font-semibold md:text-2xl sm:text-lg text-lg">
            Hi there, We're Freelancer's
          </p>
          <p className="text-black dark:text-white  font-bold sm:text-2xl md:text-4xl text-2xl">
            UX/UI/Product Designer <br /> & Front-end developer
          </p>
          <p className="text-gray-500 dark:text-gray-300 font-semibold md:text-2xl sm:text-lg text-sm">
            We specialize in designing and developing user-centric digital
            products and immersive experiences, empowering people and brands to
            achieve their goals with creativity and innovation.
          </p>
          <div className="flex gap-5 pt-2 text-center justify-center md:justify-start">
            <button className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              View my work
            </button>
            <a href="#contact">
              <button className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-green-500 text-white font-semibold rounded-3xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Hire Me
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-2/5 mt-4 md:mt-0 flex justify-center h-auto ">
          <img
            src={gifImage}
            alt="Placeholder"
            className="w-full md:w-auto max-w-xs md:max-w-md  object-contain"
          />
        </div>
      </div> */}
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
        <motion.p
          className="text-gray-500 dark:text-gray-300 font-semibold md:text-2xl sm:text-lg text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          
        >
          Hi there, We're Freelancer's
        </motion.p>
        <motion.p
          className="text-black dark:text-white font-bold sm:text-2xl md:text-4xl text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          
        >
          UX/UI/Product Designer <br /> & Front-end developer
        </motion.p>
        <motion.p
          className="text-gray-500 dark:text-gray-300 font-semibold md:text-2xl sm:text-lg text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          
        >
          We specialize in designing and developing user-centric digital products and immersive experiences, empowering people and brands to achieve their goals with creativity and innovation.
        </motion.p>
        <motion.div
          className="flex gap-5 pt-2 text-center justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          
        >
          <button className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            View my work
          </button>
          <a href="#contact">
            <button className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-green-500 text-white font-semibold rounded-3xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Hire Us
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
