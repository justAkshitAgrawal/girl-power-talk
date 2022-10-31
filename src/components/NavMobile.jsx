import React from "react";
import logo from "../media/logo.png";
import { AiOutlineClose } from "react-icons/ai";

function NavMobile({ setMenu }) {
  return (
    <div className=" bg-[#1E252B] p-4 font-rubik h-screen flex flex-col items-center px-2 space-y-4">
      <AiOutlineClose
        className="self-end w-8 h-8 text-white"
        onClick={() => {
          setMenu(false);
        }}
      />
      <img src={logo} alt="" className=" w-[20%] lg:w-[5%] cursor-pointer" />
      <div className="flex flex-col items-center pt-20 pb-10 space-y-10 text-lg text-white underline underline-offset-2 gap-x-10">
        <h1 className="p-2 transition-all cursor-pointer hover:text-pink-700">
          About Us
        </h1>
        <h1 className="p-2 transition-all cursor-pointer hover:text-pink-700">
          Our Leaders
        </h1>
        <h1 className="p-2 transition-all cursor-pointer hover:text-pink-700">
          Our Values
        </h1>
        <h1 className="p-2 transition-all cursor-pointer hover:text-pink-700">
          Contact Us
        </h1>
      </div>
      <button className="p-2 mt-4 text-white transition-all bg-pink-700 rounded-lg hover:bg-pink-700/70">
        Apply Now
      </button>
    </div>
  );
}

export default NavMobile;
