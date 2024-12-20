import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prev) => {
  //     const newMode = !prev;
  //     localStorage.setItem("darkMode", newMode);
  //     return newMode;
  //   });
  // };

  const handleCheckboxChange = () => {
    setIsDarkMode((prev) => {
      setIsChecked(!isChecked);
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <nav
        className="bg-white bg-opacity-100 dark:bg-gray-900 fixed top-0 w-full z-50 "
        style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
        id="home"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-10">
            <div className="flex items-center">
              <a
                href="#"
                className="text-lg font-extrabold text-blue-500 italic"
              >
                FreeLancer's
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Project
                </a>
                <a
                  href="#capabilities"
                  className="text-gray-400 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Capabilities
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </a>
                <div className="flex items-center">
                  {/* <button
              onClick={toggleDarkMode}
              className="bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 dark:hover:bg-gray-500"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button> */}

                  <label
                    className="relative inline-flex cursor-pointer items-center"
                    aria-label="Toggle Theme"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      style={{ transition: "all 0.3s" }}
                      className={`flex h-[30px] w-[63px] items-center rounded-2xl p-1 bg-yellow-400 dark:bg-gray-700 shadow-card  ${
                        isChecked ? "bg-yellow-400" : "bg-gray-700"
                      }`}
                    >
                      <span
                        style={{ transition: "all 0.3s" }}
                        className={`flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-black  ${
                          isChecked ? "translate-x-[36px]" : "translate-x-0"
                        }`}
                      >
                        {isChecked ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693..."
                              fill="currentColor"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C..."
                              fill="currentColor"
                            ></path>
                          </svg>
                        )}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500  "
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center text-center">
              <a
                href="#"
                className="text-gray-400 dark:text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Project
              </a>
              <a
                href="#capabilities"
                className="text-gray-400 dark:text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="text-gray-400 dark:text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <div className="block px-3 py-2  text-base font-medium">
                <label
                  className="relative inline-flex cursor-pointer items-center"
                  aria-label="Toggle Theme"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    style={{ transition: "all 0.3s" }}
                    className={`flex h-[30px] w-[63px] items-center rounded-2xl p-1 bg-yellow-400 dark:bg-gray-700 shadow-card  ${
                      isChecked ? "bg-yellow-400" : "bg-gray-700"
                    }`}
                  >
                    <span
                      style={{ transition: "all 0.3s" }}
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-black  ${
                        isChecked ? "translate-x-[36px]" : "translate-x-0"
                      }`}
                    >
                      {isChecked ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693..."
                            fill="currentColor"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C..."
                            fill="currentColor"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
