"use client";
import Navbar from "../components/Navbar";
import LaneStatus from "../components/LaneStatus";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LaneStatus />
      </main>
      <Footer />
    </div>
  );
}
