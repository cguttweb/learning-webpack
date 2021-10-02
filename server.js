const express = require('express')
const webpack = require('webpack')
const webpackDevMiddle = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

// Tells express to use webpack-dev-middleware and use webpack config as a base
app.use(
  webpackDevMiddle(compiler, {
  publicPath: config.output.publicPath
})
)

// Serve files on port 3000
app.listen(3000, function(){
  console.log(`App running on port 3000`)
})