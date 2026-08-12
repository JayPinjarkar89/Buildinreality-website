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
  const videoRef = useRef<HTMLVideoElement>(null);

  const changeVideo = (tab: VideoTab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.includes("fieldsync")) {
        setActiveTab("fieldsync");
      } else if (hash.includes("sitelens")) {
        setActiveTab("sitelens");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Play whenever active video changes
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    video.play().catch(() => {
      // Autoplay can be blocked by the browser.
    });
  }, [activeTab]);

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-10 sm:mb-12">
        <button
          onClick={() => {
            window.location.hash = "sitelens";
            changeVideo("sitelens");
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
            changeVideo("fieldsync");
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

      {/* Video */}
      <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-black shadow-2xl">
          <video
            key={activeTab}
            ref={videoRef}
            src={videos[activeTab]}
            muted
            playsInline
            preload="auto"
            controls={false}
            onEnded={(event) => {
              event.currentTarget.pause();
            }}
            className="block w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}