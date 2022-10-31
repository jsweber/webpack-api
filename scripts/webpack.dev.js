const path = require('path');

const env = process.env.PROJECT_ENV;

const envExtensions = [`.${env}.js`, `.${env}.ts`];

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm'].concat(envExtensions),
    }
}