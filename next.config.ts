import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 new static export style
  images: {
    unoptimized: true, // 👈 disable image optimization for static export
  },
  devIndicators: false,
};

export default nextConfig;
