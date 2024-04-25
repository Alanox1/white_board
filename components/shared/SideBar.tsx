"use client";
import React, { useState } from "react";
import AddTodo from "./AddTodo";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary/70 hover:bg-primary text-white rounded-3xl  p-5 top-0 left-0 right-0 shadow-md">
      <button
        className="m-2 text-center text-2xl"
        onClick={() => setOpen(true)}
      >
        New note
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`${
          open ? "sm:w-4/6  lg:w-2/3 xl:w-1/2" : "w-0"
        } bg-background min-h-screen fixed top-0 right-0 transition-all duration-300 flex justify-center `}
      >
        <div className={`${!open && "hidden"} pt-3 flex justify-around`}>
          <AddTodo changeOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
