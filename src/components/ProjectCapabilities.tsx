import React from "react";
import { FaBolt } from "react-icons/fa";
import { CapabilityVideo } from "./CapabilityVideo";
import { CapabilityCards } from "./CapabilityCards";

export function ProjectCapabilities() {
  return (
    <section
      id="capabilities"
      className="py-16 sm:py-24 bg-[#0a0c0a] text-white relative"
    >
      {/* Hash anchors */}
      <div id="sitelens" className="absolute top-[-100px]" />
      <div id="fieldsync" className="absolute top-[-100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#121412] border border-gray-800/80 text-[#a3e635] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium mb-4 tracking-widest uppercase">
            <FaBolt size={14} />
            <span>Comprehensive Suite</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            ENGINEERED FOR TOTAL PROJECT CONTROL
          </h2>
        </div>

        {/* Video + Tabs */}
        <CapabilityVideo />

        {/* Feature Cards */}
        <CapabilityCards />
      </div>
    </section>
  );
}