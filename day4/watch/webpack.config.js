const path = require('path');
module.exports = {
    // watch: true,
    // 模式
    mode: 'development',
    // mode: 'production',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [{
                // 匹配后缀为css的文件
                test: /\.css$/,
                // 用两个加载器style-loader和css-loader
                use: ['style-loader', 'css-loader']
            },
            {
                // 匹配后缀为css的文件
                test: /\.html|htm$/,
                // 用两个加载器style-loader和css-loader
                use: ['html-loader']
            }

        ]
    },

};