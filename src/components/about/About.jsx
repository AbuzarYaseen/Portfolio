import React from "react";
import pic from "../../assets/pic.jpg";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <section className="my-6 " id="about">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black  border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl border hover:animate-pulse">
          About Me
        </h1>
      </div>
      <div className="grid grid-rows-1 ">
        <div className="row-span-1 grid justify-center rounded-full h-50 w-50 mb-8 ">
          <img src={profile} height={250} width={250} />
        </div>

        <div className="row-span-1 text-center text-[18px] p-6 md:mx-16">
          As a versatile developer with expertise spanning React.js, JavaScript,
          HTML, CSS, Bootstrap, Tailwind CSS, Flutter, Dart, and Firebase, I
          bring a wealth of experience and passion to every project I undertake.
          With a solid foundation in front-end, I thrive on creating seamless
          user experiences and robust, scalable solutions. Whether it's crafting
          pixel-perfect designs, optimizing database performance, or
          architecting complex applications, I approach each challenge with
          creativity, attention to detail, and a relentless drive for
          excellence. My commitment to staying at the forefront of technology
          ensures that I'm always equipped with the latest tools and techniques
          to deliver cutting-edge solutions. Let's collaborate and bring your
          vision to life.
        </div>
      </div>
    </section>
  );
};

export default About;
