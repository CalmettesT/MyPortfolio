import React from "react";

const NewSection = ({ image, title }) => {
  return (
    <div className="relative">
      <div data-scroll data-scroll-speed="-1" className="img1-wrapper mt-[40vh] mb-20">
        <div
          className="absolute h-[40vh] w-[80vw] sm:h-[50vh] sm:w-[50vh] mx-[50%] -translate-x-1/2 grayscale transition duration-[1.5s] hover:grayscale-[10%] bg-cover bg-top"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div data-scroll data-scroll-speed="2" className="h2-wrapper mix-blend-exclusion pt-[15vh] mb-[40vh]">
        <h2 className="text-center text-4xl sm:text-6xl md:text-9xl text-gray-300 font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewSection;
