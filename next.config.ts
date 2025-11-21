import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // HTTPS configuration for local development
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

// Add HTTPS support in development
if (process.env.NODE_ENV === "development") {
  const httpsConfig = {
    key: fs.readFileSync(path.join(process.cwd(), "certificates/localhost-key.pem")),
    cert: fs.readFileSync(path.join(process.cwd(), "certificates/localhost.pem")),
  };
  
  // Store in process.env for the dev server to use
  process.env.HTTPS_KEY = httpsConfig.key.toString();
  process.env.HTTPS_CERT = httpsConfig.cert.toString();
}

export default nextConfig;
