import React from "react";
import profile from "../../assets/a.jpg";

const Hero = () => {
  return (
    <section id="home">
      <div className="lg:grid lg:grid-cols-2 justify-center">
        <div className="col-span-1 lg:my-9 my-1 mx-20">
          <h1 className="font-bold lg:text-[32px] text-[20px] my-4 animate__animated animate__fadeInDownBig text-center lg:text-left ">
            Hi! I am
          </h1>
          <p className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase  lg:text-7xl text-[19px] lg:text-left font-extrabold my-4  animate__animated animate__slideInLeft">
            <span className="text-sky-500">Abuzar Yaseen</span>
          </p>
          <p className="lg:text-left text-center font-extrabold text-[12px] animate__animated animate__fadeInUpBig sm:text-[20px]">
            A Frontend Web Developer
          </p>
        </div>
        <div className="col-span-1 animate__animated animate__fadeInRight  grid  h-min-fit justify-center">
          <div className="flex justify-center   lg:w-full lg:h-full lg:grid ">
            <img
              src={profile}
              className="h-[80%] self-center rounded-lg"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
