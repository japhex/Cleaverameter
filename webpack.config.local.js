const path = require('path');

module.exports = {
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            __dirname + '/node_modules',
            __dirname + '/src/client/js'
        ]
    },
    entry: ['./src/client/js/main.jsx'],
    output: {
        path: path.resolve('./public'),
        filename: 'scripts/main.build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
