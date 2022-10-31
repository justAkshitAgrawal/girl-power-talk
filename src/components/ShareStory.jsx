import React from "react";
import talkImg from "../media/storyShare.png";
import talk1 from "../media/story1.png";
import talk2 from "../media/story2.png";
function ShareStory() {
  return (
    <>
      <div className="flex flex-col lg:hidden ">
        <div className="flex flex-col items-start mx-3 mt-10 rounded-md">
          <div className="p-2 bg-pink-700 rounded-md">
            <h1 className="mt-2 text-xl text-white uppercase ">
              Share Your Story With Us
            </h1>
            <h1 className="mt-5 mb-2 text-sm leading-relaxed text-white">
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
          Tell Your Story...
        </button>
      </div>
      <div className="justify-center hidden px-40 mt-20 lg:mb-20 lg:flex">
        <img src={talk1} alt="" className=" h-[35vh] place-self-start" />
        <div className="flex flex-col p-5 bg-pink-700 rounded-xl">
          <h1 className="mt-2 text-xl text-white uppercase ">
            Share Your Story With Us
          </h1>
          <h1 className="pt-10 mt-5 text-sm leading-relaxed text-white lg:text-lg lg:max-w-[20vw]">
            Girl Power Talk is passionate about elevating young women to become
            global leaders who are recognized for their myriad of talents and
            contributions. We believe that through education, opportunity, and
            the support of empathetic male allies, girls and women will advance
            beyond gender roles, aspire to new levels of achievement and reshape
            our society. Through our innovative ecosystem, we are changing the
            world of work for the better and providing all voices equal weight
            in a new narrative defining the future.
          </h1>
          <button className="px-3 py-2 mt-6 mr-4 text-pink-700 transition-all bg-white rounded-lg hover:scale-110 place-self-center first-letter">
            Tell Your Story
          </button>
        </div>
        <img src={talk2} alt="" className=" h-[35vh] place-self-end" />
      </div>
    </>
  );
}

export default ShareStory;
