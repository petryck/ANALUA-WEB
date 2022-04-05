// const path = require('path')

// module.exports = {
//   mode: 'development',
//   devtool: 'eval-cheap-source-map',
//   entry: './public/assets/js/controller.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, '../public/assets/js')
//   }
// }


const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/assets/js/controller.js',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/assets/js'),
  },
};