import React from "react";
import { HiOutlineEye, HiOutlineRefresh, HiOutlineArrowRight } from "react-icons/hi";

export function Ecosystem() {
  return (
    <section className="w-full bg-[#07131f] py-24 px-6 md:px-12 flex flex-col items-center font-sans text-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          The BuildInReality Ecosystem
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          High-performance tools engineered for the toughest jobsites on earth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1: SiteLens */}
        <div className="bg-[#0f2236] border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div>
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#162f4c] border border-gray-700/50 flex items-center justify-center text-orange-500 text-2xl mb-6">
              <HiOutlineEye />
            </div>

            {/* Title & Description */}
            <h3 className="text-3xl font-bold tracking-tight mb-3">
              SiteLens
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Advanced AR wearable integration for hands-free field verification and spatial guidance.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-10 text-gray-300 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">+</span> LiDAR spatial mapping
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">+</span> Dynamic BIM overlay
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">+</span> Voice-command task logs
              </li>
            </ul>
          </div>

          {/* Learn More Link */}
          <div>
            <a
              href="#sitelens"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold text-base hover:text-orange-400 transition-colors group"
            >
              Learn More
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Card 2: FieldSync */}
        <div className="bg-[#0f2236] border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div>
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#162f4c] border border-gray-700/50 flex items-center justify-center text-cyan-400 text-2xl mb-6">
              <HiOutlineRefresh />
            </div>

            {/* Title & Description */}
            <h3 className="text-3xl font-bold tracking-tight mb-3">
              FieldSync
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              The central nervous system for your project data, syncing tablet, mobile, and wearable inputs.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-10 text-gray-300 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">+</span> Centralized clash detection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">+</span> Automated daily progress reports
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">+</span> Procore & Autodesk integration
              </li>
            </ul>
          </div>

          {/* Learn More Link */}
          <div>
            <a
              href="#fieldsync"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors group"
            >
              Learn More
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}