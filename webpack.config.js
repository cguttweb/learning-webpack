const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    print: {
      import: './src/print.js',
    },
    new: {
      import: './src/new-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    // This is needed if using multiple entry points on a single HTML page explanation here: https://bundlers.tooling.report/code-splitting/multi-entry/
    // Although using multiple entry points per page is allowed in webpack, it should be avoided when possible in favor of an entry point with multiple imports: entry: { page: ['./analytics', './app'] }. This results in a better optimization and consistent execution order when using async script tag
    // runtimeChunk: 'single'
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(s|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}