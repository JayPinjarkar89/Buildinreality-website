// // "use client";

// // import React, { useState, useRef } from "react";
// // import {
// //   FaCube,
// //   FaExclamationTriangle,
// //   FaCheckCircle,
// //   FaTasks,
// //   FaBug,
// //   FaChartLine,
// //   FaBolt,
// //   FaEye,
// //   FaSync,
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
// //   const [activeTab, setActiveTab] = useState<"sitelens" | "fieldsync">("sitelens");

// //   const sitelensRef = useRef<HTMLVideoElement>(null);
// //   const fieldsyncRef = useRef<HTMLVideoElement>(null);

// //   const handleVideoEnd = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
// //     if (videoRef.current) {
// //       videoRef.current.pause();
// //     }
// //   };

// //   return (
// //     <section id="capabilities" className="py-16 sm:py-24 bg-[#0a0c0a] text-white">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-12">
// //         {/* Section Header */}
// //         <div className="text-center mb-10 sm:mb-12">
// //           <div className="inline-flex items-center space-x-2 bg-[#121412] border border-gray-800/80 text-[#a3e635] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium mb-4 tracking-widest uppercase">
// //             <FaBolt size={14} />
// //             <span>Comprehensive Suite</span>
// //           </div>
// //           <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
// //             ENGINEERED FOR TOTAL PROJECT CONTROL
// //           </h2>

// //           {/* Toggle Switches / Tabs with Anchor IDs */}
// //           <div id="sitelens-view" className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
// //             <button
// //               onClick={() => {
// //                 setActiveTab("sitelens");
// //                 if (sitelensRef.current) {
// //                   sitelensRef.current.currentTime = 0;
// //                   sitelensRef.current.play();
// //                 }
// //               }}
// //               className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "sitelens"
// //                   ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
// //                   : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
// //                 }`}
// //             >
// //               <FaEye /> SiteLens View
// //             </button>
// //             <button
// //               onClick={() => {
// //                 setActiveTab("fieldsync");
// //                 if (fieldsyncRef.current) {
// //                   fieldsyncRef.current.currentTime = 0;
// //                   fieldsyncRef.current.play();
// //                 }
// //               }}
// //               className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "fieldsync"
// //                   ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
// //                   : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
// //                 }`}
// //             >
// //               <FaSync /> FieldSync View
// //             </button>
// //           </div>
// //         </div>

// //         {/* Dynamic Video Display Container with Unique ID */}
// //         <div
// //           id="sitelens"
// //           className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-[#121412] shadow-2xl"
// //         >
// //           <div className="p-3 sm:p-4 bg-[#181b18] border-b border-gray-800 flex items-center justify-between">
// //             <span className="text-[10px] sm:text-xs uppercase tracking-widest text-lime-400 font-bold truncate pr-2">
// //               Preview: {activeTab === "sitelens" ? "SiteLens AR System" : "FieldSync Cloud Dashboard"}
// //             </span>
// //             <div className="flex gap-1.5 shrink-0">
// //               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
// //               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
// //               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
// //             </div>
// //           </div>

// //           <div className="h-[280px] sm:h-[420px] md:h-[520px] w-full relative bg-[#121412] flex items-center justify-center">
// //             {/* SiteLens Video */}
// //             <video
// //               ref={sitelensRef}
// //               autoPlay
// //               muted
// //               playsInline
// //               preload="auto"
// //               onEnded={() => handleVideoEnd(sitelensRef)}
// //               className={`w-full h-full object-cover ${activeTab === "sitelens" ? "block" : "hidden"}`}
// //             >
// //               <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/sitelens.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>

// //             {/* FieldSync Video */}
// //             <video
// //               ref={fieldsyncRef}
// //               muted
// //               playsInline
// //               preload="auto"
// //               onEnded={() => handleVideoEnd(fieldsyncRef)}
// //               className={`w-full h-full object-cover ${activeTab === "fieldsync" ? "block" : "hidden"}`}
// //             >
// //               <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/field-sync.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           </div>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
// //             >
// //               <div>
// //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1e1a] rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-lime-50/20 transition-colors">
// //                   <feature.icon size={24} className="text-[#a3e635]" />
// //                 </div>
// //                 <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{feature.title}</h3>
// //                 <p className="text-xs sm:text-sm font-medium text-gray-400 mb-5 sm:mb-6">{feature.subtitle}</p>
// //               </div>

// //               <ul className="space-y-2.5 sm:space-y-3 border-t border-gray-800/60 pt-5 sm:pt-6">
// //                 {feature.points.map((point, idx) => (
// //                   <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm">
// //                     <span className="text-[#a3e635] font-bold mt-0.5">✓</span>
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

// import React, { useState, useRef } from "react";
// import {
//   FaCube,
//   FaExclamationTriangle,
//   FaCheckCircle,
//   FaTasks,
//   FaBug,
//   FaChartLine,
//   FaBolt,
//   FaEye,
//   FaSync,
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
//   const [activeTab, setActiveTab] = useState<"sitelens" | "fieldsync">("sitelens");

//   const sitelensRef = useRef<HTMLVideoElement>(null);
//   const fieldsyncRef = useRef<HTMLVideoElement>(null);

//   const handleVideoEnd = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   return (
//     <section className="py-16 sm:py-24 bg-[#0a0c0a] text-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-10 sm:mb-12">
//           <div className="inline-flex items-center space-x-2 bg-[#121412] border border-gray-800/80 text-[#a3e635] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium mb-4 tracking-widest uppercase">
//             <FaBolt size={14} />
//             <span>Comprehensive Suite</span>
//           </div>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
//             ENGINEERED FOR TOTAL PROJECT CONTROL
//           </h2>

