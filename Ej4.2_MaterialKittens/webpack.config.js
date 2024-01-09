const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Smashing',
        // Load a custom template (lodash by default)
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
      runtimeChunk: 'single',
      realContentHash: false,
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
        new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
              mangle: true,
            },
          }),
      ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 51200,
    },
};