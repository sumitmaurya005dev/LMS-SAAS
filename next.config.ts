import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typescript:{
    ignoreBuildErrors:true
  },
  images:{
    remotePatterns:[
        {hostname:'img.clerk.com'}
    ]
  }
};

export default nextConfig;
