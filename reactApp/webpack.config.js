//Make the path a constant path
const path = require('path');

//Config object of key value pairs
var config = {
    
    //Entry point for webpack: main.js
    entry: './main.js',
    
    //Output point for webpack: index.js in current dir.
    output: {
        //Resolve the constant path for webpack
        path: path.resolve('./', 'dist'),
        filename: 'index.js'
    },
    
    //devServer port for webpack: port 8080
    devServer: {
        inline: true,
        port: 8080
    },
    
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;