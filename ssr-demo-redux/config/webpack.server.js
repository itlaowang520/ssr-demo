const path = require('path');
const webpackNodeExtennals = require('webpack-node-externals'); // 排除node_modules依赖，server运行在服务器，不需要将所有依赖打包

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, '../src/server.js'),
    output: {
        filename: 'bundle_server.js',
        path: path.resolve(__dirname, '../build')
    },
    externals: [webpackNodeExtennals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
