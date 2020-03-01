# 算法题

## 题目

给定一个数组 `arr`,通过计算，返回`arr`中两个数相减的绝对值最小的组合

```javascript
示例：

输入：[1,3,4,8,10,11]
返回：[[3,4],[10,11]]

输入：[1,3,4,8]
返回：[[3,4]]

```

## 题解

```javascript
function getResult(arr){

    //求组合数
    var groups = []
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++){
            groups.push([arr[i],arr[j]])
        }
    }
  
    // 相减绝对值计算
    let absHanlde = groups.map(item=>Math.abs(item[0]-item[1]))
  
    //求组合绝对值最小值

    let min = Math.min(...absHanlde)

    //求相减绝对值最小组合的索引
    let minIndex = (function(str, substr){
        var position_arr = [];
        var index = str.indexOf(substr);
        while(index != -1) {
            position_arr.push(index);
            index = str.indexOf(substr, index+1);
        }
        return position_arr;
    })(absHanlde,min)

    //得到结果
    let result = []
    for(let i=0;i<minIndex.length;i++){
        result.push(groups[minIndex[i]])
    }
    return result
}  
```