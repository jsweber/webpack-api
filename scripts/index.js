const webpack = require('webpack');
const webpackDevConfig = require('./webpack.dev');

console.log(process.env.PROJECT_ENV);

const compiler = webpack(webpackDevConfig);

compiler.run((err, stats) => {
    console.log(err, stats.toJson())

    compiler.close(() => {});
});
