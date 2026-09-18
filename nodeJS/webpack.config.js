const path = require('path')
const HtmlPlagin = require('html-webpack-plugin')
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./public")
        },
        port: 7777,
        client: {
            overlay: {
                errors: false,
                warnings: false,
            }
        }
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }
    ],
    },
    plugins: [
        new CleanPlugin(),
        new HtmlPlagin({
            template: './public/index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: './static', to: './static' }],
        })
    ]
}