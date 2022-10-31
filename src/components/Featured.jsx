import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsDashLg } from "react-icons/bs";

function Featured() {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 4 },
    568: { items: 4 },
    1024: { items: 7 },
  };

  const items = [
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-2 space-x-2 lg:space-x-4 lg:mb-10">
          <BsDashLg className="text-white/60 lg:text-3xl" />
          <h1 className="text-lg text-white uppercase lg:text-4xl">
            Featured in
          </h1>
          <BsDashLg className="text-white/60 lg:text-3xl" />
        </div>
      </div>
      <div className=" lg:ml-[3vw]">
        <AliceCarousel
          mouseTracking
          disableDotsControls={true}
          items={items}
          disableButtonsControls={true}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlayInterval={2000}
        />
      </div>
    </div>
  );
}

export default Featured;
