import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 new static export style
  images: {
    unoptimized: true, // (needed if you use Next Image in static export)
  },
};

export default nextConfig;
