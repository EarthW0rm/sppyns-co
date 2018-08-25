const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function(env) {

    return {
        entry: './src/index.jsx'
        , output:{
            path: __dirname + '/dist'
            , filename: './app.js'
        }
        ,devServer:{
            port: 81
            , contentBase: './dist'
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
                            name: 'images/[hash]-[name].[ext]'
                        } 
                    }]
                }
            ]
        }
        , plugins: [
            new ExtractTextPlugin({
                filename: 'app.css'
                , allChunks: true
            })
            , new FaviconsWebpackPlugin('./src/images/_company_icon.png')
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
        ]
    }
};