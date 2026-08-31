import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The legacy static site at the repo root also has a lockfile; pin the
  // workspace root so Turbopack never guesses the wrong one.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [{ source: "/contact", destination: "/about#contact", permanent: true }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "useakaani.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
