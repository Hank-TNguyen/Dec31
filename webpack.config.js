const path = require('path');

module.exports = [
    {
        entry: {
            component: [
                './public/javascripts/Rendering.jsx',
                './public/javascripts/CentreQuote.jsx',
                './public/javascripts/AuthorModal.jsx',
                './public/javascripts/LeftNav.jsx',
                './public/javascripts/Footer.jsx',
                './public/javascripts/Main.jsx',
                './public/javascripts/Homepage.jsx',
                './public/javascripts/ImageSlider.jsx'
            ]
        },
        output: {
            path: path.resolve('public/javascripts/dists'),
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
                    plugins: ["transform-class-properties"]
                }
            }]
        },
        devtool:  'cheap-module-source-map'
    },
    {
        entry: {
            component: [
                './public/javascripts/components/Utils/ClipboardCopy.jsx',
                './public/javascripts/components/Utils/UtilsController.jsx'
            ]
        },
        output: {
            path: path.resolve('public/javascripts/dists'),
            filename: 'utils_min.js'
        },
         module: {
            rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true, //false for production
                    babelrc: false,
                    presets: ["babel-preset-es2015", "react"],
                    plugins: ["transform-class-properties"]
                }
            }]
        },
        devtool:  'cheap-module-source-map'
    }
]