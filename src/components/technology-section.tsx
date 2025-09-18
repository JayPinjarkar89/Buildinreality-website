
"use client";

import { FaArrowRight, FaMobileAlt, FaDesktop, FaHeadphones } from "react-icons/fa";

export function TechnologySection() {
  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-lime-400 px-4 py-2 rounded-full text-sm font-medium">
                <FaDesktop className="w-4 h-4" />
                <span>Advanced Technology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Cutting-Edge AR/VR Platform
              </h2>

              <p className="text-lg text-gray-600">
                Our proprietary technology combines augmented reality, virtual
                reality, and advanced 3D modeling to create an immersive
                construction experience that bridges the gap between digital
                planning and physical execution.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMobileAlt className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mobile AR Integration</h3>
                  <p className="text-gray-600">
                    Access AR features directly from your mobile device for
                    on-site visualization and real-time updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaHeadphones className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">VR Immersion</h3>
                  <p className="text-gray-600">
                    Experience complete virtual walkthroughs of your projects
                    before construction begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaDesktop className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cloud Synchronization</h3>
                  <p className="text-gray-600">
                    All data syncs seamlessly across devices and platforms for
                    unified project management.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#explore"
              className="inline-flex items-center px-6 py-3 rounded-md bg-lime-400 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Explore Technology
              <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Technology Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <FaMobileAlt className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="font-semibold mb-2">Mobile AR</h3>
                <p className="text-sm text-gray-600">
                  Real-time site visualization
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 mt-8">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                  <FaHeadphones className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">VR Experience</h3>
                <p className="text-sm text-gray-600">Immersive project tours</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 -mt-4">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                  <FaDesktop className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Platform</h3>
                <p className="text-sm text-gray-600">Unified data management</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <FaArrowRight className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="font-semibold mb-2">Integration</h3>
                <p className="text-sm text-gray-600">Seamless workflow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
