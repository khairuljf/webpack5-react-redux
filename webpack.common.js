const path = require('path');


module.exports = {
    entry: ['./src/app.js'],
    //mode: "development",
    // entry: './src/playground/hoc.js',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /(node_modules)/
        },
            {
                test: /\.s?css$/, // Thats mean s optional // Scss & css will load
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'

                ]
            }]
    },
};

