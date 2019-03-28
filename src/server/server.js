const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const server = express();

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

const compiler = webpack(webpackConfig);
server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true },
}));
server.use(require('webpack-hot-middleware')(compiler));

server.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = server;
