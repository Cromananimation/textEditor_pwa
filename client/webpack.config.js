const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const { InjectManifest } = require('workbox-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || "/"

module.exports = () => {
  return {
    plugins: [
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
      new WebpackPwaManifest({
        filename: 'manifest.json',
        name: 'textEditor',
        short_name: 'TE',
        description: 'A simple text editor',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#31a9e1',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          }
        ]
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
/*module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],*/

   /* module: {
      rules: [
        {
          test: /.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']*/
