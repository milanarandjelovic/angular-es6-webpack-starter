import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

module.exports = new WebpackConfig().merge({
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  context: path.join(__dirname, '/src/app'),
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: "pre",
      },

      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: /node_modules/
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceComments: true
            }
          }
        ]
      },

      {
        test: /\.html$/,
        loader: "ng-cache-loader?prefix=[dir]/[dir]"
      },

      {
        test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
        loader: 'url-loader?limit=300'
      }
    ]
  },

  plugins: [
    // list of additional plugins
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),

    new HtmlWebpackPlugin({
      title: 'Starter Theme',
      template: 'index.ejs',
      inject: 'body'
    }),

    new CopyWebpackPlugin([
      // { from: 'offline.html', to: 'offline.html' },
      // { from: 'service-worker.js', to: 'service-worker.js' },
      // { from: 'manifest.json', to: 'manifest.json' }
    ]),

    new WebpackNotifierPlugin({
      title: 'Webpack compiled successfully',
      alwaysNotify: true
    })
  ]
})
