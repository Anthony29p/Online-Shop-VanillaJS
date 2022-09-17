const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config();

const {PORT} = process.env;

module.exports={
    mode: 'development',
    entry:{
        index: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean: true,
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist')
        },
        port: PORT,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            title: 'Online-Shop-VanillaJS',
            filename:'index.html',
            template:'src/index.html',
        }),
    ],
}