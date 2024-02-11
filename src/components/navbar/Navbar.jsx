import React from "react";
import { FaPhone, FaLinkedin, FaHome, FaInfo, FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="md:flex md:justify-evenly lg:py-5 py-5  shadow-lg shadow-blue-600/50 md:shadow-xl md:shadow-blue-500/50">
        <div className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 ">
          <FaHome size="1.5em " />
          <a className="text-center  font-bold px-4 lg:text-lg text-sm ">
            Home
          </a>
        </div>
        <div className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 ">
          <FaInfo size="1.3em " />
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            About
          </a>
        </div>
        <div className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 ">
          <GiSkills size="1.5em " />
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Skills
          </a>
        </div>
        <div className="flex hover:animate-pulse animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 ">
          <FaLinkedin size="1.4em " />
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Connect
          </a>
        </div>
        <div className="flex hover:animate-pulse  animate__animated animate__flip cursor-pointer px-6 lg:px-0 py-2 lg:py-0 ">
          <FaPhone size="1.2em " />
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Contact
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
