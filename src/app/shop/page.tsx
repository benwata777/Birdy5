"use client";

import Navbar from "../components/Navbar";

const shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className=" text-3xl font-bold mb-4">Shop</h1>
        <p>
          Welcome to Birdy 5! We offer the best golf driving range experience.
        </p>
      </div>
    </div>
  );
};

export default shop;
