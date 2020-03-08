# leetcode 第2题

[leetcode第2题](https://leetcode-cn.com/problems/add-two-numbers/)

**难度：**中等

题目： 两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。





示例：

```js
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

```

SF题解及思路：

> 通过日期：2020-03-08

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    function add(a,b){
        let ResArr=[];
        let MaxLen = a.length>b.length?a.length:b.length
        let ShortArr = a.length>b.length?b:a
        let LenArr = a.length>b.length?a:b
        let ShortHandleArr = ShortArr.padStart(MaxLen,0)
        for(let i=0;i<MaxLen;i++){
            ResArr.push([LenArr[i],ShortHandleArr[i]])
        }
        ResArr = ResArr.map(i=>i[0]*1+i[1]*1).reverse()
        for(let i=0;i<ResArr.length;i++) {
            if(ResArr[i]>9){
                if(i==ResArr.length-1){
                    ResArr[i+1]=1
                    ResArr[i] = ResArr[i]%10
                }else{
                    ResArr[i+1]++ 
                    ResArr[i] = ResArr[i]%10
                }
            
            }
        }
        return ResArr.reverse().join('') 
    }
    let count = function(list){
        let nodeList = list
        let arr = [nodeList.val]
        while(nodeList.next){
            nodeList = nodeList.next
            arr.push(nodeList.val)
        }
        return arr
    }
    let Res = []
    if(count(l1).length>20 || count(l2).length>20){
        let a = count(l1).join('').split('').reverse().join('')
        let b = count(l2).join('').split('').reverse().join('')
        Res = add(a,b)
    }else{
        Res = count(l1).reverse().join('')*1 + count(l2).reverse().join('')*1
    }
    let ResArr= (Res+'').split('').reverse().map(i=>i*1)
    if(ResArr.length==1)return {val:ResArr[0],next:null}
    let format = function(arr){
       let res = {}
       let fn = function(arr,obj){

            for(let i=0;i<arr.length;i++){

              if(arr.length==1){
                  if(obj){

                  obj.val = arr[i]*1
                  obj.next =null
                  }
              }else{
                  if(obj){
                     obj.val = arr[i]*1 
                     obj.next = {} 
                     arr.splice(0,1)
                     fn(arr,obj.next)
                  }else{

                     res.val = arr[i]*1 
                     res.next = {} 
                     arr.splice(0,1)
                     fn(arr,res.next)
                  }
              }
            }
       }
       fn(arr)
      return res
    }
    return format(ResArr)  
};

```

>执行用时 :144 ms, 在所有 JavaScript 提交中击败了29.78%的用户

>内存消耗 :41 MB, 在所有 JavaScript 提交中击败了7.93%的用户