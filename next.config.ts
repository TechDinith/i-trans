import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Must stay true: sitemap.xml and every canonical use trailing slashes.
  // With the default (false) each sitemap URL would 308-redirect.
  trailingSlash: true,
  compress: true,
};

export default nextConfig;
