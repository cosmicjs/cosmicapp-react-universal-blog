var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react', 'stage-1', 'stage-2']
              },
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
            },
            {
                test: /\.css$/,
                loader: 'css'
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader:'url-loader?limit=1024&name=public/img/[name].[ext]'
                //loader: 'url?limit=50000&name=img/[name]' // limit ~50kb
            },
            {
                test: /\.(otf|eot|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=1024&name=public/fonts/[name].[ext]'
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
