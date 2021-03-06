// 导入模块
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]
            },
            {
                test: /\.(ttf|png)$/,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': './components'  // 设置别名, 用于代替后面的路径
        },
        extensions: ['.vue', '.js', '.json', '*']  // 自动补齐扩展名
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html', // 该插件会根据该参照文件, 生成一个文件
            filename: 'index.html' // 生成的文件名为index.html, 生成的该文件以及bundle.js是看不见的, 默认会被提交到web-dev-server服务器上
        })
    ]
}