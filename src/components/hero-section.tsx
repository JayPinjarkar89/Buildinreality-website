"use client";

import { useState } from "react";
import { FaArrowRight, FaPlay, FaBolt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🔹 Fullscreen Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/ar-visualization.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* 🔹 Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Optional decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-lime-400 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-lime-400 rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-lime-400 rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-lime-400 rotate-45"></div>
      </div>

      {/* 🔹 Content Layer */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl space-y-8 text-center mx-auto">
          <div className="inline-flex items-center space-x-2 bg-lime-400 text-white px-4 py-2 rounded-full text-sm font-medium">
            <FaBolt size={14} />
            <span>Next-Gen Construction Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Construction with{" "}
            <span className="text-lime-400">AR/VR</span> Innovation
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A platform that transforms how construction projects are visualized,
            coordinated, and executed on-site using cutting-edge augmented and
            virtual reality technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc7jSSKcG4JBoG8mxn-wj4s5jOtw9igfsSzJcjJATuv20IYEg/viewform?usp=dialog"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-lime-400 text-white font-medium hover:bg-gray-500 transition-colors text-lg"
            >
              Start Your Project
              <FaArrowRight className="ml-2" />
            </a>
            <button
              onClick={handleOpenVideo}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-lime-400 text-lime-400 hover:bg-blue-50 transition-colors text-lg"
            >
              <FaPlay className="mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <iframe
              src="https://drive.google.com/file/d/1GYwD3yH5Gl3ygm2NR4jiH2jc0EtoAXHu/preview"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="AR/VR Construction Demo"
            />

            <button
              onClick={handleCloseVideo}
              className="absolute top-2 left-2 bg-white text-black rounded-full p-2 hover:bg-red-600 hover:text-white transition"
              aria-label="Close video"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
