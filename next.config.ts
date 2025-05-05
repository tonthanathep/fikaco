import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://api.dicebear.com/9.x/pixel-art/webp")],
  },
  /* config options here */
};

export default nextConfig;
