// webpack.config.js
const webpack = require('webpack')
//copy files
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const PATHS = {
  app: path.join(__dirname, './app-client.js'),
  build: path.join(__dirname, './public'),
  fonts: path.join(__dirname, './fonts'),
  cssLoc: path.join(__dirname, './styles'),
  imagesLoc: path.join(__dirname, './images')
};

if(process.env.NODE_ENV === 'development'){
  var loaders = ['react-hot','babel']
} else {
  var loaders = ['babel']
}

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //bundle app from here
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: PATHS.build
  },
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: PATHS.build
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=stage-1,presets[]=stage-2,presets[]=react,plugins[]=transform-runtime'],
      exclude: /node_modules/
    },
    { test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    },
   {
       test: /\.(jpg|jpeg|gif|png|svg)$/,
       exclude: /node_modules/,
       include: PATHS.imagesLoc,
       loader: "file-loader?name=img/[name].[ext]"
   },
   {
     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
     exclude: /node_modules/,
     include: PATHS.fonts,
     loader: 'file-loader?limit=1024&name=fonts/[name].[ext]'
   },
   { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
     exclude: /node_modules/,
     include: PATHS.fonts,
     loader: "file-loader?limit=1024&name=fonts/[name].[ext]"
   }
  ]},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
    }),
    new CopyWebpackPlugin([
      { from: 'images/', to: 'img/' }
    ]),
    new ExtractTextPlugin( 'css/custom.css', {
      publicPath: PATHS.css,
      allChunks: true 
    })
 ]
};
