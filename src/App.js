import React, { useRef } from 'react';
import NavbarBlurred from "./components/NavbarBlurred";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <NavbarBlurred />
      <div data-scroll-container ref={containerRef} className="top-0">
        <Header />
        <About />
        <Project />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
}