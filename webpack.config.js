const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require('path');

module.exports = {      
    
    mode: 'development',
    
    
    entry: './src/client/index.js',  
    output: {    
        filename: 'main.js',    
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [    
        new HtmlWebpackPlugin({        
            filename: 'index.html',
            inject: true,
            title: 'Tic tac toe'
        }),
        new WebpackCleanPlugin(["dist"], {exclude: ["index.html"]})
    ],
   devServer: {    
        port: 3000,    
        open: true,    
        proxy: {      
            "/api": "http://localhost:8080"    
        }
    },
    
    
};