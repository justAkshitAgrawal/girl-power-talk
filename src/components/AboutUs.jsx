import React from "react";
import { FiInfo } from "react-icons/fi";
import leader from "../media/leader.png";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col lg:hidden ">
        <div className="flex flex-col items-start mx-3 bg-[url('https://i.ibb.co/GHyFw5d/aboutBg.png')] mt-10 bg-center bg-cover rounded-md">
          <div className="p-2 rounded-md bg-black/80">
            <h1 className="mt-2 text-xl text-white uppercase ">About Us</h1>
            <h1 className="pt-24 mt-5 text-sm leading-relaxed text-white ">
              We believe that achieving true gender equality requires a radical
              shift in the way young women are mentored in the workplace. At
              Girl Power Talk, we are passionately dedicated to empowering
              women-as well as men and nonbinary individuals-with opportunities
              to learn confidently, feel valued, and build a career full of
              purpose. <br />
              <br />
              <span className="italic ">
                “Let's unlock your potential. Welcome to Girl Power Talk.“
              </span>
            </h1>
          </div>
        </div>
        <button className="self-end mt-2 mr-4 text-pink-700 first-letter">
          More About Us...
        </button>
      </div>
      <div className="justify-center hidden px-40 mt-20 ml-40 lg:flex group ">
        <img
          src={leader}
          alt=""
          className=" h-[40vh] place-self-center -mr-10 mb-10 -rotate-12 hover:scale-110 transition-all"
        />
        <div className="z-10 p-5 bg-black rounded-xl">
          <h1 className="flex items-center mt-2 space-x-3 text-xl text-white uppercase ">
            <FiInfo />
            <span>About Us</span>
          </h1>
          <h1 className="pt-10 mt-5 text-sm leading-relaxed text-white lg:text-lg lg:max-w-[20vw]">
            We believe that achieving true gender equality requires a radical
            shift in the way young women are mentored in the workplace. At Girl
            Power Talk, we are passionately dedicated to empowering women-as
            well as men and nonbinary individuals-with opportunities to learn
            confidently, feel valued, and build a career full of purpose. <br />
            <br />
            <span className="italic ">
              “Let's unlock your potential. Welcome to Girl Power Talk.“
            </span>
          </h1>
          <button className="mt-6 mr-4 text-pink-700 first-letter">
            More About Us...
          </button>
        </div>
        <img
          src="https://i.ibb.co/GHyFw5d/aboutBg.png"
          className="rounded-xl h-[50vh] ml-16"
          alt=""
        />
      </div>
    </>
  );
}

export default AboutUs;
