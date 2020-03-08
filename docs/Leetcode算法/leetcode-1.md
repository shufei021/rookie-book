# leetcode 第1题

[leetcode第1题](https://leetcode-cn.com/problems/two-sum/)

**难度：**简单

题目： 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素




示例：

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

```

SF题解及思路：

> 通过日期：2019-06-17

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};
```

>执行用时 :128 ms, 在所有 JavaScript 提交中击败了48.34%的用户

>内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了59.60%的用户