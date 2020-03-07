# leetcode 第93题

[leetcode第93题](https://leetcode-cn.com/problems/restore-ip-addresses/submissions/)  

**难度：**中等

题目： 复原IP地址 

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

> 四个数字组成的Internet地址，每个数字不超过256，地址数码书写时用圆点分开

示例：
```js
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```


SF题解及思路：
> 通过日期：2020-03-07

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(str) {
    if(str.length>12)return []
    let arr = []
    let groups = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length - i + 1; j++) {
            let Str = str.substr(i,j+1)
            Str<256 && arr.push(Str) 
        }
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                for(let m=k+1;m<arr.length;m++){
                    if(arr[i]+arr[j]+arr[k]+arr[m] === str){
                        groups.push([arr[i],arr[j],arr[k],arr[m]])   
                    }
                }
            }
        }
    }
    groups =groups.filter(item=>item.map(i=>String(parseInt(i)).length === i.length).every(i=>i)) 
    return [...new Set(groups.map(item=>JSON.stringify(item)))].map(item=>JSON.parse(item).join('.'))
};
```
>执行用时 :104 ms, 在所有 JavaScript 提交中击败了10.04%的用户

>内存消耗 :41.7 MB, 在所有 JavaScript 提交中击败了5.55%的用户

