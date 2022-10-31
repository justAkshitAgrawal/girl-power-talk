import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsDashLg } from "react-icons/bs";

function Awards() {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 3 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-24 h-24 lg:w-40 lg:h-40 "
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-24 h-24 ml-4 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-24 h-24 ml-6 lg:w-40 lg:h-40"
    />,
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
        <div className="flex items-center mb-2 space-x-2">
          <BsDashLg className="text-white/60 lg:text-3xl" />
          <h1 className="text-lg text-white uppercase lg:text-4xl">Awards</h1>
          <BsDashLg className="text-white/60 lg:text-3xl" />
        </div>
      </div>
      <div className="lg:ml-[17vw] lg:mt-7">
        <AliceCarousel
          mouseTracking
          disableDotsControls={true}
          items={items}
          disableButtonsControls={true}
          responsive={responsive}
        />
      </div>
    </div>
  );
}

export default Awards;
