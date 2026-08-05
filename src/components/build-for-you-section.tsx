import Image from "next/image";
import React from "react";

export function BuildForYou() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 flex flex-col items-center font-sans text-[#111827]">
      {/* Section Header */}
      <div className="max-w-7xl w-full mb-16">
        <span className="text-orange-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">
          BUILT FOR YOU
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-xl leading-[1.15]">
          Engineered for the entire project team.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Owners & Developers */}
        <div className="flex flex-col">
          <div className="rounded-2xl overflow-hidden mb-6 h-64 md:h-72 shadow-md">
            <Image
              src="/images/owners-developers.jpg"
              alt="Owners & Developers"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              width={800}
              height={450}
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Owners & Developers</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Maximize ROI and ensure project fidelity through superior oversight and real-time progress tracking.
          </p>
        </div>

        {/* Card 2: General Contractors */}
        <div className="flex flex-col">
          <div className="rounded-2xl overflow-hidden mb-6 h-64 md:h-72 shadow-md">
            <Image
              width={800}
              height={450}
              src="/images/general-contractors.jpg"
              alt="General Contractors"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">General Contractors</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Eliminate schedule slips and reduce liability by validating installations against the model daily.
          </p>
        </div>

        {/* Card 3: Specialty Contractors */}
        <div className="flex flex-col">
          <div className="rounded-2xl overflow-hidden mb-6 h-64 md:h-72 shadow-md">
            <Image
              src="/images/specialty-contractors.jpg"
              alt="Specialty Contractors"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              width={800}
              height={450}
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Specialty Contractors</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Execute complex MEP and structural installs with robotic precision, reducing field-to-shop errors.
          </p>
        </div>

      </div>
    </section>
  );
}