// main.js是我们项目的js入口文件

// 1.导入jquery
// 浏览器无法直接识别ES6语法，需要通过webpack进行处理和打包
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

// 使用webpack-dev-server这个工具，来实现自动打包编译的功能
// 1、运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖，
// 但是他是在本地安装的，所以不能直接当做脚本命令直接在终端运行，只有全局安装的工具才能在终端中正常执行
// 因此可以在package.json中配置要执行的命令
// 并且要注意的是，webpack-dev-server要求在本地项目中也安装webpack，要本地装一下
// 运行之后，可以从Project is running at http://localhost:8081/ 进入到项目的根路径
// 打包好的bundle.js想要访问的话，直接通过根路径http://localhost:8081/bundle.js就能访问
// index.html页面中我们引入的bundle.js是dist文件夹中的，但是webpack-dev-server自动打包生成的bundle.js是在根目录下的
// 这两个不是一样的，所以我们修改代码保存后，页面上并不会更改，因为改的是根目录下的bundle.js、
// 所以我们要引入根目录下的bundle.js，这个打包生成的bundle.js文件并没有存放到实际的物理磁盘上，而是直接托管到了内存中
// 所以在项目根目录中根本找不到这个打包好的bundle.js，放到内存中的好处就是读取速度快