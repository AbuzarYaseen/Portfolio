import React from "react";
import note from "../../assets/note.jpg";

const Note = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:mt-20 md:visible hidden">
      <div className="col-span-1">
        <img src={note} alt="Note" />
      </div>

      <div className="col-span-1 mt-20">
        <h3 className="text-center md:text-[38px] text-[20px] font-extrabold text-blue-500 md:mt-10  p-6 md:p-0">
          From Beginner to Guide - Starting a Learning Journey Driven by
          Curiosity.
        </h3>
      </div>
    </div>
  );
};

export default Note;
