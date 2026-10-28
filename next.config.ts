import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crests.football-data.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "**.fifa.com",
      },
    ],
  },
};

// Sentry source-map uploads can be enabled later via:
//   npx @sentry/wizard@latest -i nextjs
// which will auto-patch this file with withSentryConfig()
export default nextConfig;
