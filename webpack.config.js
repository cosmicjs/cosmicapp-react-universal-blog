// webpack.config.js
var webpack = require('webpack')
//copy files
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

if(process.env.NODE_ENV === 'development'){
  var loaders = ['react-hot','babel']
} else {
  var loaders = ['babel']
}
module.exports = {
  devtool: 'eval',
  //bundle app from here
  entry: './app-client.js',
  output: {
    path: __dirname + '/public/dist',
    //output it to /public/dist/bundle.js
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: path.join(__dirname +  '/public/')
},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=stage-1,presets[]=stage-2,presets[]=react,plugins[]=transform-runtime'],
      exclude: /node_modules/
    },
    {
     test: /\.scss$/,
     loaders: ["style", "css", "sass"]
    }
  ]},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
    }),
    new CopyWebpackPlugin([
      { from: 'images/', to: 'img/' }
    ])
 ]
};
