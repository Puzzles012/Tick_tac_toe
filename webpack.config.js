const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = {      
    
    mode: 'development',
    
    devServer: {    
        port: 3000,    
        open: true,    
        proxy: {      
            "/api": "http://localhost:8080"    
        }
    },
    plugins: [    
        new HtmlWebpackPlugin({        
            title: 'Greeting page'    
        }),
        new WebpackCleanPlugin(["dist"], {exclude: ["index.html"]})
    ],
    entry: './src/client/index.js',  
    output: {    
        filename: 'main.js',    
        path: path.resolve(__dirname, 'dist')
    }
    
};