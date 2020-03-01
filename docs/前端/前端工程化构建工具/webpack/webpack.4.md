## webpack

> [官网地址：][https://webpack.js.org/] https://webpack.js.org/

#### 创建基本的webpack4.x项目

1. 运行`npm init -y`快速初始化项目

2. 在项目根目录创建 `src`源代码目录和 `dist`产品目录

3. 在 src 目录下创建 `index.html`

4. 使用cnpm 安装webpack，运行 `cnpm i webpack webpack-cli -D`
   
5. webpack4.x有一个特性，默认约定大于配置，默认打包入口路径是 src -> index.js

   

# [webpack 中常用安装插件的命令](https://www.cnblogs.com/xingsai/p/6502139.html)



1：npm install html-webpack-plugin --save-dev //自动快速的帮我们生成HTML。
2：npm install css-loader style-loader --save-dev//样式文件，我们需要两种loader，css-loader 和 style－loader，css-loader会遍历css文件，找到所有的url(...)并且处理。style-loader会把所有的样式插入到你页面的一个style tag中。
3:npm install babel-loader css-loader style-loader --save-dev// 安装加载器(babel-loader 进行转码
css-loader 对 css 文件进行打包
style-loader 将样式添加进 DOM 中)
4：npm install sass-loader node-sass --save-dev//css预编译程序，还需要添加node-sass来解析sass文件
5：npm install url-loader --save-dev//图片自动转成base64编码的
6:npm install jquery moment --save-dev//添加第三方库(jquery和moment)
7:npm install babel-preset-es2015 --save-dev//添加ES6的支持
8:npm install babel-preset-es2015 babel-preset-react --save-dev//安装转码规则
9：npm install webpack-dev-middleware --save-dev//服务器端使用的是express框架，你还可以直接安装express的middleware，webpack配合express
10: npm install react --save-dev//安装并引用 React 模块
10：npm install react react-dom --save-dev//添加react和react-dom
11：npm install react-hot-loader --save-dev//react-hot-loader 是一款非常好用的 React 热插拔的加载插件，通过它可以实现修改-运行同步的效果，配合 webpack-dev-server 使用更佳！
12：npm install --save-dev autoprefixer postcss-loader --save-dev//
13：npm install babel-loader coffee-loader --save-dev//
14: npm install autoprefixer-loader --save-dev//
15: npm install vue --save-dev//
16: npm install -d //将项目中package.json依赖的包全部下载到该项目中：npm install antd@2.0.0 //指定下载包的版本。