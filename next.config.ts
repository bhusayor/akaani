import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The site served .html paths for months, so bookmarks, shared links and
    // anything already indexed still point at them. Without these they 404.
    const legacy = [
      ["/index.html", "/"],
      ["/meals.html", "/meals"],
      ["/dietitian.html", "/dietitian"],
      ["/recipes.html", "/recipes"],
      ["/blog.html", "/blog"],
      ["/article.html", "/article"],
      ["/about.html", "/about"],
      ["/contact.html", "/about#contact"],
      ["/disclaimer.html", "/disclaimer"],
      ["/terms.html", "/terms"],
      ["/privacy.html", "/privacy"],
    ];
    return [
      { source: "/contact", destination: "/about#contact", permanent: true },
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
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
