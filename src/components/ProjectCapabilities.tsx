// // "use client";

// // import {
// //   FaCube,
// //   FaExclamationTriangle,
// //   FaCheckCircle,
// //   FaTasks,
// //   FaBug,
// //   FaChartLine,
// //   FaBolt,
// // } from "react-icons/fa";

// // const features = [
// //   {
// //     icon: FaCube,
// //     title: "BIM-Based Guidance",
// //     subtitle: "Transform your construction workflow with precise AR-guided instructions",
// //     points: [
// //       "Overlay BIM models directly on site",
// //       "Provide workers with precise, real-time instructions",
// //       "Reduce dependency on paper drawings",
// //     ],
// //   },
// //   {
// //     icon: FaExclamationTriangle,
// //     title: "On-Site Clash Detection",
// //     subtitle: "Identify and resolve conflicts before they become costly problems",
// //     points: [
// //       "Identify structural, architectural, and MEP conflicts early",
// //       "Prevent costly errors and rework",
// //       "Improve collaboration between disciplines",
// //     ],
// //   },
// //   {
// //     icon: FaCheckCircle,
// //     title: "Quality Assurance",
// //     subtitle: "Ensure compliance and maintain standards throughout your project",
// //     points: [
// //       "Compare as-built conditions with design models",
// //       "Ensure compliance with quality & safety standards",
// //       "Maintain real-time validation throughout project lifecycle",
// //     ],
// //   },
// //   {
// //     icon: FaTasks,
// //     title: "Task Scheduling & Management",
// //     subtitle: "Optimize workforce efficiency with intelligent task coordination",
// //     points: [
// //       "Assign and track on-site tasks in real time",
// //       "Ensure workforce efficiency and accountability",
// //       "Integrate with project timelines for better coordination",
// //     ],
// //   },
// //   {
// //     icon: FaBug,
// //     title: "Issue Management",
// //     subtitle: "Streamline problem resolution with digital documentation",
// //     points: [
// //       "Log and document issues on-site instantly",
// //       "Assign responsibilities for faster resolution",
// //       "Maintain a digital issue history for transparency",
// //     ],
// //   },
// //   {
// //     icon: FaChartLine,
// //     title: "Project Tracking",
// //     subtitle: "Monitor progress and make data-driven decisions in real-time",
// //     points: [
// //       "Real-time progress monitoring via AR & Cloud",
// //       "Dashboard insights for stakeholders & management",
// //       "Improve decision-making with live data",
// //     ],
// //   },
// // ];

// // export function ProjectCapabilities() {
// //   return (
// //     <section id="capabilities" className="py-24 bg-gray-50">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center space-x-2 bg-blue-100 text-lime-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
// //             <FaBolt size={16} />
// //             <span>Comprehensive Suite</span>
// //           </div>
// //           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
// //             Engineered for Total Project Control
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Discover how our advanced AR and cloud platform empowers every phase of your construction lifecycle.
// //           </p>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-lime-400 flex flex-col justify-between"
// //             >
// //               <div>
// //                 <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-50 transition-colors">
// //                   <feature.icon size={28} className="text-lime-500" />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h3>
// //                 <p className="text-sm font-medium text-gray-500 mb-6">{feature.subtitle}</p>
// //               </div>

// //               <ul className="space-y-3 border-t border-gray-100 pt-6">
// //                 {feature.points.map((point, idx) => (
// //                   <li key={idx} className="flex items-start gap-2.5 text-gray-600 text-sm">
// //                     <span className="text-lime-500 font-bold mt-0.5">✓</span>
// //                     <span>{point}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import {
//   FaCube,
//   FaExclamationTriangle,
//   FaCheckCircle,
//   FaTasks,
//   FaBug,
//   FaChartLine,
//   FaBolt,
// } from "react-icons/fa";

// const features = [
//   {
//     icon: FaCube,
//     title: "BIM-Based Guidance",
//     subtitle: "Transform your construction workflow with precise AR-guided instructions",
//     points: [
//       "Overlay BIM models directly on site",
//       "Provide workers with precise, real-time instructions",
//       "Reduce dependency on paper drawings",
//     ],
//   },
//   {
//     icon: FaExclamationTriangle,
//     title: "On-Site Clash Detection",
//     subtitle: "Identify and resolve conflicts before they become costly problems",
//     points: [
//       "Identify structural, architectural, and MEP conflicts early",
//       "Prevent costly errors and rework",
//       "Improve collaboration between disciplines",
//     ],
//   },
//   {
//     icon: FaCheckCircle,
//     title: "Quality Assurance",
//     subtitle: "Ensure compliance and maintain standards throughout your project",
//     points: [
//       "Compare as-built conditions with design models",
//       "Ensure compliance with quality & safety standards",
//       "Maintain real-time validation throughout project lifecycle",
//     ],
//   },
//   {
//     icon: FaTasks,
//     title: "Task Scheduling & Management",
//     subtitle: "Optimize workforce efficiency with intelligent task coordination",
//     points: [
//       "Assign and track on-site tasks in real time",
//       "Ensure workforce efficiency and accountability",
//       "Integrate with project timelines for better coordination",
//     ],
//   },
//   {
//     icon: FaBug,
//     title: "Issue Management",
//     subtitle: "Streamline problem resolution with digital documentation",
//     points: [
//       "Log and document issues on-site instantly",
//       "Assign responsibilities for faster resolution",
//       "Maintain a digital issue history for transparency",
//     ],
//   },
//   {
//     icon: FaChartLine,
//     title: "Project Tracking",
//     subtitle: "Monitor progress and make data-driven decisions in real-time",
//     points: [
//       "Real-time progress monitoring via AR & Cloud",
//       "Dashboard insights for stakeholders & management",
//       "Improve decision-making with live data",
//     ],
//   },
// ];

