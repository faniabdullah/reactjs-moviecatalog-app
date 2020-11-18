const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/scripts/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Movie Catalogue',
      display: 'standalone',
      start_url: '/index.html',
      short_name: 'MovieCatalogue',
      description: 'Example using ReactJs , all data obtained from TheMovieDb.org',
      background_color: '#e53935',
      theme_color: '#ff5231',
      crossorigin: null,
      inject: true,
      fingerprints: false,
      ios: true,
      publicPath: null,
      includeDirectory: true,
      ios: true,
      icons: [
        {
          src: path.resolve( 'src/public/favicon.png'),
          sizes: [72, 96, 128, 144, 192, 256, 384, 512],
          purpose: 'any maskable',
          destination: path.join('images'),
        },
      ],
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
    }),
  ],
};
