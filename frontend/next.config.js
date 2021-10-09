/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST || "0.0.0.0",
    API_PORT: process.env.API_PORT || "8000",
  }
}
