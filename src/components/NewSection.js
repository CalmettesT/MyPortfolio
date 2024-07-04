import React, { useState, useEffect, useRef } from "react";

const NewSection = ({ image, title }) => {
  const [isOverlapping, setIsOverlapping] = useState(false);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && titleRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const titleRect = titleRef.current.getBoundingClientRect();

        // Vérifiez si le titre chevauche l'image
        const isOverlappingNow = (
          titleRect.bottom > imageRect.top &&
          titleRect.top < imageRect.bottom &&
          titleRect.right > imageRect.left &&
          titleRect.left < imageRect.right
        );

        setIsOverlapping(isOverlappingNow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérification initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div data-scroll data-scroll-speed="-1" className="mt-[40vh] mb-20">
        <div
          ref={imageRef}
          className="absolute h-[40vh] w-[80vw] sm:h-[50vh] sm:w-[50vh] mx-[50%] -translate-x-1/2 grayscale transition duration-[1.5s] hover:grayscale-[10%] bg-cover bg-top"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div data-scroll data-scroll-speed="2" className="h2-wrapper mix-blend-exclusion pt-[15vh] mb-[40vh]">
        <h2
          ref={titleRef}
          className={`text-center text-4xl sm:text-6xl md:text-9xl font-bold transition-colors duration-500 ${
            isOverlapping ? 'text-gray-400' : 'text-black'
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewSection;
