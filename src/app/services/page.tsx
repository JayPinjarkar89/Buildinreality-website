"use client";

// import {
//   FaCubes,
//   FaExclamationTriangle,
//   FaShieldAlt,
//   FaCalendarAlt,
//   FaFileAlt,
//   FaChartBar,
// } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { FiArrowRight } from "react-icons/fi";
import { ProjectCapabilities } from "@/components/ProjectCapabilities";


// const services = [
//   {
//     id: "bim-guidance",
//     title: "BIM-Based Guidance",
//     icon: FaCubes,
//     description: "Transform your construction workflow with precise AR-guided instructions",
//     features: [
//       "Overlay BIM models directly on site",
//       "Provide workers with precise, real-time instructions",
//       "Reduce dependency on paper drawings",
//     ],
//     color: "from-lime-400/20 to-lime-400/5",
//   },
//   {
//     id: "clash-detection",
//     title: "On-Site Clash Detection",
//     icon: FaExclamationTriangle,
//     description: "Identify and resolve conflicts before they become costly problems",
//     features: [
//       "Identify structural, architectural, and MEP conflicts early",
//       "Prevent costly errors and rework",
//       "Improve collaboration between disciplines",
//     ],
//     color: "from-accent/20 to-accent/5",
//   },
//   {
//     id: "quality-assurance",
//     title: "Quality Assurance",
//     icon: FaShieldAlt,
//     description: "Ensure compliance and maintain standards throughout your project",
//     features: [
//       "Compare as-built conditions with design models",
//       "Ensure compliance with quality & safety standards",
//       "Maintain real-time validation throughout project lifecycle",
//     ],
//     color: "from-secondary/20 to-secondary/5",
//   },
//   {
//     id: "task-scheduling",
//     title: "Task Scheduling & Management",
//     icon: FaCalendarAlt,
//     description: "Optimize workforce efficiency with intelligent task coordination",
//     features: [
//       "Assign and track on-site tasks in real time",
//       "Ensure workforce efficiency and accountability",
//       "Integrate with project timelines for better coordination",
//     ],
//     color: "from-lime-400/10 to-lime-400/5",
//   },
//   {
//     id: "issue-management",
//     title: "Issue Management",
//     icon: FaFileAlt,
//     description: "Streamline problem resolution with digital documentation",
//     features: [
//       "Log and document issues on-site instantly",
//       "Assign responsibilities for faster resolution",
//       "Maintain a digital issue history for transparency",
//     ],
//     color: "from-accent/10 to-accent/5",
//   },
//   {
//     id: "project-tracking",
//     title: "Project Tracking",
//     icon: FaChartBar,
//     description: "Monitor progress and make data-driven decisions in real-time",
//     features: [
//       "Real-time progress monitoring via AR & Cloud",
//       "Dashboard insights for stakeholders & management",
//       "Improve decision-making with live data",
//     ],
//     color: "from-secondary/10 to-secondary/5",
//   },
// ];

const handleDemo = () => {
  window.open("  https://docs.google.com/forms/d/e/1FAIpQLSc7jSSKcG4JBoG8mxn-wj4s5jOtw9igfsSzJcjJATuv20IYEg/viewform?usp=dialog", "_blank");
};

export default function ServicesPage() {
  return (<>
    <div className="min-h-screen bg-background">
      <h2 className="sr-only">Our Services</h2>
      <ProjectCapabilities />
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Transform Your{" "}
            <span className="text-lime-400">Construction Process</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Experience the future of construction with our comprehensive AR/VR
            solutions. Get started today and see the difference technology can
            make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleDemo}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-lime-400 text-slate-900 font-semibold hover:bg-lime-400/90 transition cursor-pointer hover:bg-gray-500 transition-colors">
              Schedule Demo
              <FiArrowRight />
            </button>
            <Toaster position="top-right" />
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

