"use client";

import { Toaster } from "react-hot-toast";
import { FiArrowRight } from "react-icons/fi";
import { ProjectCapabilities } from "@/components/ProjectCapabilities";

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

