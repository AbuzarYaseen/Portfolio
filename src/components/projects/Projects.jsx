import React from "react";

const Projects = () => {
  const megaMart = "https://mega-mart-qkjs.vercel.app/";
  const flagProject = "https://flag-project-delta.vercel.app/";
  const DxO = "https://dx-o-shop-e-books.vercel.app/";
  const BMI = "https://github.com/AbuzarYaseen/BMI-Calculator";
  const weatherApp = "https://github.com/AbuzarYaseen/weather-app";

  return (
    <section id="projects" className="my-6 ">
      <div className="grid justify-center text-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl">
          My Projects
        </h1>
      </div>
      <ul className="grid lg:grid-cols-5  text-center grid-rows-1 gap-5 mx-16 lg:gap-2 lg:h-20">
        <li
          className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer"
          onClick={() => window.open(megaMart, "_blank")}
        >
          Mega Mart
        </li>

        <li
          className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer"
          onClick={() => window.open(flagProject, "_blank")}
        >
          Flag Project
        </li>

        <li
          className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer"
          onClick={() => window.open(DxO, "_blank")}
        >
          DxO Shop
        </li>

        <li
          className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer"
          onClick={() => window.open(BMI, "_blank")}
        >
          BMI Calculator
        </li>

        <li
          className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer"
          onClick={() => window.open(weatherApp, "_blank")}
        >
          Weather App
        </li>
      </ul>
    </section>
  );
};

export default Projects;
