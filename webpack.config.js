const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
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
    plugins: [
        new webpack.HotModuleReplacementPlugin() // new了一个热更新的模块对象，启用热更新的第三步
    ],
    mode: 'development'
}