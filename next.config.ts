// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
