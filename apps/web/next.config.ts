import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  transpilePackages: ["@packages/api", "@packages/auth"],
};

export default nextConfig;
