const { merge } = require('webpack-merge');
const path = require('path')

const common = require('./webpack.common.js');

module.exports = merge(common, {

  mode: 'development',

  devServer:{
    static:{
        directory: path.resolve(__dirname,'dist')
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
},

});



