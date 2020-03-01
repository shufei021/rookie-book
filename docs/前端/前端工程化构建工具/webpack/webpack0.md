# webapck

## 1.webapck 诞生的背景

#### 当前 web 开发面临的困境

+ 文件关系错综复杂
+ 静态资源请求效率低
+ 模块化支持不够友好
+ 浏览器对高级 Javascript 特性兼容程度较低
+ 其他问题...

### 2.webpack 概述

**webpack** 是一个流行的 **前端项目构建工具 （打包工具）**，可以解决当前web开发中所面临的困境

**webpack** 提供了友好的**模块化支持，以及代码打包混淆、处理js兼容问题、性能优化**等强大功能，从而让程序员把工作的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。

### 3.webpack的使用

#### 3.1 创建列表隔行变色项目

1. 新建项目空白目录, 并运行`npm init -y `命令,初始化包管理配置文件`package.json`
2. 新建`src`源代码目录
3. 新建 `src -> index.html` 首页
4. 初始化首页基本的结构
5. 运行  `npm install jquery -S `命令，安装 `jQuery`
6. 通过模块化的形式， 实现列表隔行变色效果

#### 3.2 在项目中安装个配置webpack

1. 运行 npm install webpack webapck-cli -D命令，安装webapck 相关的包

2. 在项目根目录中，创建名为 webpack.config.js 的webpack 配置文件

3. 在webpack 文件中，初始化如下配置

   ```javascript
   module.exports = {
       mode: 'development'  
   }
   /*
    * mode 用来指定构建模式，有两种模式：
    * development ：开发模式，webpack打包后不压缩混淆
    * production ：生成模式，webpack打包后进行压缩混淆
    */
   ```

4. 在 package.json 配置文件中的 scripts 节点下 ，新增 dev 脚步 如下：

   ```javascript
   "scripts":{
       "dev":"webpack"  //scripts 节点下的脚步，可以通过 npm run 执行
   }
   //如果dist没有打包的文件 执行下 webpack -p
   ```

5. 在终端运行 npm run dev 命名，启动webpack 进行项目打包

   ```markdown
   PS C:\Users\Administrator\Desktop\webpack0> npm run dev
   
   > webpack0@1.0.0 dev C:\Users\Administrator\Desktop\webpack0
   > webpack
   
   Hash: f8f26966d07186a3db7a
   Version: webpack 4.41.5
   Time: 219ms
   Built at: 2019-12-29 17:07:44
     Asset     Size  Chunks             Chunk Names
   main.js  314 KiB    main  [emitted]  main
   Entrypoint main = main.js
   [./src/index.js] 138 bytes {main} [built]
       + 1 hidden module
   PS C:\Users\Administrator\Desktop\webpack0>
   ```

#### 3.3 配置打包的出口 与 入口

webpack 4.x 中默认约定：

+ 打包的**入口文件**为 src  -> index.js
+ 打包的**输出文件**为 dist -> main.js

如果要修改打包的入口和出口，可以在webpack.config.js文件中新增如下配置信息：

```javascript
const path = require('path')   //导入node.js 中专门操作路径的模块
module.exports = {
    entry: path.join(__dirname,'./src/index.js'),  //打包入口文件的路径
    output: {
        path: path.join(__dirname,'./dist'),  //输出文件的存放路径
        filename:'bundle.js'   //输出文件的名称
    }
}
```

#### 3.4 配置webpack 的自动打包功能

1. 运行 npm install webpack-dev-server -D 命名，安装支持项目自动打包的工具

2. 修改 package.json  -> scripts 中的 dev 命名如下：

   ```javascript
   "scripts":{
       "dev":"webpack-dev-server"  //scripts 节点下的脚步，可以通过 npm run 执行
   }
   ```

3. 将 scr -> index.html 中，script脚步的引用路径，修改为 “ /bundle.js”

4. 运行 npm run dev命名，进行重新打包

5. 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

#### 3.5 配置 html-webapck-plugin 生成预览页面

1.  运行 npm install html-webpack-plugin -D 命名，安装生成预览页面的插件

2. 修改 webpack.config.js 文件头部区域，添加如下配置信息：

   ```javascript
   //导入生成预览页面的插件，得到一个构造函数
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const htmlPlugin = new HtmlWebpackPlugin({ //创建插件的实例对象
      template: './src/index.html', //指定要用到的模块文件
      filename:'index.html' //指定生成的文件名称，该文件存在于内存中，在目录中不显示
   })
   ```

3. 修改 webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点：

   ```javascript
   mudule.exports = {
       plugins:[ htmlPlugin ] //plugins数组是 webpack 打包期间会用到的一些插件列表
   }
   ```

#### 3.6 配置自动打包相关参数

```javascript
//package.json 中的配置
// --open 打包完成后 自动打开浏览器页面
// --host 配置IP地址
// --port 配置端口

"script":{
    "dev":"webpack-dev-server --open --host 127.0.0.1 --port 8888"
}
```

### 4.webpack中的加载器

