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
        <Navbar /> {/* เพิ่ม Navbar */}
      </div>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* ทำให้พื้นหลังมืดลง */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Welcome to Birdy5</h1>
        <p className="mt-4 text-lg">
          Your ultimate golf driving range experience.
        </p>

        {/* ปุ่มไอคอนลูกศร */}
        <div className="absolute left-0 right-0 flex justify-between items-center h-full">
          <button
            onClick={prevBackground}
            className="flex items-center justify-center w-16 h-16 bg-white/40 text-black rounded-full absolute left-4 hover:bg-slate-500/40"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={nextBackground}
            className="flex items-center justify-center w-16 h-16 bg-white/40 text-black rounded-full absolute right-4 hover:bg-slate-500/40"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>
      <div className="relative z-20">
        <Footer /> {/* เพิ่ม Footer */}
      </div>
    </div>
  );
};

export default HomePage;
