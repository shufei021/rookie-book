# leetcode 第七题

[leetcode第七题](https://leetcode-cn.com/problems/reverse-integer/)  

**难度：**简单

题目： 整数反转
> 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例1：
```js
输入: 123
输出: 321
```

示例2：
```js
输入: -123
输出: -321
```
示例3：
```js
输入: 120
输出: 21
```
> 注意：假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

SF题解及思路：
> 通过日期：2019-08-15

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let Str = String(x)
    if(x<0){
        let ReverseStr =Str.substr(1).split('').reverse().join('')
        //负数是否溢出
        if(('-'+ReverseStr)<-2147483648){
            return 0
        }else{
            return ('-'+ReverseStr)-0
        }
    }else{
        let ReverseStr =Str.split('').reverse().join('')
        //正数是否溢出
        if(ReverseStr>2147483648){
            return 0
        }else{
            return ReverseStr
        }
    }
};
```
>执行用时 :76 ms, 在所有 JavaScript 提交中击败了95.40%的用户

>内存消耗 :36 MB, 在所有 JavaScript 提交中击败了54.07%的用户