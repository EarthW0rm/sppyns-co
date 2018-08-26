const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {

    return {
        mode: 'production'
        , entry: './src/index.jsx'
        , output:{
            path: __dirname + '/public'
            , filename: './sppyns-co-[hash].js'
        }
        ,devServer:{
            port: 81
            , contentBase: './public'
        }
        , resolve:{
            extensions: ['.js', '.jsx', '.scss', '.css', '.html', 'jpg']
            , alias: {
                modules: __dirname + '/node_modules'
            }
        }    
        , module: {
            rules: [
                {
                    test: /\.(jsx|js)$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                        {
                            loader: 'babel-loader'
                            , options: {
                                presets: [ ['@babel/preset-env', {
                                    "targets": {
                                       "browsers": ["last 2 versions", "ie >= 11"]
                                    }
                                 }], '@babel/preset-react']
                                , plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                            }
                        }
                    ]
                }
                ,{
                    test: /\.css$/
                    , use: ExtractTextPlugin.extract({
                        use: [ 'css-loader']
                    })
                }
                ,{
                    test: /\.scss$/
                    , exclude: /(node_modules|bower_components)/
                    , use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                }            
                ,{
                    test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/
                    , use: [
                        {
                        loader: "file-loader",
                        }
                    ]
                }
                
                ,{
                    test: /\.html$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                    ]
                }
                ,{
                    test: /\.(png|jp(e*)g)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/sppyns-co-[hash].[ext]'
                        } 
                    }]
                }
            ]
        }        
        , plugins: [
            new ExtractTextPlugin({
                filename: 'sppyns-co-[hash].css'
                , allChunks: true
            })
            , new FaviconsWebpackPlugin('./src/images/_company-icon.png')
            , new HtmlWebPackPlugin({
                template: "./src/index.html",
                favicon: 'src/images/_company-icon.png',
                filename: "./index.html"
            })
            ,new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
            , new webpack.DefinePlugin({
                'process.env': {
                    'API_URL': JSON.stringify(env.API_URL)
                }
            })
            , new UglifyJSPlugin({
                test: /\.js($|\?)/i
                , sourceMap: false
                , extractComments: true
            })
        ]
    }
};