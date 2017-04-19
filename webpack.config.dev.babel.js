import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true
  },
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname, '/src/app/js/app.js'),
    vendor: ['angular', 'angular-ui-router'],
  },
  plugins: [
    // list of additional plugins
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', vendor: 'vendor.bundle.js' }),
    new webpack.LoaderOptionsPlugin({ debug: true })
  ]
})
