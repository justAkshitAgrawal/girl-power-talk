import React from "react";

function Partners() {
  const items = [
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="w-20 h-20 lg:w-40 lg:h-40"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="hidden w-20 h-20 lg:w-40 lg:h-40 lg:flex"
    />,
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      alt=""
      className="hidden w-20 h-20 lg:w-40 lg:h-40 lg:flex"
    />,
  ];
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-lg text-white uppercase lg:text-4xl">Our Partners</h1>
      <div className="grid grid-cols-3 mt-5 gap-x-10 lg:gap-x-80 lg:gap-y-10 lg:grid-cols-4">
        {items.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default Partners;
