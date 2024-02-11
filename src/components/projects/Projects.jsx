import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="my-6 ">
      <div className="grid justify-center text-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl">
          My Projects
        </h1>
      </div>
      <div className="grid lg:grid-cols-5  text-center grid-rows-1 gap-5 mx-16 lg:gap-2 lg:h-20">
        <div className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer">
          Mega Mart
        </div>

        <div className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer">
          Flag Project
        </div>

        <div className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer">
          DxO Shop
        </div>

        <div className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-blue-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer">
          BMI Calculator
        </div>

        <div className="col-span-1 font-bold border-blue-600 px-3 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2 cursor-pointer">
          Weather App
        </div>
      </div>
    </section>
  );
};

export default Projects;
