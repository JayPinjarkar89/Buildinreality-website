import React from "react";
import { HiOutlineEye, HiOutlineRefresh, HiOutlineArrowRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi2";

export function RealitySystem() {
  return (
    <section className="w-full bg-[#0a0c0a] py-20 px-6 md:px-12 flex flex-col items-center font-sans text-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-14">
        <span className="text-[#a3e635] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">
          THE REALITY ENGINE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ENGINEERED FOR ABSOLUTE PRECISION
        </h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        {/* Card 1: SITELENS */}
        <div className="bg-[#121412] border border-gray-800/80 rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div className="absolute top-6 right-6 text-[#a3e635]/20 text-4xl">
            <HiOutlineEye />
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-4">
              SITELENS
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 pr-8">
              A spatial twin platform that captures every millimeter of the job site. SiteLens uses autonomous reality capture to synchronize your physical site with your digital BIM in real-time.
            </p>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                Lidar-Grade Site Mapping
              </li>
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                Automated BIM Comparison
              </li>
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                Remote Stakeholder Access
              </li>
            </ul>
          </div>

          <div>
            <a
              href="#sitelens"
              className="inline-flex items-center gap-2 text-[#a3e635] font-semibold text-base hover:text-lime-400 transition-colors group"
            >
              Learn more about SiteLens
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Card 2: FIELDSYNC */}
        <div className="bg-[#121412] border border-gray-800/80 rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div className="absolute top-6 right-6 text-[#a3e635]/20 text-4xl">
            <HiOutlineRefresh />
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-4">
              FIELDSYNC
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 pr-8">
              Put intelligence in the palms of your workforce. FieldSync delivers precision AR overlays and automated progress reporting directly to field devices.
            </p>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                AR Visual Inspection
              </li>
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                Offline Field Capabilities
              </li>
              <li className="flex items-center gap-3 text-white text-base">
                <span className="text-[#a3e635] text-xl shrink-0"><HiCheckCircle /></span>
                Instant Deviation Alerts
              </li>
            </ul>
          </div>

          <div>
            <a
              href="#fieldsync"
              className="inline-flex items-center gap-2 text-[#a3e635] font-semibold text-base hover:text-lime-400 transition-colors group"
            >
              Learn more about FieldSync
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>

      {/* Pagination / Controls */}
      <div className="flex items-center gap-4 text-gray-400 text-sm font-medium">
        <button className="w-9 h-9 rounded-full bg-[#181b18] border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors">
          <HiOutlineChevronLeft className="text-lg" />
        </button>
        <span className="tracking-widest">1 / 3</span>
        <button className="w-9 h-9 rounded-full bg-[#181b18] border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors">
          <HiOutlineChevronRight className="text-lg" />
        </button>
      </div>
    </section>
  );
}