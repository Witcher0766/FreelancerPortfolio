import fallbackImage from "../assets/png.png"; // default fallback image
import ParticleConfig from "./config/ParticleConfig";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Profile = () => {
  const gifUrl =
    "https://user-images.githubusercontent.com/74038190/218265814-3084a4ba-809c-4135-afc0-8685d0f634b3.gif";

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 pt-32 md:pt-40 min-h-screen overflow-hidden"
      id="parent-particles"
    >
      <ParticleConfig />

      {/* Text Content */}
      <motion.div
        className="z-10 w-full md:w-3/5 px-4 md:px-10 flex flex-col gap-4 justify-center text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Web & App Developer",
                "Pixel-Perfect UI Enthusiast",
                "Building Scalable Digital Products",
                "Let's Code Something Awesome!",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
              deleteSpeed: 50,
            }}
          />
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 font-medium text-base sm:text-lg md:text-xl mt-2 md:mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I specialize in developing user-centric web and app solutions,
          creating immersive digital experiences that empower individuals and
          brands to achieve their goals through creativity, innovation, and
          cutting-edge technology.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-6"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#projects">
            <button className="px-6 sm:px-8 py-3 text-sm sm:text-lg bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-105">
              View my work
            </button>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0172e5f8e76e258bcb?mp_source=share"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 sm:px-8 py-3 text-sm sm:text-lg bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none transition-all duration-300 transform hover:scale-105">
              Hire me
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="z-10 mt-8 md:mt-0 md:w-2/5 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={gifUrl}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
          alt="Developer working animation"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-lg rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default Profile;
