import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiHistory, BiCheckShield, BiSync } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi";

export function ChallengeSection() {
  return (
    <section className="w-full bg-[#f0f4f8] py-20 px-4 md:px-12 lg:px-24 flex justify-center items-center font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column - The Challenge */}
        <div className="flex flex-col justify-center">
          <span className="text-[#a3e635] font-bold text-xs md:text-sm tracking-widest uppercase mb-3">
            THE CHALLENGE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-10">
            Traditional site <br /> management is blind.
          </h2>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5">
              <div className="text-red-600 text-3xl mt-0.5 shrink-0">
                <HiOutlineExclamationCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  Costly Deviations
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Errors often go unnoticed for weeks, leading to massive rework
                  costs and cascading schedule delays.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5">
              <div className="text-red-600 text-3xl mt-0.5 shrink-0">
                <BiHistory />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  Data Lag
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  The 2D blueprint on site doesn&apos;t reflect the complex reality of
                  the digital 3D model.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - The Solution */}
        <div className="bg-[#0a1b2a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">

          {/* Background decorative scanner icon */}
          <div className="absolute top-6 right-6 text-cyan-900/30 text-8xl pointer-events-none">
            <HiOutlineCube />
          </div>

          <div>
            <span className="text-[#a3e635] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-10">
              Precision Augmented <br /> Reality.
            </h2>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="text-[#a3e635] text-3xl mt-0.5 shrink-0">
                  <BiCheckShield />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Instant Alignment
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Overlay BIM models directly onto the physical environment with
                    sub-millimeter accuracy.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="text-[#a3e635] text-3xl mt-0.5 shrink-0">
                  <BiSync />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Real-time Verification
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Close the loop between the field and the office with instant
                    data synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Link */}
          {/* <div className="mt-12 pt-4">
            <a
              href="#compare-features"
              className="inline-flex items-center gap-2 text-[#a3e635] font-semibold text-base hover:text-cyan-300 transition-colors group"
            >
              Compare Features
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div> */}

        </div>

      </div>
    </section>
  );
}