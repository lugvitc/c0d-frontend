/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  basePath: "/c0d-frontend",
  assetPrefix:"/c0d-frontend",
  output: "export",
  reactStrictMode: true,
};

export default config;
