const path = require('path');
const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || 0);
const PATH = process.cwd();
const PROJECTNAME = process.platform.indexOf('win') != -1 ? PATH.split('\\').pop() : PATH.split('/').pop();

module.exports = {
    entry : './main.js',
    
    output : {
        path : path.resolve( __dirname, "dist" ),
        filename : 'bundle.js',
        publicPath : PROD ? '/' + PROJECTNAME + '/dist/' : '/dist/',
    },

    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    loaders : {
                        css : 'style-loader?insertAt=top!css-loader',
                        less : 'style-loader?insertAt=top!css-loader!less-loader',
                        js : 'babel-loader'
                    }
                }
            },
            {
                test : /\.less$/,
                loader : 'style-loader?insertAt=top!css-loader!less-loader'
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : '/node_modules/',
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]?[hash]',
                    outputPath : 'assets/'
                }
            },
        ],
    },

    resolve : {
        alias : {
            'vue' : PROD ? 'vue/dist/vue.min.js' : 'vue/dist/vue.common.js'
        }
    },

    plugins : PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize : true,
        }),
    ] : [],
}
