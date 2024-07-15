import React from "react";
import { FaPhone, FaLinkedin, FaHome, FaInfo, FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkedInLink = "https://www.linkedin.com/in/abuzar-yaseen/";
  const cv =
    "https://drive.google.com/file/d/1gM6ZwBBT0T9_pxtJ3gq5b8MnRgbDJtrY/view?usp=sharing";

  return (
    <>
      <nav className="md:sticky top-0 bg-transparent z-10 backdrop-blur">
        <ul className="sm:flex-wrap md:flex md:justify-evenly lg:py-5 py-5 shadow-lg shadow-blue-600/50 md:shadow-xl md:shadow-blue-500/50">
          <li
            className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out hover:text-blue-600"
            onClick={() => scrollTo("home")}
          >
            <FaHome size="1.5em" />
            <span className="text-center font-bold px-4 lg:text-lg text-sm">
              Home
            </span>
          </li>

          <li
            className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out hover:text-blue-600"
            onClick={() => scrollTo("about")}
          >
            <FaInfo size="1.3em" />
            <span className="text-center lg:px-2 font-bold px-4 lg:text-lg text-sm">
              About
            </span>
          </li>

          <li
            className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out hover:text-blue-600"
            onClick={() => scrollTo("skills")}
          >
            <GiSkills size="1.5em" />
            <span className="text-center lg:px-2 font-bold px-4 lg:text-lg text-sm">
              Skills
            </span>
          </li>

          <li
            className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out hover:text-blue-600"
            onClick={() => scrollTo("contact")}
          >
            <FaPhone size="1.2em" />
            <span className="text-center lg:px-2 font-bold px-4 lg:text-lg text-sm">
              Contact
            </span>
          </li>

          <li
            className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out hover:text-blue-600"
            onClick={() => window.open(linkedInLink, "_blank")}
          >
            <FaLinkedin size="1.4em" />
            <span className="text-center lg:px-2 font-bold px-4 lg:text-lg text-sm">
              Connect
            </span>
          </li>

          <li
            onClick={() => window.open(cv, "_blank")}
            className="flex hover: cursor-pointer px-6 lg:px-0 py-2 lg:py-0  lg:flex"
          >
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-black hover:text-sky-300 lg:py-0 zoom-image hover:scale-110 transition duration-300 ease-in-out"
            >
              Download My Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
