import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.js'

const server = express();

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

const compiler = webpack(webpackConfig);
server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.path, stats: { colors: true },
}));
server.use(require('webpack-hot-middleware')(compiler));

server.use(express.static(path.resolve(__dirname, '../../dist')));
server.use(express.json())

const authRoutes = require('./routes/auth')

server.use('/api/v1/auth', authRoutes)

server.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
})

export default server
