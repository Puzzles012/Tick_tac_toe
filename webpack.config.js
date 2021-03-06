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
    /*
        new HtmlWebpackPlugin({        
            template: source + '/index.html'
        }),
        new WebpackCleanPlugin(["dist/main.js"]),*/
        
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
   devServer: {    
        port: 3000,    
        open: true,    
        proxy: {      
            "/api": "http://localhost:8080"    
        }
    },
    
    
};