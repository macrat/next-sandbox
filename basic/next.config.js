const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE == 'true',
});


const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});


const fs = require('fs');

const posts = fs.readdirSync('./pages/post').filter(name => name.match(/\.mdx$/));


module.exports = withBundleAnalyzer(withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],
    env: {
        posts: JSON.stringify(posts),
    },
}));
