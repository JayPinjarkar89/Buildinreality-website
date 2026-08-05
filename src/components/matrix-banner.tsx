import React from "react";

export function MatrixBanner() {
  return (
    <section className="w-full bg-[#0a1b2a] py-24 px-6 flex justify-center items-center font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">

        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#00bcd4] tracking-tight mb-4">
            2-3x
          </h2>
          <h3 className="text-2xl font-bold text-white mb-3">
            Faster Decision Making
          </h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-xs">
            Accelerate on-site approvals with real-time AR validation and
            data-rich model viewing.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#00bcd4] tracking-tight mb-4">
            20-30%
          </h2>
          <h3 className="text-2xl font-bold text-white mb-3">
            Rework Reduction
          </h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-xs">
            Eliminate costly construction errors by identifying clashes before
            the concrete is poured.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#00bcd4] tracking-tight mb-4">
            100%
          </h2>
          <h3 className="text-2xl font-bold text-white mb-3">
            Digital Transparency
          </h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-xs">
            A single source of truth for all stakeholders, from architects to
            general contractors.
          </p>
        </div>

      </div>
    </section>
  );
}