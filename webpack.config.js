const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanPlugin = require("clean-webpack-plugin");

const path = require('path');

var dist = path.resolve(__dirname, "dist");
var source = path.resolve(__dirname, "src/client");

module.exports = {      
    
    mode: 'development',
    
<<<<<<< HEAD
    devServer: {    
        port: 3001,    
=======
    
    entry: './src/client/index.js',  
    output: {    
        filename: 'main.js',    
        path: dist
    },
    plugins: [    
        new HtmlWebpackPlugin({        
            template: source + '/index.html'
        }),
       // new WebpackCleanPlugin(["dist"], {exclude: ["index.html"]})
    ],
   devServer: {    
        port: 3000,    
>>>>>>> bd0b93a77dee45900999cbfd738e89469c970dcd
        open: true,    
        proxy: {      
            "/api": "http://localhost:8080"    
        }
    },
    
    
};