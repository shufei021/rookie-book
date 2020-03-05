# Polyfill

> 尝试自己去实现相关的api

**数组复制方法 复制的是数组里的值**
```js
Array.prototype.repeat = function(n=0){
    let base = 0;
    let res= this
    while(base<n){
        res = res.concat(this)
        base++
    }
    return res
}
```
测试用例：

```js

[1,2,3].repeat() //[1,2,3]   不传参 默认是不复制

[1,2,3].repeat(1) //[1,2,3,1,2,3]   复制 1 遍

[1,2,3].repeat(2) //[1,2,3,1,2,3,1,2,3]   不传参 默认是不复制

[{name:'lisi'}].repeat(1) //[{name:'lisi'},{name:'lisi'}]   复制 1 遍

```
**找出数字数组中 和 给定的数字匹配到的值的所有索引，以数组形式返回**

```js
Array.prototype.findIndexAllNumber = function(v){
    let arr = [];
    for(let i=0;i<this.length;i++){
        if(this[i] === v){
            arr.push(i)
        }
    }
    return arr
}
```
测试用例：

```js

[1,2,3,4,1,2,1].findIndexAllNumber(1) // [0, 4, 6]

```

**找出 JSON数组中 和 给定的回调函数的返回值作为条件匹配到的数据的所有索引值，以数组形式返回**

```js
Array.prototype.findIndexAllJson = function(callback){
    let arr = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])) {
            arr.push(i)
        }
    }
    return arr
}
```
测试用例：

```js
let jsonArr = [{name:'list',age:27},{name:'wangbo',age:28},{name:'zhangsan',age:27}]
jsonArr.findIndexAllJson(item=>item.age==27) // [0, 2]

```