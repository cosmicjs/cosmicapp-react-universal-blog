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
  var loaders = ['babel']
} else {
  var loaders = ['babel']
}

module.exports = {
  debug: true,
  devtool: "#eval-source-map",
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
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/
    },
    // Extract SCSS
    { test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    },
   {
       test: /\.(jpg|jpeg|gif|png|svg)$/,
       exclude: /node_modules/,
       include: PATHS.imagesLoc,
       loader: "file-loader?name=img/[name].[ext]"
   },
   //Problem with snap not working
   {
    test: require.resolve('snapsvg'),
    loader: 'imports-loader?this=>window,fix=>module.exports=0'
    },
   // Font Definitions
   { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
     exclude: /node_modules/,
     loader: 'url-loader?importLoaders=1&limit=100000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
   }
  ]},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
    }),
    new CopyWebpackPlugin([
      { from: 'images/', to: 'img/' },
      { from: 'fonts/', to: 'fonts/' }
    ]),
    new ExtractTextPlugin("css/custom.css", {
        allChunks: true
      }),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('development')
    }
}),
 ]
};
