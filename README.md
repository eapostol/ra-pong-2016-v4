# ra-pong-2016-v4
A Simple Pong Game, created with ES6 Javascript.

Steps:
1. Create your Git Repo for the project
2. Create a local directory for the project, usually with the same
directory name as the title of the repo.
3. npm init. Fill out the appropriate information for the project.
4. Use NPM to install the following modules (with --save-dev option)
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.15.0"
    
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "node-sass": "^3.8.0",
    "sass-loader": "^4.0.0",
    "style-loader": "^0.13.1",
    "css-loader": "^0.24.0",
    "file-loader": "^0.9.0",
    
5. create your webpack.config.js like below. remember,
Webpack is really just about configuring a build for your file,
writtin in Javascript
   
/**
 * Created by Edward_J_Apostol on 2016-08-25.
 */
const join = require('path').join;
// const resolve = require('path').resolve; // will use at a later stage
const webpack = require('webpack');

const distDir = join(__dirname,'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        path: distDir,
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                include: './src/',
                exclude: /node_modules/
            }
        ]
    }
    ,
    devtool: 'source-map',
    devServer: {
        // contentBase: process.cwd() optional
        contentBase: process.cwd(),

        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // display only errors to reduce the amount of output
        stats: 'errors-only',

        // parse host and port from env so this is easy
        // to customize
        host: "127.0.0.1",
        port: "8081"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

7. Create the index.html page as described in the slides for the pong project.
8. Create the Game.js and index.js - Game.js is using classes as a test



    
