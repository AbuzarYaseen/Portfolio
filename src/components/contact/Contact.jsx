import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Swal from "sweetalert2";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      formValid = false;
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      formValid = false;
      newErrors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      formValid = false;
      newErrors.email = "Invalid email format";
    }

    if (formData.message.trim() === "") {
      formValid = false;
      newErrors.message = "Message is required";
    }

    if (formValid) {
      // Submit the form or perform other actions here
    } else {
      setErrors(newErrors);
    }
  };
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sub = () => {
    axios
      .post(
        "https://getform.io/f/66ff5751-f621-457f-8066-bb3869ef380e",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { headers: { Accept: "application/json" } }
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire("Success!", "Form has been submitted", "success").then(
            () => {
              resetForm();
              window.location.reload();
            }
          );
        }
      })
      .catch((error) => console.error(error));
  };

  const WhatsApp = "https://web.whatsapp.com/";

  return (
    <section id="contact" className="my-4 h-full w-full">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[22px] md:text-[28px] lg:text-[32px] md:mt-6 lg:mt-10 mt-3 md:mb-6 mb-0 lg:mb-12  py-2 px-4 text-black border border-blue-600 w-fit rounded-tl-3xl rounded-br-3xl">
          Contact Me
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-2 mx-7 mb-10">
        <div className=" md:mt-10 mt-0">
          <div
            className="w-full mt-20 px-8   py-10 
              bg-clip-padding backdrop-blur-sm bg-opacity-10 bg-white  "
          >
            <h2 className="mb-6 text-[26px]  font-bold  text-dark sm:text-[40px] lg:text-[26px] xl:text-[30px] ">
              Feel free to reach out to me...
            </h2>
            <p className="text-base leading-relaxed mb-9 text-body-color">
              Hi there! Whether you're considering a project, interested in
              teaming up, or simply want to drop a friendly message, I'm all
              ears. Don't hesitate to get in touch using the contact form
              provided or any of the alternative contact options available.
            </p>
            <div className="mb-8 flex w-full max-w-[370px] ">
              <div className="mb-8 flex w-full max-w-[370px] ">
                <a
                  href="mailto:abuzaryaseen88@gmail.com"
                  className="w-full hover:text-blue-500 zoom-image hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                >
                  <h4 className="mb-1 text-xl font-bold text-dark flex gap-2 items-center ">
                    <SiMinutemailer />
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    abuzaryaseen88@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="mb-8 flex w-full max-w-[370px] ">
              <div className="w-full cursor-pointer hover:font-bold hover:text-blue-500 zoom-image hover:scale-110 transition duration-300 ease-in-out ">
                <ul onClick={() => window.open(WhatsApp, "_blank")}>
                  <h4 className="mb-1 text-xl font-bold text-dark flex gap-2 items-center">
                    {" "}
                    <FaWhatsapp />
                    WhatsApp
                  </h4>

                  <p className="text-base text-body-color">+92 305 4664830</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:mt-10 mt-0">
          <form
            action="https://getform.io/f/66ff5751-f621-457f-8066-bb3869ef380e"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full mt-20 px-8   py-10 
              bg-clip-padding backdrop-blur-sm bg-opacity-10 bg-blue-300 shadow-xl shadow-blue-700 rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                required
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 p-2 border w-full rounded-md"
              ></textarea>
            </div>
            <div className="grid justify-center">
              <button
                type="submit"
                onClick={sub}
                className="bg-[#050a13] text-white px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
