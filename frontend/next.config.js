/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BACKEND_HOST: process.env.BACKEND_HOST || "backend",
    BACKEND_PORT: process.env.BACKEND_PORT || "8000",
  }
}
