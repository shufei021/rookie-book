# 个人技巧篇

**快速生成不确定数据类型的不确定长度的数组**

```js
function GenerateArray(len,value){
    return ','.repeat(len-1).split(',').fill(value)
}

function GenerateArray(len,value){
    return new Array(len).toString().split(',').fill(value)
}
```

测试用例：

```js

GenerateArray(2,{}) //[{},{}]

GenerateArray(5,0) //[0,0,0,0,0]

GenerateArray(5,[]) //[[],[],[],[],[]]

```

> 当然 map 替换 fill 也是可以的

**快速生成 值为索引递增 长度为len 的数组**

```js
function GenerateArray(len){
    return [...Array(len).keys()]
}
```

测试用例：

```js

GenerateArray(10) //[0,1,2,3,4,5,6,7,8,9]


```

**快速生成  基于当前 / 指定时间的 过去 n 天时间（包含当天日期）**

```js
function passDaysDate(days,s)  {
    if(!arguments.length)return [];
    return [...Array(days*1+1).keys()].map(days=>new Date((s?new Date(s):Date.now()) - 86400000 * days).toLocaleDateString()).map(item=>item.split(/\/|-/).map(i=>i.padStart(2,'0')).join('-')).splice(1)
}
```

测试用例：

```js

//不传参数返回空数组 说明你没用需求
passDaysDate() //[]

//不传第二个参数，则求得基于当前日期过去 1 天日期
passDaysDate(1) //["2020-03-05"] (PS:本人测试日期为2020-03-06)

//不传第二个参数，则求得基于当前日期过去 2 天日期
passDaysDate(2) //["2020-03-05","2020-03-04"] (PS:本人测试日期为2020-03-06)

//传第二个参数则指定日期，则求得基于指定日期过去 1 天日期
passDaysDate(7,'2018-02-01') //["2018-01-31", "2018-01-30", "2018-01-29", "2018-01-28", "2018-01-27", "2018-01-26", "2018-01-25"]

//传第二个参数则指定日期，则求得基于指定日期过去 1 天日期
passDaysDate(7,1517414400000) //["2018-01-31", "2018-01-30", "2018-01-29", "2018-01-28", "2018-01-27", "2018-01-26", "2018-01-25"]

//1517414400000 为2018-02-01 00:00:00 的时间戳
```