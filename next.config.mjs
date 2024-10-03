/** @type {import('next').NextConfig} */
import nextra from "nextra"

const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "flowbite.s3.amazonaws.com"
            },
            {
                hostname: "cdn1-production-images-kly.akamaized.net"
            },
            {
                hostname: "awsimages.detik.net.id"
            },
            {
                hostname: "cdns.klimg.com"
            },
            {
                hostname: "uinsgd.ac.id"
            }
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

export default withNextra(nextConfig);