//           {/* Toggle Switches / Tabs with unique anchor IDs */}
//           <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
//             <div>
//               <button
//                 onClick={() => {
//                   setActiveTab("sitelens");
//                   if (sitelensRef.current) {
//                     sitelensRef.current.currentTime = 0;
//                     sitelensRef.current.play();
//                   }
//                 }}
//                 className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "sitelens"
//                   ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
//                   : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
//                   }`}
//               >
//                 <FaEye /> SiteLens View
//               </button>
//             </div>

//             <div>
//               <button
//                 onClick={() => {
//                   setActiveTab("fieldsync");
//                   if (fieldsyncRef.current) {
//                     fieldsyncRef.current.currentTime = 0;
//                     fieldsyncRef.current.play();
//                   }
//                 }}
//                 className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "fieldsync"
//                   ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
//                   : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
//                   }`}
//               >
//                 <FaSync /> FieldSync View
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Video Display Container */}
//         <div
//           className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-[#121412] shadow-2xl"
//         >
//           {/* Adjusted height and object-contain to ensure mobile visibility without cropping */}
//           <div className="h-[220px] xs:h-[280px] sm:h-[400px] md:h-[520px] w-full relative bg-black flex items-center justify-center">
//             {/* SiteLens Video */}
//             <video
//               id="sitelens"
//               ref={sitelensRef}
//               autoPlay
//               muted
//               playsInline
//               preload="auto"
//               onEnded={() => handleVideoEnd(sitelensRef)}
//               className={`w-full h-full object-contain ${activeTab === "sitelens" ? "block" : "hidden"}`}
//             >
//               <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/sitelens.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* FieldSync Video */}
//             <video
//               id="fieldsync"
//               ref={fieldsyncRef}
//               muted
//               playsInline
//               preload="auto"
//               onEnded={() => handleVideoEnd(fieldsyncRef)}
//               className={`w-full h-full object-contain ${activeTab === "fieldsync" ? "block" : "hidden"}`}
//             >
//               <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/field-sync.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
//             >
//               <div>
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1e1a] rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-lime-50/20 transition-colors">
//                   <feature.icon size={24} className="text-[#a3e635]" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{feature.title}</h3>
//                 <p className="text-xs sm:text-sm font-medium text-gray-400 mb-5 sm:mb-6">{feature.subtitle}</p>
//               </div>

//               <ul className="space-y-2.5 sm:space-y-3 border-t border-gray-800/60 pt-5 sm:pt-6">
//                 {features[index].points.map((point, idx) => (
//                   <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm">
//                     <span className="text-[#a3e635] font-bold mt-0.5">✓</span>
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

import React, { useState, useRef, useEffect } from "react";
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

  const sitelensRef = useRef<HTMLVideoElement>(null);
  const fieldsyncRef = useRef<HTMLVideoElement>(null);

  // Stop video at the end of playback instead of looping
  const handleVideoEnd = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Listen to URL Hash changes to switch tabs and play correct video automatically
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.includes("fieldsync")) {
        setActiveTab("fieldsync");
        setTimeout(() => {
          if (fieldsyncRef.current) {
            fieldsyncRef.current.currentTime = 0;
            fieldsyncRef.current.play().catch(e => console.log("Autoplay blocked", e));
          }
        }, 100);
      } else if (hash.includes("sitelens")) {
        setActiveTab("sitelens");
        setTimeout(() => {
          if (sitelensRef.current) {
            sitelensRef.current.currentTime = 0;
            sitelensRef.current.play().catch(e => console.log("Autoplay blocked", e));
          }
        }, 100);
      }
    };

    // Check hash on initial component mount
    handleHashChange();

    // Listen for hash changes if the user clicks a link while already on the page
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#0a0c0a] text-white relative">

      {/* Invisible anchor tags for precise scrolling offset */}
      <div id="sitelens" className="absolute top-[-100px]"></div>
      <div id="fieldsync" className="absolute top-[-100px]"></div>

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

          {/* Toggle Switches */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => {
                window.location.hash = "sitelens";
              }}
              className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "sitelens"
                ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
                : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
                }`}
            >
              <FaEye /> SiteLens View
            </button>
            <button
              onClick={() => {
                window.location.hash = "fieldsync";
              }}
              className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${activeTab === "fieldsync"
                ? "bg-[#a3e635] text-black shadow-lg shadow-lime-500/10"
                : "bg-[#121412] text-gray-400 border border-gray-800 hover:text-white"
                }`}
            >
              <FaSync /> FieldSync View
            </button>
          </div>
        </div>

        {/* Dynamic Video Display Container */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-[#121412] shadow-2xl">
          <div className="h-[220px] xs:h-[280px] sm:h-[400px] md:h-[520px] w-full relative bg-black flex items-center justify-center">
            {/* SiteLens Video */}
            <video
              ref={sitelensRef}
              muted
              playsInline
              preload="auto"
              onEnded={() => handleVideoEnd(sitelensRef)}
              className={`w-full h-full object-contain ${activeTab === "sitelens" ? "block" : "hidden"}`}
            >
              <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/sitelens.mp4" type="video/mp4" />
            </video>

            {/* FieldSync Video */}
            <video
              ref={fieldsyncRef}
              muted
              playsInline
              preload="auto"
              onEnded={() => handleVideoEnd(fieldsyncRef)}
              className={`w-full h-full object-contain ${activeTab === "fieldsync" ? "block" : "hidden"}`}
            >
              <source src="https://buildinreality.s3.ap-south-1.amazonaws.com/videos/field-sync.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1e1a] rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-lime-50/20 transition-colors">
                  <feature.icon size={24} className="text-[#a3e635]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 mb-5 sm:mb-6">{feature.subtitle}</p>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 border-t border-gray-800/60 pt-5 sm:pt-6">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm">
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