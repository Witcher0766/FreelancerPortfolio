import React from "react";

const Contact = () => {
  return (
    <>
     <div className="border-t border-b border-gray-300">
  <div class="container max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-around items-center h-auto md:h-[45vh]" id="contact">
    <div class="flex flex-col gap-3 text-center md:text-left p-4">
      <p class="text-gray-800 dark:text-white font-bold md:text-4xl text-2xl">
        In need of a designer/developer?
      </p>
      <p class="text-blue-500 md:text-2xl text-lg font-medium">
        I’m currently available for work.
      </p>
      <div className="flex gap-5 pt-2 text-center justify-center md:justify-start">
        <a href="mailto:kumarvishwajeet076@gmail.com" className="sm:px-6 px-4 py-2 text-xs sm:text-lg bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Send a message
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-2 text-center md:text-right p-4">
      <p class="text-gray-600 dark:text-gray-300 text-xl font-semibold">
        Phone: +91 7070761869
      </p>
      <p class="text-gray-600 dark:text-gray-300 text-xl">
        Email: kumarvishwajeet076@gmail.com
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;
