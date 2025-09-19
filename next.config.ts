import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 new static export style
  devIndicators: false,
};

export default nextConfig;
