var Path = require('path');
var Webpack = require('webpack');
var DefinePlugin = Webpack.DefinePlugin;

module.exports = function(config) {
    config.set({
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARNING,
        autoWatch: true,
        singleRun: false,
        browsers: [ 'Chrome' ],
        frameworks: [ 'chai', 'mocha' ],
        files: [
            'tests.bundle.js',
        ],

        preprocessors: {
            'tests.bundle.js': [ 'webpack', 'sourcemap' ]
        },

        plugins: [
            'karma-chai',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],

        reporters: [ 'progress' ],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        exclude: Path.resolve('./node_modules'),
                        query: {
                            presets: [ 'es2015', 'react' ]
                        }
                    },
                    {
                        test: /\.jpg|\.mp4/,
                        loader: 'bin-loader',
                    }
                ]
            },
            resolve: {
                extensions: [ '.js', '.jsx' ],
                modules: [ 'src', 'node_modules' ].map((folder) => {
                    return Path.resolve(`./${folder}`);
                })
            },
            plugins: [
                new DefinePlugin({
                    'process.env.NODE_ENV': '"production"',
                    'process.env.PLATFORM': '"browser"',
                }),
            ],
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,

                // these exist only in React 15.5+
                'react-dom/test-utils': true,
                'react-test-renderer/shallow': true,
            }
        },

        webpackMiddleware: {
            noInfo: true,
        },
    })
};
