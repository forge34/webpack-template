const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {

    app: './src/index.js',

  },

  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },

  plugins: [

    new HtmlWebpackPlugin({

      title: 'Title',
      template:'./src/html/index.html'

    }),

  ],

  output: {

    filename: '[name].bundle.js',

    path: path.resolve(__dirname, 'dist'),

    clean: true,

  },

};