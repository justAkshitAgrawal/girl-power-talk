import React from "react";
import woman1 from "../media/woman.png";
import woman2 from "../media/woman2.png";
import woman3 from "../media/woman3.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4 lg:space-y-7">
        <h1 className="tracking-wide text-pink-700 lg:text-2xl">
          #WeAreGirlPowerTalk
        </h1>
        <h1 className="text-4xl font-semibold leading-normal text-center text-white uppercase lg:text-6xl">
          <span className="text-pink-700 ">Girl </span>
          Power <br className=" lg:hidden" /> Talk
        </h1>
        <h1 className="text-center text-white lg:text-xl ">
          Empowering young women, men, and <br />
          nonbinary individuals
        </h1>
        <div className="pt-8 lg:pt-16">
          <img
            src={woman1}
            alt=""
            className="absolute mt-14 h-52 left-2 lg:h-96 lg:left-[26vw] lg:mt-20"
          />
          <img
            src={woman2}
            alt=""
            className="absolute z-10 mt-4 h-52 left-20 animate-bounce-short lg:h-96 lg:left-[37vw]"
          />
          <img
            src={woman3}
            alt=""
            className="absolute mt-14 h-52 right-1 lg:h-96 lg:right-[26vw] lg:mt-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
