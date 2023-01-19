/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        console.log('Rewrites called')
        return [
            {
                source: '/',
                destination: 'http://localhost:5500/',
            },
            {
                source: '/:path*',
                destination: 'http://localhost:5500/:path*',
            },
        ]
    },
}
