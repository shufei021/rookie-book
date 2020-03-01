### JavaScript - Array（数组）

[mdn][https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array]

#####  1.数组的创建

+ 字面量 形式创建

  ```javascript
  var arr = [1,2,3]
  ```

+ new 的方式创建

  ```javascript
  var arr = new Array()
  console.log(arr)   // []
  
  var arr1 = new Array(1) //可以接收一个参数，参数表示这个数组的长度，没有值就是empty占位
  console.log(arr1)//[empty]
  ```

##### 2.数组的清空

+ 赋值空数组 清空

  ```javascript
  var arr = [1,2,3]
  arr = []
  console.log(arr) //[]
  ```

+ 数组长度length 等于 0 

  ```javascript
  var arr = [1,2,3,4]
  arr.length = 0
  consooe.log(arr) //[]		
  ```

##### 3.数组的首位之前追加  （`unshift`）

```javascript
//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度,直接修改原有的数组
var arr =[1,2,3,7,8,33,55]
console.log(arr.unshift(99,88))//9
console.log(arr)// [99, 88, 1, 2, 3, 7, 8, 33, 55]
```

##### 4.数组的末尾之后追加 （`push`）

```javascript
//push() 方法可向数组的末尾添加一个或更多元素，并返回新的长度,直接修改原有的数组
var arr =[1,2,3,7,8,33,55]
console.log(arr.push(88))//8
console.log(arr)//[1, 2, 3, 7, 8, 33, 55, 88]
```



##### 5.数组的首位删除
##### 6.数组的末位删除
##### 7.数组的替换|插入|删除
##### 8.数组的截取
##### 9.数组的合并
##### 10.数组的排序
##### 11.数组转字符串
##### 12.数组随机排序
##### 13.数组的遍历
##### 14.找出第一个符合条件的数组成员索引值
##### 15.数组值的"过滤"功能
##### 16.数组值的累加
##### 17.数组检测
##### 18.检查数组中是否存在某个值
##### 19.找出第一个符合条件的数组成员
##### 20.找出第一个符合条件的数组成员的位置(索引值)
##### 21.数组相关

> `unshift `首位之前追加
>
> `push` 末尾之后追加
>
> `shift` 删除数组首位
>
> `pop` 删除数组末位
>
> `splice` 数组的替换 | 删除 | 插入
>
> `concat` 连接两个数组
>
> `every `
>
> `some`
>
> `filter`
>
> `find`
>
> `findIndex`
>
> `indexOf`
>
> `lastIndexOf`
>
> `forEach`
>
> `join`
>
> `slice`
>
> `map`
>
> `reduce`
>
> `sort`
>
> `reverse`
>
> `includes`
>
> flat
>
> keys
>
> values
>
> fill



