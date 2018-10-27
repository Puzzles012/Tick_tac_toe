const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanPlugin = require("clean-webpack-plugin");

const path = require('path');

var dist = path.resolve(__dirname, "dist");
var source = path.resolve(__dirname, "src/client");

module.exports = {      
    
    mode: 'development',
    
    
    entry: './src/client/index.js',  
    output: {    
        filename: 'main.js',    
        path: dist
    },
    plugins: [    
       
       // new WebpackCleanPlugin(["dist"], {exclude: ["index.html"]})
    ],
   devServer: {    
        port: 3001,    
        open: true,    
        proxy: {      
            "/api": "http://localhost:8080"    
        }
    },
    
    
};