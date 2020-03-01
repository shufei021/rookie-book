## ES7 (ES2016)

### Array.prototype.includes()

#### 定义

> includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

#### 语法

```javascript
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```

#### 参数说明

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| searchElement | 必须。需要查找的元素值。                                     |
| fromIndex     | 可选。从**该索引处**开始查找 searchElement。如果为负值，则按**升序**从 array.length + fromIndex 的索引开始搜索。**默认为 0**。 |

#### 用法

1.基本用法

```javascript
['a','b','c'].includes('a')  //true
['a','b','c'].includes('d')  //false
```

2.接收俩个参数：**要搜索的值 和 搜索的开始索引**

```javascript
['a', 'b', 'c', 'd'].includes('b')         // true
['a', 'b', 'c', 'd'].includes('b', 1)      // true
['a', 'b', 'c', 'd'].includes('b', 2)      // false
[1, 2, NaN].includes(NaN)                  // true
```

> 如果fromIndex 大于等于数组长度 ，则返回 false 。该数组不会被搜索:

```javascript
let arr = ['a', 'b', 'c'];
 
arr.includes('c', 3);   //false
arr.includes('c', 100); // false
```

> fromIndex为负值时，则会按升序从 **array.length + fromIndex** 的索引开始搜索

```javascript
[1, 2, 3].includes(1, -1) // falss
/**等价于**/
[1, 2, 3].includes(1, 2)  // falss    
```

> array.length + fromIndex = 3+(-1)=2,则从数组索引值为2开始搜索

#### 与indexOf()的比较

+ 有些时候是等效的

  ```javascript
  ['a', 'b', 'c'].includes('a')          //true
  ['a', 'b', 'c'].indexOf('a') > -1      //true
  
  var arr = [1, 2, 3]
  var a = 1;
  arr.includes(a)   //true
  arr.indexOf(a)    //0 
  ```

  > indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
  >
  > 如果没有找到匹配的字符串则返回 -1。
  >
  > **注意**： indexOf() 方法区分大小写。

+ 在判断 +0 与 -0 时，被认为是相同的。

  ```javascript
  [1, +0, 3, 4].includes(-0)    //true
  [1, +0, 3, 4].indexOf(-0)     //1
  ```

+ 只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些，是无法判断的.

  ```javascript
  var arr = [1, [2, 3], 4]
  arr.includes([2, 3])   //false
  arr.indexOf([2, 3])    //-1
  ```

+ 在处理NaN时，也不一样

  ```javascript
  var arr = [1, NaN, 4]
  
  arr.includes(NaN)     //true
  arr.indexOf(NaN)      //-1
  ```

  > 两者都是采用`===`的操作符来作比较，JavaScript中 NaN===NaN 是false，但是includes却是true



##### 优缺点比较

+ 简便性

> `includes()`返回的是布尔值，能直接判断数组中存不存在这个值，而`indexOf()`返回的是索引，这一点上前者更加方便。

+ 精确性

> `indexOf()`处理NaN时是-1，`includes()`处理NaN时是true

##### 总结

由于两者对NaN的处理方式与indexOf不同

只想知道某个值是否在数组中而并不关心它的索引位置，建议使用includes()

只想获取一个值在数组中的位置，那么你只能使用indexOf方法。

### 求幂运算符

#### 基本用法

```javascript
3 ** 2  //9
/**效果等同于**/
Math.pow(3, 2) //9
```

> 3**2 等同于 Math.pow(3, 2)  ，3[^2] = 9

+ 由于是运算符，所以可以和 `+=`一样的用法

```javascript
var b = 3;
b **= 3;        // 和 b = b*b*b 效果一样
console.log(b); //27
```

+ 这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。

```javascript
2 ** 3 ** 2
// 512
// 相当于 2 ** (3 ** 2)
```

> 3**2  =  3[^2] =  9    
>
> 2**9 = 2[^9] = 512



