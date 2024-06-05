import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="my-6 ">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl">
          Experience
        </h1>
      </div>
      <div className="grid md:grid-cols-2 h-fit grid-rows-1 font-cursive">
        <div className="col-span-1 md:border-r-2 border-black">
          <div className="border-t-4 border-black border-dotted   my-8 p-6">
            <h1 className="sm:text-left text-xl font-bold text-center">
              Zeikh Technologies
            </h1>
            <p className="text-center p-3 font-light">Nov 2023 - Jan 2024</p>
            <p className="text-center p-3 font-semibold ">
              React Developer (Frontend Intern)
            </p>
            <div className="text-center p-3 hover:font-bold">
              <ul>
                <li>
                  📚 Contributed to an shef website, focusing on UI design and
                  development. 🚀
                </li>
                <li>💻 Developed streamlined code segments. ✨</li>
                <li>
                  🤝 Enhanced collaboration to ensure the timely delivery of
                  top-notch applications, fostering improved teamwork and
                  communication.🤗
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:border-l-2 border-black h-fit">
          <div className="border-t-4 border-black border-dotted md:mt-[8rem] p-6 ">
            <h1 className="text-left text-xl font-bold ">Codistal Tech</h1>
            <p className="text-center p-3 font-light">
              Feburary 2024 - June 2024
            </p>
            <p className="text-center p-3 font-semibold  font-cursive">
              Next.js Developer
            </p>
            <div className="text-center p-3 hover:font-bold">
              <ul>
                <li>
                  📝 Contributed to the development and data handling of a
                  restaurant food order app 🌟
                </li>
                <li>
                  💻 Implemented user-friendly and visually appealing interfaces
                  to enhance user experience. 🎨
                </li>
                <li>
                  🤝 Collaborated with the team to ensure the seamless
                  integration of UI components into the web app. 🤗
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Experience;
