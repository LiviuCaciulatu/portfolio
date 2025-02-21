/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Ensures images work in static mode
  },
};

export default nextConfig;

