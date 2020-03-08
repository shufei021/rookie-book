# leetcode 第五题

[leetcode第五题](https://leetcode-cn.com/problems/longest-palindromic-substring/)

**难度：**中等

题目：最长回文子串
> 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例1：
```js
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例2：
```js
输入: "cbbd"
输出: "bb"
```

SF题解及思路：
> 尝试日期：2020-03-07 14:39:00   **状态：超时未通过全部用例**

```js
var longestPalindrome = function(str) {
    //数组去重
    let unique = [...new Set(str.split(''))]
    //针对 str 为 ""、一个字符串、去重只剩1个字符串 情况处理
    if(str.length==0 || str.length==1 || unique.length==1 )return str
    //针对 str 长度为2，去重还是2的情况处理
    if(str.length==2 && unique.length==2)return str[0]
    //其他情况
    let Res = "" //结果变量
    for (let i = 1; i <= str.length; i++) {
        for (let j = 0; j < str.length - i + 1; j++) {
            //字符串正序
            let Str = str.substr(j, i)
            //字符串倒序
            let reveStr = Str.split('').reverse().join('')
            //根据回文规则 
            if(Str===reveStr){
                //最长的 Str 替换 之前的值
                Res =  Str.length>Res.length?Str:Res
            }

        }
    }
    return Res
};
```