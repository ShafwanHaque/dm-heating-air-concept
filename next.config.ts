import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "le-cdn.hibuwebsites.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
