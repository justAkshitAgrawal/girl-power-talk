import React from "react";
import logo from "../media/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col items-center px-3 pt-4 mt-10 space-y-4 border-t-2 lg:mt-20 lg:pt-10 lg:space-y-8">
      <img src={logo} alt="" className="w-[20%] lg:w-[5%]" />
      <h1 className="mt-2 text-sm text-center text-white lg:text-lg ">
        “One girl empowers another. Let's change lives together: one girl, one
        woman and one human being at a time.”
      </h1>
      <h1 className="flex items-center space-x-3 text-sm text-white lg:text-lg">
        <FaPhoneAlt />
        <a href="tel:+917973931882" className="hover:text-pink-700">
          +91 7973931882
        </a>
      </h1>
      <h1 className="flex items-center space-x-3 text-sm text-white lg:text-lg">
        <MdEmail />
        <a href="mailto:info@girlpowertalk.com" className="hover:text-pink-700">
          info@girlpowertalk.com
        </a>
      </h1>
      <div className="flex space-x-5">
        <FaFacebook className="w-5 h-5 text-white lg:w-8 lg:h-8 hover:text-pink-700" />
        <FaInstagram className="w-5 h-5 text-white lg:w-8 lg:h-8 hover:text-pink-700" />
        <FaTwitter className="w-5 h-5 text-white lg:w-8 lg:h-8 hover:text-pink-700" />
        <FaLinkedinIn className="w-5 h-5 text-white lg:w-8 lg:h-8 hover:text-pink-700" />
        <FaYoutube className="w-5 h-5 text-white lg:w-8 lg:h-8 hover:text-pink-700" />
      </div>
      <h1 className="pt-5 text-white lg:text-lg">
        GIRL POWER TALK | © COPYRIGHT 2022
      </h1>
    </div>
  );
}

export default Footer;
