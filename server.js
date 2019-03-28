const path = require('path'),
   express = require('express'),
   webpack = require('webpack'),
   webpackConfig = require('./webpack.config.js'),
   server = express(),
   port = process.env.PORT || 3000;

server.listen(port, () => { console.log(`Server is listening on port ${port}`) });

server.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

let compiler = webpack(webpackConfig);
server.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
server.use(require('webpack-hot-middleware')(compiler));
server.use(express.static(path.resolve(__dirname, 'dist')));