import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images:{
    remotePatterns: [{hostname: "picsum.photos"},{hostname:"deltarune.com"}],
  },
  experimental:{
    globalNotFound: true
  }
  
};

export default nextConfig;
