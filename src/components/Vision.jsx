import React from "react";
import { GoTelescope } from "react-icons/go";
import vision from "../media/vision.png";

function Vision() {
  return (
    <>
      <div className="flex flex-col lg:hidden ">
        <div className="flex flex-col items-start mx-3 bg-[url('https://i.ibb.co/gScdFDL/Group-132-1-min.png')] mt-10 bg-center bg-cover rounded-md">
          <div className="p-2 rounded-md bg-black/80">
            <h1 className="mt-2 text-xl text-white uppercase ">Vision</h1>
            <h1 className="pt-24 mt-5 text-sm leading-relaxed text-white">
              Girl Power Talk is passionate about elevating young women to
              become global leaders who are recognized for their myriad of
              talents and contributions. We believe that through education,
              opportunity, and the support of empathetic male allies, girls and
              women will advance beyond gender roles, aspire to new levels of
              achievement and reshape our society. Through our innovative
              ecosystem, we are changing the world of work for the better and
              providing all voices equal weight in a new narrative defining the
              future.
            </h1>
          </div>
        </div>
        <button className="self-end mt-2 mr-5 text-pink-700 first-letter">
          Read More...
        </button>
      </div>
      <div className="justify-center hidden px-40 mt-20 mr-80 lg:flex ">
        <img
          src="https://i.ibb.co/gScdFDL/Group-132-1-min.png"
          className="rounded-xl h-[50vh] mr-16"
          alt=""
        />
        <div className="p-5 bg-black rounded-xl">
          <h1 className="flex items-center mt-2 space-x-3 text-xl text-white uppercase">
            <GoTelescope />
            <span>Vision</span>
          </h1>
          <h1 className="pt-10 mt-2 text-sm leading-relaxed text-white lg:text-lg lg:max-w-[20vw]">
            Girl Power Talk is passionate about elevating young women to become
            global leaders who are recognized for their myriad of talents and
            contributions. We believe that through education, opportunity, and
            the support of empathetic male allies, girls and women will advance
            beyond gender roles, aspire to new levels of achievement and reshape
            our society. Through our innovative ecosystem, we are changing the
            world of work for the better and providing all voices equal weight
            in a new narrative defining the future.
          </h1>
          <button className="mt-6 mr-4 text-pink-700 first-letter">
            Read More...
          </button>
        </div>
        <img
          src={vision}
          alt=""
          className="h-[30vh] -ml-6 mt-5 hover:scale-110 transition-all hover:-ml-4"
        />
      </div>
    </>
  );
}

export default Vision;
