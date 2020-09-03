const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
// 导入在内存中生成HTML页面的插件
// 只要是插件，都一定要放到plugins节点中去
// 这个插件有两个作用：
// 1、自动在内存中根据指定页面生成一个内存的页面
// 2、自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
// 这个配置文件是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 入口，表示要使用webpack打包那个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件的相关配置
    output: {
        path:path.join(__dirname, './dist'), // 指定打包好的文件要输出到那个目录中去
        filename: 'bundle.js' // 这是指定输出的文件的名称
    },
    devServer: { // 这是配置dev-server命令参数的第二种形式
        open: true, // 自动打开浏览器
        // prot: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新的第一步
    },
    module: {
        // 这个节点用于配置所有的第三方模块加载器
        rules: [
            // 这是所有第三方模块的匹配规则
            {
                // 配置处理.css文件的第三方loader规则
                // 这两个loader的调用规则是从右到左，先用css-loader 处理，再用style-loader处理
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 配置处理.less文件的第三方loader规则
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 配置处理.scss文件的第三方loader规则
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // new了一个热更新的模块对象，启用热更新的第三步
        new htmlWebpackPlugin({
            // 创建一个在内存中生成HTML页面的插件，可以接受一个配置对象的参数
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        })
    ],
    mode: 'development'
}