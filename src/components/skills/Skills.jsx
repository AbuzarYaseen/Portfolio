import React from "react";
import c from "../../assets/cPlusPlus.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import next from "../../assets/nextjs.png";
import mongo from "../../assets/mongo-db.png";
import firebase from "../../assets/firebase.png";
import flutter from "../../assets/flutter.png";
import git from "../../assets/git.png";
import dart from "../../assets/dart.png";

const Skills = () => {
  return (
    <section id="skills" className="my-10">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl">
          My Skills
        </h1>
      </div>

      <div className="grid lg:grid-cols-5 xl:grid-cols-8 grid-cols-2 s:grid-cols-2 md:grid-cols-4 lg:gap-3 grid-rows-1 sm:gap-5 gap-2 items-center justify-center mx-16">
        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={c} />
          <span className="flex justify-center items-center">C++</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={html} />
          <span className="flex justify-center items-center">HTML</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4  rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={css} />
          <span className="flex justify-center items-center">CSS</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={js} />
          <span className="flex justify-center items-center">JavaScript</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={bootstrap} />
          <span className="flex justify-center items-center">Bootstrap</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={tailwind} />
          <span className="flex justify-center items-center">Tailwind</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={react} />
          <span className="flex justify-center items-center">React.js</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={next} />
          <span className="flex justify-center items-center">Next.js</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={mongo} />
          <span className="flex justify-center items-center">Mongo DB</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={git} />
          <span className="flex justify-center items-center">Git</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={firebase} />
          <span className="flex justify-center items-center">Firebase</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={flutter} />
          <span className="flex justify-center items-center">Flutter</span>
        </div>

        <div className="lg:col-span-1 p-5  border-blue-500 border-4 rounded-tl-3xl rounded-br-3xl h-full w-full bg-gray-500 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src={dart} />
          <span className="flex justify-center items-center">Dart</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
