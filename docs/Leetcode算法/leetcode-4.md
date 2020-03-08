# leetcode 第4题

[leetcode第4题](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

**难度：**困难

题目：寻找两个有序数组的中位数
> 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
>请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
>你可以假设 nums1 和 nums2 不会同时为空。

示例1：

```js
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```
示例2：

```js
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```
SF题解及思路：
> 通过日期：2020-03-07

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = nums1.concat(nums2).sort((a,b)=>a-b)
    let len = merge.length
    if(len%2==0){
        let index = len/2
        return (merge[index-1]+merge[index])/2
    }else{
         let index = parseInt(len/2)
        return merge[index]
    }
};
```

> 合并数组用sort排序；通过取余判断奇偶数，分别返回中位数