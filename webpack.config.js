const path = require('path')
// 这个配置文件是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 入口，表示要使用webpack打包那个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件的相关配置
    output: {
        path:path.join(__dirname, './dist'), // 指定打包好的文件要输出到那个目录中去
        filename: 'bundle.js' // 这是指定输出的文件的名称
    },
    mode: 'development'
}