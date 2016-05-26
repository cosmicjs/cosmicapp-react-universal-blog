const path = require('path');
var webpack = require("webpack");
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, './app-client.js'),
  build: path.join(__dirname, './public'),
  fonts: path.join(__dirname, './fonts'),
  cssLoc: path.join(__dirname, './styles'),
  images: path.join(__dirname, './images')
};


if(process.env.NODE_ENV === 'development'){
  var loaders = ['react-hot','babel']
} else {
  var loaders = ['babel']
}

module.exports = {
    devServer: {
        inline: true,
        port: 8080,
        outputPath: PATHS.build
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
    module: {
        loaders: [

            {
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
                include: PATHS.images,
                loader: "file-loader?limit=1024&name=img/[name].[ext]"
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
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.DefinePlugin({
          'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
        }),
        new ExtractTextPlugin("css/custom.css"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
}