#### 4.1通过loader打包非js模块

在实际开发过程中，webapck 默认只能打包处理以 .js后缀名结尾的模块，其他 **非.js后缀名结尾的模块，** webpack默认处理不了，需要调用 loader 加载器才可以正常打包，否则报错！

loader 加载器可以协助 webpack 打包处理特定的文件模块，比如：

+ less-loader 可以打包处理 .less 相关文件
+ sass-loader 可以打包处理 .scss 相关文件
+ url-loader 可以打包处理 css中 与 url 路径相关的文件

![loader打包流程](http://moxiaofei.com/wp-content/uploads/2019/05/QQ图片20191229192449.png)

#### 4.2 webpack中加载器的基本使用

+ CSS
+ LESS
+ SCSS
+ PostCSS
+ JavaScript
+ Img / Font
+ Vue

##### 4.2.1 打包处理css文件

```javascript
//目录结构
> dist
	> main.js
>node-modules //第三方包
> src
	> css
		>1.css
    > index.html
	> index.js
> package.json
> webapck.config.js
```

**1.css**

```css
body{
    background-color:red;
}
```

**index.js**

```javascript
import './css/1.css'
```

没有下载 css-loader 之前 编译会报错

**下载css-loader以及配置使用**

1. 运行 npm i style-loader css-loader -D 命名，安装处理css文件的 loader

2. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下：

    ```javascript
   //所有第三方文件模块的匹配规则
   module : {
       rules:[
           { test: /\.css$/, use:['style-loader','css-loader']}
       ]
   }
   ```

   > 其中，test 表示匹配的文件类型，use 表示对应要调用的 loader
   >
   > use数组中指定的 loader 顺序是固定的，**执行顺序是 从后往前**

##### 4.2.2 打包处理less文件

1. 运行 npm i **less-loader less** -D 命名

2. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下：

   ```javascript
   //所有第三方文件模块的匹配规则
   module : {
       rules:[
           { test: /\.less$/, use:['style-loader','css-loader','less-loader']}
       ]
   }
   ```

##### 4.2.3 打包处理scss文件

1. 运行 npm i **sass-loader node-sass** -D 命名

2. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下：

   ```javascript
   //所有第三方文件模块的匹配规则
   module : {
       rules:[
           { test: /\.scss$/, use:['style-loader','css-loader','sass-loader']}
       ]
   }
   ```
   
   ```javascript
   卸载当前版本   npm uninstall sass-loader
   安装     npm install sass-loader@7.3.1 --save-dev
   ```
   
   

##### 4.2.4 配置 postCSS 自动添加 css的兼容前缀

1. 运行 `npm i postcss-loader autoprefixer -D` 命名

2. 在项目根目录中创建 postcss 的配置文件 postcss.config.js，并初始化如下配置：

   ```javascript
   const autoprefixer = require('autoprefixer') //导入自动添加前缀的插件
   module.exports = {
       plugin:[ autoprefixer ] //挂载插件
   }
   ```

3. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下：

   ```javascript
   module : {
       rules:[
           { test: /\.css$/, use:['style-loader','css-loader','postcss-loader']}
       ]
   }
   ```

##### 4.2.4 打包样式表中的图片和字体文件

1. 运行 npm i url-loader file-loader -D 命名

2. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下：

   ```javascript
   module : {
       rules:[
           { 
               test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
               use:'url-loader?limit=16940'
           }
       ]
   }
   ```

   > 其中 ? 之后的是loader的参数项
   >
   > limit用来指定图片的大小，单位是字节（byte），只有 小于limit的值才会转成base64图片

##### 4.2.5 打包处理js文件中的高级语法

1. 安装babel转换器相关的包：npm i babel-loader @babel/core @babel/runtime -D

2. 安装babel语法插件相关的包：npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D

3. 在项目根目录中，创建babel配置文件 babel.config.js 并初始化基本配置如下：

   ```javascript
   module.exports = {
       presets:[ '@babel/preset-env' ] ,
       plugins:[
           '@babel/plugin-transform-runtime',
           '@babel/plugin-proposal-class-properties'
       ]
   }
   ```

4. 在 webpack.config.js 的module -> rules 数组中，添加 loader 规则 如下:

   ```javascript
   //exclude 为排除项 ，表示 babel-lodaer 不需要处理 node_modules 中的 js文件
   {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
   ```


### 5.如何利用webpack来优化前端性能

###### 5.1. 压缩代码。**uglifyJsPlugin 压缩js代码**， **mini-css-extract-plugin 压缩css代码**
 ###### 5.2. 利用CDN加速，将引用的静态资源修改为CDN上对应的路径，可以利用webpack对于output参数和 loader的publicpath参数来修改资源路径
 ###### 5.3. **删除死代码（tree shaking），css需要使用Purify-CSS**
  ###### 5.4. 提取公共代码。webpack4移除了CommonsChunkPlugin (提取公共代码)，用optimization.splitChunks和optimization.runtimeChunk来代替