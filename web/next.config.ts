import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/personal-site",
  basePath: "/personal-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
