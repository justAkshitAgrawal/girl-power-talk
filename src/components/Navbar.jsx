import React from "react";
import logo from "../media/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Navbar({ setMenu }) {
  return (
    <>
      <div className="flex items-center justify-between px-2 lg:px-10 lg:py-4">
        <img src={logo} alt="" className=" w-[20%] lg:w-[5%] cursor-pointer" />
        <HiOutlineMenuAlt4
          className="w-8 h-8 text-gray-400 lg:hidden "
          onClick={() => {
            setMenu(true);
          }}
        />
        <div className="hidden text-lg text-white lg:flex gap-x-10">
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
          <button className="p-2 transition-all bg-pink-700 rounded-lg hover:bg-pink-700/70">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
