const { merge } = require('webpack-merge');
const path = require('path')

const common = require('./webpack.common.js');

module.exports = merge(common, {

  mode: 'development',

  devServer:{
    static:{
        directory: path.resolve(__dirname,'dist')
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
},

});



