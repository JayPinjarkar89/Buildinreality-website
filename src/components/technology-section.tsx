
"use client";

import Image from "next/image";
import { AiFillDatabase } from "react-icons/ai";
import { FaDesktop, FaRegBuilding } from "react-icons/fa";
import { ImCloudCheck } from "react-icons/im";
import { IoAlertOutline } from "react-icons/io5";


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
                Cutting-Edge AR/VR and Web Platforms
              </h2>

              <p className="text-lg text-gray-600">
                At the heart of our innovation lies a seamless integration of Augmented Reality (AR) and Cloud Technology — designed to bridge the gap between design and execution in construction projects. Our advanced solutions, SiteLens and FieldSync, empower teams to visualize, collaborate, and deliver with unmatched accuracy and efficiency.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaRegBuilding className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Immersive Visualization and BIM Integration</h3>
                  <p className="text-gray-600">
                    Bring Building Information Modeling (BIM) directly to the construction site through Augmented Reality (AR). Visualize 3D models in real environments for better understanding, alignment, and execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ImCloudCheck className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Field and Cloud Synchronization</h3>
                  <p className="text-gray-600">
                    Ensure continuous coordination between on-site teams and remote stakeholders. Updates from SiteLens sync instantly with FieldSync, providing a single source of truth for progress and data management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <IoAlertOutline className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Early Issue Detection and Quality Assurance</h3>
                  <p className="text-gray-600">
                    Detect design clashes, deviations, or construction errors early using visual overlays and issue tracking. Validate work against BIM models to maintain the highest standards of build quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AiFillDatabase className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data-Driven Insights and Project Intelligence</h3>
                  <p className="text-gray-600">
                    Gain actionable insights from integrated dashboards and analytics. Track performance, monitor timelines, and make informed decisions that enhance efficiency and reduce project risk.
                  </p>
                </div>
              </div>
            </div>

            {/* <a
              href="#explore"
              className="inline-flex items-center px-6 py-3 rounded-md bg-lime-400 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Explore Technology
              <FaArrowRight className="ml-2 w-4 h-4" />
            </a> */}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 flex justify-center items-center">
                <Image
                  src="/technolgy.gif"
                  alt="Animated Web App Icon"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
