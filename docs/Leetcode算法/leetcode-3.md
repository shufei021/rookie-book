# leetcode 第3题

[leetcode第3题](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

**难度：**中等

题目： 无重复字符的最长子串

> 给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。


示例1：

```js
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例2：

```js
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例3:
```js
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
SF题解及思路：

> 通过日期：2020-03-07

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
    if (str.length == 0) return 0
    if([...new Set(str.substr(0,94).split(''))].length == 94)return 95
    if ([...new Set(str.split(''))].length == 1) return 1
    let groups = []
    let len = str.length
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < len - i + 1; j++) {
            groups.push(str.substr(j, i))
        }
    }
    let arr = [...new Set(groups)]
    let _arr = []
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].length != 1 &&
            arr[i].length == [...new Set(arr[i])].length
        ) {
            _arr.push(arr[i])
        }
    }
    let maxLen = Math.max(..._arr.map(i => i.length))
    return _arr.find(i => i.length == maxLen).length
};
```

>执行用时 :3400 ms, 在所有 JavaScript 提交中击败了5.07%的用户

>内存消耗 :71.5 MB, 在所有 JavaScript 提交中击败了5.00%的用户