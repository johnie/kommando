#!/usr/bin/env node
const { build, cliopts } = require('estrella');
const sveltePlugin = require('esbuild-svelte');
const postCssPlugin = require('@johnie/esbuild-plugin-postcss');
const isProduction = process.env.NODE_ENV === 'production';

build({
  entry: 'src/main.js',
  outdir: './public/build',
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  target: ['chrome58', 'firefox57'],
  plugins: [
    sveltePlugin(),
    postCssPlugin({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
  ],
});

cliopts.watch &&
  require('serve-http').createServer({
    port: 8181,
    pubdir: require('path').join(__dirname, 'public'),
  });
