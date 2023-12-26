/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains : ['https://crmprospectos.herokuapp.com', 'localhost', 'http://127.0.0.1:3000/', 'docs-teltan.s3.amazonaws.com'], // <== Domain name
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs-teltan.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
      {
        protocol: 'https',
        hostname: 'https://crmprospectos.herokuapp.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  }
}

module.exports = nextConfig
