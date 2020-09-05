// Importy
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// Export configu
module.exports = {
    // Hlavní vstupní soubor
    entry: './js/main.js',
    // Režim
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue'],
    },
    module: {
        rules: [
            // JS soubory
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // Vue soubory
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // CSS soubory
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            // SCSS soubory (sass)
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    // Výsledný output
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'assets'),
    },
    // Server pro reload
    devServer: {
        publicPath: '/assets/',
    },
    // Pluginy
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};