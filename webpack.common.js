const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
module.exports = {
    entry : path.resolve(__dirname,'src/scripts/index.js'),
    resolve : {
        alias : {
            '@' : path.resolve(__dirname,'src/scripts/'),
        },
    },
    output : {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module : {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
          }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/public/'),
                to: path.resolve(__dirname, 'dist/'),
              },
            ],
        }),
    ]
}