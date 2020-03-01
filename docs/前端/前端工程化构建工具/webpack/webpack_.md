### webpack

### 1.什么是webpack？

webpack可以看做是模块打包机：它做的事情是，分析你项目的结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TpyeScript等），并将其打包为合适的格式以供浏览器使用。

### 2.webpack可以做什么？

> **代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布**

### 3.webpack常见操作

+ webpack的常见配置
+ webpack的高级配置
+ webpack的优化策略
+ ast抽象语法树
+ webpack中的Tapable
+ webpack流程
+ webpack中常见的loader
+ webpack中常见的plugin

### 4.webpack安装

- 安装本地的webapck

- npm i webapck webpack-cli -D

  > -D 表示开发依赖，上线不需要
  >
  > 上线的时候不需要他们两个包

+ webpack可以是0配置，默认配置文件是webpack.config.js

  **指定配置文件名称：`npx webpack --config webpack.config.my.js`**

  > 0配置打包的话，默认是生成环境，production，
  >
  > mode 默认有两种模式  
  >
  > 开发模式（development 打包好的代码不压缩）
  >
  > 生成模式（production 打包后的文件进行压缩）

  **`webapck.config.js`**

  ```javascript
  const path = require('path');
  
  module.exports = {
    mode:'development', //默认有两种模式  开发模式（development 打包好的代码不压缩）生成模式（production 打包后的文件进行压缩）
    entry: './src/index.js',//打包文件 入口
    output: {//打包输出文件的出口
      path: path.resolve(__dirname, 'dist'),//路径必须是一个绝对路径
      filename: 'bundle.js' //打包后的文件名
    }
  };
  ```

+ 有时运行 `webpack.config.js` 名字太长，可以去 `package.json` 配置一些脚步

  比如：

  ```javascript
  webapck --config webpack.config.js
  ```

  我们想：npm 运行打包

  ```javascript
  npm run build
  ```

  > 我们在 package.json 里面配置下脚步就可以实现

  ```javascript
  {
    "name": "webpack-1",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
        
    "scripts": {
      "build": "webpack --config webpack.config.js"
    },
        
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```



+ 我们想在localhost 本地服务状态下进行开发

  `webpack.config.js`

  ```javascript
  const path = require('path');
  
  module.exports = {
      devServer:{// 开发服务器配置
          port：3000,
  		progress:true,//打包的时候 可以看到进度条
  		contentBase：'./build'  // 以./build 文件作为我们的静态服务
      },
      mode:'development', 
      entry: './src/index.js',//打包文件 入口
      output: {//打包输出文件的出口
          path: path.resolve(__dirname, 'dist'),//路径必须是一个绝对路径
          filename: 'bundle.js' //打包后的文件名
      }
  };
  ```

  `package.json`

  ```javascript
  {
    "name": "webpack-1",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
        
    "scripts": {
      "build": "webpack --config webpack.config.js",
          
      "dev": "webpack-dev-server"
        
    },
        
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```

  > 脚步里配置好了`"dev": "webpack-dev-server"`，我们就可以直接npm run dev 启动本地服务

+ 有时候我们希望我们打包后，都能自动生成一个index.html 文件，这时就需要引用一个插件

  > **`html-webpack-plugin`  插件**

