import React from "react";
import {
  FaCube,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTasks,
  FaBug,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: FaCube,
    title: "BIM-Based Guidance",
    subtitle:
      "Transform your construction workflow with precise AR-guided instructions",
    points: [
      "Overlay BIM models directly on site",
      "Provide workers with precise, real-time instructions",
      "Reduce dependency on paper drawings",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "On-Site Clash Detection",
    subtitle:
      "Identify and resolve conflicts before they become costly problems",
    points: [
      "Identify structural, architectural, and MEP conflicts early",
      "Prevent costly errors and rework",
      "Improve collaboration between disciplines",
    ],
  },
  {
    icon: FaCheckCircle,
    title: "Quality Assurance",
    subtitle:
      "Ensure compliance and maintain standards throughout your project",
    points: [
      "Compare as-built conditions with design models",
      "Ensure compliance with quality & safety standards",
      "Maintain real-time validation throughout project lifecycle",
    ],
  },
  {
    icon: FaTasks,
    title: "Task Scheduling & Management",
    subtitle:
      "Optimize workforce efficiency with intelligent task coordination",
    points: [
      "Assign and track on-site tasks in real time",
      "Ensure workforce efficiency and accountability",
      "Integrate with project timelines for better coordination",
    ],
  },
  {
    icon: FaBug,
    title: "Issue Management",
    subtitle:
      "Streamline problem resolution with digital documentation",
    points: [
      "Log and document issues on-site instantly",
      "Assign responsibilities for faster resolution",
      "Maintain a digital issue history for transparency",
    ],
  },
  {
    icon: FaChartLine,
    title: "Project Tracking",
    subtitle:
      "Monitor progress and make data-driven decisions in real-time",
    points: [
      "Real-time progress monitoring via AR & Cloud",
      "Dashboard insights for stakeholders & management",
      "Improve decision-making with live data",
    ],
  },
];

export function CapabilityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="group bg-[#121412] border border-gray-800/80 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1e1a] rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-lime-50/20 transition-colors">
                <Icon size={24} className="text-[#a3e635]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-gray-400 mb-5 sm:mb-6">
                {feature.subtitle}
              </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 border-t border-gray-800/60 pt-5 sm:pt-6">
              {feature.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm"
                >
                  <span className="text-[#a3e635] font-bold mt-0.5">
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}