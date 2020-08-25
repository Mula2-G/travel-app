const path = require('path')

const postCSSPlugins = [
    require ('postcss-import'),
    require ('postcss-mixins'),
    require ('postcss-simple-vars'),
    require ('postcss-nested'),
    require ('autoprefixer')

]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html') //watch for any file that end with '.html' ('*.html', accepting any subfolder with '/**/')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, //hot module replacement, allows webpack to inject css and js saved changes into the browser's memory on the ride without a reload/refresh
        port: 3000, //would have a default value of 8080
        host: '0.0.0.0' //this allows any devices connected to the same network to access the webpack devserver from this computer
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}