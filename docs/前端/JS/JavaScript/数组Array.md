# 数组

## 一、数组的循环遍历

+ for

```javascript
var arr = [1,2,3,4]
for(var i = 0;i<arr.length; i++){
    console.log(i)
    console.log(arr[i])
}
```

+ forEach

```javascript
var arr = [1,2,3,4]
arr.forEach((item,index,arr)=>{
    console.log(index)
    console.log(item)
    console.log(arr)
})
```

## 二、数组的过滤

+ filter

```javascript
var arr = [ {name:'Lisi',age:27},{name:'Zhangsan',age:28},{name:'wangwei',age:28} ]
var obj = arr.filter((item,index,arr)=>{
    return item.age === 28
})

console.log(obj) // [{name:'Zhangsan',age:28},{name:'wangwei',age:28}]
```

## 三、数组里是否存在某值

+ indexOf

```javascript
var arr = [1,2,3,4]

console.log( arr.indexOf(2) > -1 )  // true 
console.log( arr.indexOf(5) > -1 )  // false 
```

+ includes

```javascript
var arr = [1,2,3,4]
console.log( arr.includes(2) )  // true 
console.log( arr.includes(5) )  // false 
```

+ 对象数组

  - 数组里是否存在条数据  **some**

  ```javascript
  var arr = [ {name:'Lisi',age:27},{name:'Zhangsan',age:28},{name:'wangwei',age:28} ]
  var isHasObj =  function(key,value,arr){
      return arr.some( item => {
          return item[key] === value
      })
  }
  console.log( isHasObj('age',27,arr)) //true
  console.log( isHasObj('age',29,arr)) //false
  ```

  - 数组里每条数据是否都满足某个条件 **every**

  ```javascript
      
  var arr = [ {name:'Lisi',age:28},{name:'Zhangsan',age:28},{name:'wangwei',age:28} ]
      
  var isMeet =  function(key,value,arr){
      return arr.every( item => {
          return item[key] === value
      })
  }
  
  //每条数据的age值都是28吗？
  console.log(isMeet('age',28,arr))  //true
  //每条数据的age值都是29吗？
  console.log(isMeet('age',29,arr))  //false
  
  ```

  