import React from 'react';
import gifImage from '../assets/png.png';

const Profile = () => {

  return (
    <>
           <div className="flex flex-col md:flex-row pt-20 items-center md:items-start justify-between md:justify-around max-w-7xl mx-auto p-4  h-auto md:h-[100vh] lg:h-[100vh]  ">
          <div className="md:w-3/5 md:pl-10 p-3 gap-3 flex flex-col justify-center md:text-left text-center md:h-[55vh] lg:h-[55vh]  ">
            <p className="text-gray-500  font-semibold md:text-xl sm:text-lg text-sm">
              Hi there, I'm Vishwajeet
            </p>
            <p className="text-black  font-bold sm:text-2xl md:text-3xl text-xl">
              UX/UI/Product Designer <br /> & Front-end developer
            </p>
            <p className="text-gray-500 font-semibold md:text-xl sm:text-lg text-sm">
              I help people and brands reach their goals by designing <br></br>{" "}
              & building user-centric digital products and interactive
              experiences
            </p>
            <div className="flex gap-5 pt-2 text-center justify-center md:justify-start">
              <button className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                View my work
              </button>
              <a href="#contact">
              <button  className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-green-500 text-white font-semibold rounded-3xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Hire Me
              </button>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-2/5 mt-4 md:mt-0 flex justify-center h-auto ">
            <img
              src={gifImage}
              alt="Placeholder"
              className="w-full md:w-auto max-w-xs md:max-w-md  object-contain"
            />
          </div>
        </div>
    </>
  )
}

export default Profile