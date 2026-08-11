import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BuildinReality",
    short_name: "BuildinReality",
    description:
      "BuildinReality transforms construction workflows with AR/VR technology, immersive project visualization, and smarter collaboration.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#a3e635",
    lang: "en",
  };
}
