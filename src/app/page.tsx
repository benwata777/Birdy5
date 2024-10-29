"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const backgrounds = ["/home-bg.png", "/home-bg1.jpg", "/home-bg2.jpg"];

const HomePage = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const nextBackground = () => {
    setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
  };

  const prevBackground = () => {
    setCurrentBackground(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center md:justify-center md:mt-50 h-full text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Birdy 5</h1>
        <p className="text-center mb-2 md:mb-4 text-base md:text-lg">
          สนามซ้อมกอล์ฟ ขนาด 86 ช่องซ้อม,<br></br>
          แหล่งรวม Pro Shop, และสถาบันสอนกอล์ฟชื่อดัง<br></br>
          02-170-7281
        </p>

        {/* Navigation buttons */}
        <div className="absolute flex justify-between items-center left-0 right-0 top-1/2 transform -translate-y-1/2 mt-20 md:mt-0">
          <button
            onClick={prevBackground}
            className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white/40 text-black rounded-full absolute left-4 hover:bg-slate-500/40"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={nextBackground}
            className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white/40 text-black rounded-full absolute right-4 hover:bg-slate-500/40"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
