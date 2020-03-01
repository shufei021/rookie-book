# 算法题

## 题目

给定一个字符串 `str`,通过将字符串`str`中的每个字母转变大小写，我们可以获得一个新得字符串。返回所有可能得到的字符串集合。



```javascript
示例：

输入 str = 'a1b2'
输出 ['a1b2','a1B2','A1b2','A1B2']

输入 str = '3z4'
输出 ['3z4','3Z4']

输入 str = '12345'
输出 ['12345']

```

## 题解

```javascript

function getResult(str) {
        //字母对应的索引集合
        let indexs = []
        //字母集合
        var array = (() => {
            let a = str.split('')
            let r = []
            for (let i = 0; i < a.length; i++) {
                if (!!isNaN(parseFloat(a[i]) && isFinite(a[i]))) {
                    r.push(a[i])
                    indexs.push(i)
                }
            }
            return r
        })()
        //如果字符串中没有字母 则数组形式返回该字符串
        if (!array.length) return [str]
        //字母全为小写集合
        var arr = array.join('').toLowerCase().split('') 
        //字母全为大写集合
        var arr1 = array.join('').toUpperCase().split('')
        //复制
        function copy(arr, startIndex, count, flag) {
            var arr1 = arr.slice()
            var _arr = arr.slice()
            var newValue = _arr.splice(startIndex, count).map(i => (flag ? i.toUpperCase() : i.toLowerCase()))
            arr1.splice(startIndex, count, ...newValue)
            return arr1
        }
        //阶乘方法 计算字母的组合方法种数
        function arf(n) {
            if (n <= 1) return 1
            return n * arf(n - 1)
        }

        //计算字母 全大写或全小写 两种情况的组合数
        function getRes(arr, flag = true) {
            var result = []
            var len = arf(indexs.length)
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < arr.length; j++) {
                    result.push(copy(arr, i, j, flag))
                }
            }
            return result
        }

        //所有的全字母组合数组 进行格式化处理的方法
        function fromat(str, indexs, mud) {
            var ar = str.split('')
            for (let i = 0; i < indexs.length; i++) {
                ar.splice(indexs[i], 1, mud.split('')[i])
            }
            return ar.join('')
        }

        // 所有的字母组合进行去重
        let _result = [
            ...new Set([
                ...[...new Set(getRes(arr).map(i => i.join('')))],
                ...[...new Set(getRes(arr1, false).map(i => i.join('')))]
            ])
        ]
        //返回结果
        return _result.map(item => {
            return fromat(str, indexs, item)
        })
    }

```