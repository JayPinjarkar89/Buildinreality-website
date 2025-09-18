"use client";

import { FaArrowRight, FaPlay, FaBolt, FaEye, FaCube } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-gray-100 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-lime-400 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-lime-400 rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-lime-400 rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-lime-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-lime-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaBolt size={14} />
                <span>Next-Gen Construction Technology</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Construction with{" "}
                <span className="text-lime-400">AR/VR</span> Innovation
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                A platform that transforms how construction projects are
                visualized, coordinated, and executed on-site using
                cutting-edge augmented and virtual reality technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-lime-400 text-white font-medium hover:bg-blue-500 transition-colors text-lg"
              >
                Start Your Project
                <FaArrowRight  />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-lime-400 text-lime-400 hover:bg-blue-50 transition-colors text-lg"
              >
                <FaPlay  />
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-lime-400">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">30%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-200 to-blue-100 rounded-2xl p-8 overflow-hidden">
              {/* AR/VR Visualization Mockup */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-3 text-gray-800">
                  <FaEye size={20} color="text-lime-400" />
                  <span className="font-medium">AR Construction View</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-lg p-4 backdrop-blur-sm">
                    <FaCube size={28} color="text-lime-400" />
                    <div className="text-sm text-gray-800">3D Model</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 backdrop-blur-sm">
                    <FaBolt size={28} color="text-lime-400 " />
                    <div className="text-sm text-gray-800">Real-time Data</div>
                  </div>
                </div>

                {/* Simulated AR Interface */}
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-lime-400 font-medium">
                      BUILDING PROGRESS
                    </span>
                    <span className="text-xs text-gray-800">
                      78% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lime-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-blue-300 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
