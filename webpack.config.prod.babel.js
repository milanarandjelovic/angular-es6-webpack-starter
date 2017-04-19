import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import ngAnnotatePlugin from 'ng-annotate-webpack-plugin';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  entry: path.join(__dirname, '/src/app/js/app.js'),
  plugins: [
    // list of additional plugins
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
})
