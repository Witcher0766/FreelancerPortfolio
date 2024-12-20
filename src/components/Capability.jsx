import React from "react";
import { motion } from "framer-motion";
const Capability = () => {
  return (
    <>
      <div className="border-t border-b border-gray-300">
      <div className="max-w-7xl mx-auto p-6" id="capabilities">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Capabilities
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* UX/CX Section */}
          <motion.div
            className="p-6 text-center flex-1 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              UX/CX
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              User Experience Design <br /> Rapid Prototyping <br /> Usability
              Testing <br /> UX Reviews <br /> Interaction Design <br /> Customer
              journeys
            </p>
          </motion.div>

          {/* Product Design Section */}
          <motion.div
            className="p-6 text-center flex-1 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Product Design
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              User Interface Design <br />
              Visual Design <br />
              Visual Identities <br />
              Design Systems <br />
              Responsive & Mobile Websites <br />
              Modular Grid Systems <br />
              Brand guidelines <br />
            </p>
          </motion.div>

          {/* Development Section */}
          <motion.div
            className="p-6 text-center flex-1 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Development
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              Front-end development <br />
              Responsive & Mobile Websites <br />
              Mobile apps <br />
              Animations <br />
              SaaS applications <br />
              Platform solutions <br />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Capability;
