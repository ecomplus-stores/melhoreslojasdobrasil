const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/EcOrderInfo.html': path.resolve(__dirname, 'template/js/html/EcOrderInfo.html'),
        './js/EcOrderInfo.js': path.resolve(__dirname, 'template/js/js/EcOrderInfo.js'),
    }
  }
})