// export function ProjectCapabilities() {
//   return (
//     <section id="capabilities" className="py-24 bg-[#0a0c0a] text-white">
//       <div className="container mx-auto px-6 md:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-[#121412] border border-gray-800/80 text-[#a3e635] px-4 py-2 rounded-full text-xs font-medium mb-4 tracking-widest uppercase">
//             <FaBolt size={14} />
//             <span>Comprehensive Suite</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
//             ENGINEERED FOR TOTAL PROJECT CONTROL
//           </h2>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
//             >
//               <div>
//                 <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-50/20 transition-colors">
//                   <feature.icon size={28} className="text-lime-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
//                 <p className="text-sm font-medium text-gray-400 mb-6">{feature.subtitle}</p>
//               </div>

//               <ul className="space-y-3 border-t border-gray-800/60 pt-6">
//                 {feature.points.map((point, idx) => (
//                   <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-sm">
//                     <span className="text-lime-500 font-bold mt-0.5">✓</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaCube,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTasks,
  FaBug,
  FaChartLine,
  FaBolt,
  FaEye,
  FaSync,
} from "react-icons/fa";

const features = [
  {
    icon: FaCube,
    title: "BIM-Based Guidance",
    subtitle: "Transform your construction workflow with precise AR-guided instructions",
    points: [
      "Overlay BIM models directly on site",
      "Provide workers with precise, real-time instructions",
      "Reduce dependency on paper drawings",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "On-Site Clash Detection",
    subtitle: "Identify and resolve conflicts before they become costly problems",
    points: [
      "Identify structural, architectural, and MEP conflicts early",
      "Prevent costly errors and rework",
      "Improve collaboration between disciplines",
    ],
  },
  {
    icon: FaCheckCircle,
    title: "Quality Assurance",
    subtitle: "Ensure compliance and maintain standards throughout your project",
    points: [
      "Compare as-built conditions with design models",
      "Ensure compliance with quality & safety standards",
      "Maintain real-time validation throughout project lifecycle",
    ],
  },
  {
    icon: FaTasks,
    title: "Task Scheduling & Management",
    subtitle: "Optimize workforce efficiency with intelligent task coordination",
    points: [
      "Assign and track on-site tasks in real time",
      "Ensure workforce efficiency and accountability",
      "Integrate with project timelines for better coordination",
    ],
  },
  {
    icon: FaBug,
    title: "Issue Management",
    subtitle: "Streamline problem resolution with digital documentation",
    points: [
      "Log and document issues on-site instantly",
      "Assign responsibilities for faster resolution",
      "Maintain a digital issue history for transparency",
    ],
  },
  {
    icon: FaChartLine,
    title: "Project Tracking",
    subtitle: "Monitor progress and make data-driven decisions in real-time",
    points: [
      "Real-time progress monitoring via AR & Cloud",
      "Dashboard insights for stakeholders & management",
      "Improve decision-making with live data",
    ],
  },
];

export function ProjectCapabilities() {
  const [activeTab, setActiveTab] = useState<"sitelens" | "fieldsync">("sitelens");

  return (
    <section id="capabilities" className="py-24 bg-[#0a0c0a] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#121412] border border-gray-800/80 text-[#a3e635] px-4 py-2 rounded-full text-xs font-medium mb-4 tracking-widest uppercase">
            <FaBolt size={14} />
            <span>Comprehensive Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            ENGINEERED FOR TOTAL PROJECT CONTROL
          </h2>

          {/* Toggle Switches / Tabs for SiteLens vs FieldSync */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setActiveTab("sitelens")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "sitelens"
                ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
                : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
                }`}
            >
              <FaEye /> SiteLens View
            </button>
            <button
              onClick={() => setActiveTab("fieldsync")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "fieldsync"
                ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
                : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
                }`}
            >
              <FaSync /> FieldSync View
            </button>
          </div>
        </div>

        {/* Dynamic Image Display Container based on Tab */}
        <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-[#121412] shadow-2xl">
          <div className="p-4 bg-[#181b18] border-b border-gray-800 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-lime-400 font-bold">
              Active Module Preview: {activeTab === "sitelens" ? "SiteLens AR System" : "FieldSync Cloud Dashboard"}
            </span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <div className="h-[500px] md:h-[600px] w-full relative bg-[#121412] flex items-center justify-center">
            <Image
              src={
                activeTab === "sitelens"
                  ? "/images/sitelens.png"
                  : "/images/fieldsync.png"
              }
              width={1400}
              height={800}
              alt={
                activeTab === "sitelens"
                  ? "SiteLens AR Workspace"
                  : "FieldSync Cloud Sync"
              }
              className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-500"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#1a1e1a] rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-50/20 transition-colors">
                  <feature.icon size={26} className="text-[#a3e635]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm font-medium text-gray-400 mb-6">{feature.subtitle}</p>
              </div>

              <ul className="space-y-3 border-t border-gray-800/60 pt-6">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <span className="text-[#a3e635] font-bold mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}