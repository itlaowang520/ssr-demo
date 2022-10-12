const path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: path.resolve(__dirname, '../src/client.js'),
    output: {
        filename: 'bundle_client.js',
        path: path.resolve(__dirname, '../build/public')
    },
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
