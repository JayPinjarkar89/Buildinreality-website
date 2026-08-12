"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaSync } from "react-icons/fa";

type VideoTab = "sitelens" | "fieldsync";

const videos = {
  sitelens:
    "https://buildinreality.s3.ap-south-1.amazonaws.com/videos/sitelens.mp4",
  fieldsync:
    "https://buildinreality.s3.ap-south-1.amazonaws.com/videos/field-sync.mp4",
};

export function CapabilityVideo() {
  const [activeTab, setActiveTab] = useState<VideoTab>("sitelens");

  const sitelensRef = useRef<HTMLVideoElement>(null);
  const fieldsyncRef = useRef<HTMLVideoElement>(null);

  const playVideo = (tab: VideoTab) => {
    setActiveTab(tab);

    const video =
      tab === "sitelens"
        ? sitelensRef.current
        : fieldsyncRef.current;

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        // Browser may block autoplay.
      });
    }
  };

  const handleVideoEnd = (
    videoRef: React.RefObject<HTMLVideoElement | null>
  ) => {
    videoRef.current?.pause();
  };

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.includes("fieldsync")) {
        playVideo("fieldsync");
      } else if (hash.includes("sitelens")) {
        playVideo("sitelens");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-10 sm:mb-12">
        <button
          onClick={() => {
            window.location.hash = "sitelens";
          }}
          className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "sitelens"
            ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
            : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
            }`}
        >
          <FaEye />
          SiteLens View
        </button>

        <button
          onClick={() => {
            window.location.hash = "fieldsync";
          }}
          className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "fieldsync"
            ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
            : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
            }`}
        >
          <FaSync />
          FieldSync View
        </button>
      </div>

      {/* Video Container */}
      <div className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-[#121412] shadow-2xl">
        <div className="h-[220px] xs:h-[280px] sm:h-[400px] md:h-[520px] w-full relative bg-black flex items-center justify-center">
          {/* SiteLens */}
          <video
            ref={sitelensRef}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnd(sitelensRef)}
            className={`w-full h-full ${activeTab === "sitelens" ? "block" : "hidden"
              } object-contain md:object-cover`}
          >
            <source src={videos.sitelens} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* FieldSync */}
          <video
            ref={fieldsyncRef}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnd(fieldsyncRef)}
            className={`w-full h-full ${activeTab === "fieldsync" ? "block" : "hidden"
              } object-contain md:object-cover`}
          >
            <source src={videos.fieldsync} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}