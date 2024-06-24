import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


const Header = () => {
  const headerRef = useRef(null);
  const developerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll && developerRef.current) {
      const handleScroll = () => {
        const developerElement = developerRef.current;
        if (developerElement && developerElement.classList.contains('is-inview')) {
          document.body.classList.add('bg-black', 'text-gray-50', 'transition-colors', 'duration-500');
          document.body.classList.remove('bg-gray-50', 'text-black');
        } else {
          document.body.classList.add('bg-gray-50', 'text-black', 'transition-colors', 'duration-500');
          document.body.classList.remove('bg-black', 'text-gray-50');
        }
      };

      scroll.on('scroll', handleScroll);

      // Initial check in case the developer element is already in view
      handleScroll();

      return () => {
        scroll.off('scroll', handleScroll);
      };
    }
  }, [scroll]);

  return (
    <header id="home"ref={headerRef} className="relative h-screen ml-[3vw] pt-[20vh]">
      <div className="wrapper perspective-900">
        <div data-scroll className="appear transition-delay-300" id="h1-wrapper">
          <h1
            data-scroll
            data-scroll-speed="4"
            className="text-[calc(2rem+6.5vw)] mt-[70px]tracking-[6px] text-white font-bold"
          >
            Thomas Calmettes
          </h1>
        </div>
      </div>
      <div data-scroll data-scroll-repeat="true" className="wrapper" ref={developerRef}>
        <div data-scroll className="appear transition-delay-900">
          <h2
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            className="text-[calc(1rem+6vw)] font-bold tracking-wide text-gray-300 text-left font-sans"
          >
            Développeur
          </h2>
        </div>
      </div>
      <div className="wrapper mt-10">
        <div data-scroll className="appear transition-delay-1200">
          <h2
            data-scroll
            data-scroll-speed="-6"
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            className="text-[calc(1rem+6vw)] font-bold tracking-wide text-gray-300 text-left font-sans"
          >
            React JS
          </h2>
        </div>
      </div>
      <div className="scroll-wrapper absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <p
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="vertical"
          data-scroll-position="top"
          className="text-gray-300 text-lg"
        >
          please scroll
        </p>
      </div>
    </header>
  );
};

export default Header;
