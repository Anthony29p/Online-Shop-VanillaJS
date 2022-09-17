const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:{
        index: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean: true,
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