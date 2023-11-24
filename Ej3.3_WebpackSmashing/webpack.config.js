const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ConcatPlugin = require('@mcler/webpack-concat-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        // main: './src/js/main.js',
        // plugins: './src/js/plugins.js',
        // modenizr: './src/js/vendor/modernizr-2.6.1.min.js',
        // jquery: './src/js/vendor/jquery-1.8.0.min.js'
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
    //   new ConcatPlugin({
    //     name: 'concat',
    //     outputPath: './js/concat',
    //     fileName: '[name].[hash:8].js',
    //     filesToConcat: [
    //       './src/js/main.js',
    //       './src/js/plugins.js',
    //     //   './src/js/vendor/modernizr-2.6.1.min.js',
    //       './src/js/vendor/jquery-1.8.0.min.js'
    //     ],
    //     attributes: {
    //       async: true
    //     }
    //   }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
      runtimeChunk: 'single',
      realContentHash: false,
      minimizer: [
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
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