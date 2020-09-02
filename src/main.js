// main.js是我们项目的js入口文件

// 1.导入jquery
// 浏览器无法直接识别ES6语法，需要通过webpack进行处理和打包
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

// 使用webpack-dev-server这个工具，来实现自动打包编译的功能
// 1、运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