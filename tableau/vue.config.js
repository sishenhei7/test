const webpack = require('webpack');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

const tableauApi = 'https://tableau.proxy.web.yimian.com.cn/';

module.exports = {
  devServer: {
    proxy: {
      '/tableau': {
        target: tableauApi,
        changeOrigin: true,
        pathRewrite: {
          '^/tableau': ''
        },
      },
    },
  },
};