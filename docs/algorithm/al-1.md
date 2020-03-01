# 求最小组合
> 题目描述：

求 数组`[1,3,4,8,10,11]`中两个数相减的绝对值最小的组合

> 输入：[1,3,4,8,10,11]

> 返回：[[3,4],[10,11]]

```javascript
var arr = [1,3,4,8,10,11]

    //求组合数
    var groups = []
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++){
            groups.push([arr[i],arr[j]])
        }
    }
  
    // 相减绝对值计算
    let absHanlde = groups.map(item=>Math.abs(item[0]-item[1]))
    console.log(absHanlde)
    //求组合绝对值最小值组合项索引

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
   
    console.log(result) // [[3,4],[10,11]]
```