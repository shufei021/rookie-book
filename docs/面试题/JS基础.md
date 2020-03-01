#### 什么是 Event Loop？(事件轮询)

Event Loop 是一个很重要的概念，指的是计算机系统的一种运行机制。

"**Event Loop是一个程序结构，用于等待和发送消息和事件。**（a programming construct that waits for and dispatches events or messages in a program.）"

> 简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）

 

module.export 与 exports的区别

```javascript
var exports = module.export

exports={
    
}
```

> Node使用CommonJS规范，定义每个模块的内部，module变量代表当前模块，exports是module的属性，表示对外的接口。加载某个模块，实际上是加载该模块的module.exports属性。

> Node为每个模块提供了一个exports变量，指向module.exports，这等同于每个模块头部有这样的一行代码：var exports = module.exports

> module.exports与exports ，是CommonJS的规范，被使用于Node.js中。export与export default ，是ES6规范，被使用于React或Vue中。