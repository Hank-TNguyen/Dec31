const path = require('path');

module.exports = {
    entry: {
        component: [
            './public/javascripts/Rendering.jsx',
            './public/javascripts/CentreQuote.jsx',
            './public/javascripts/AuthorModal.jsx',
            './public/javascripts/LeftNav.jsx',
            './public/javascripts/Homepage.jsx',
            './public/javascripts/ImageSlider.jsx'
        ]
    },
    output: {
        path: path.resolve('public/javascripts'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
                cacheDirectory: true, //false for production
                babelrc: false,
                presets: ["babel-preset-es2015", "react"],
                plugins: ["transform-es2015-arrow-functions", "transform-class-properties"]
            }
        }]
    }
}