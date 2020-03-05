# 算法题



## 题目



写一个方法`TreeTopath`，传入一个树结构，树的层级不定，返回 一个数组，数组里包含了所有的字符串路径

```javascript
示例：
let tree = {
    name: 'root',
    lv: 0,
    children: [{
        name: '一级树-0',
        lv: 1,
    }, {
        name: '一级树-1',
        lv: 1,
        children: [{
            name: '二级树-1-1',
            lv: 2,
        }]
    }, {
        name: '一级树-2',
        lv: 1,
        children: [{
            name: '二级树-2-1',
            lv: 2,
        }, {
            name: '二级树-2-2',
            lv: 2,
            children: [{
                name: '三级树-2-2-1',
                lv: 3,
                children: [{
                    name: '四级树-2-2-1-1',
                    lv: 4,
                }, {
                    name: '四级树-2-2-1-2',
                    lv: 4,
                    children: [{
                        name: '五级树-2-2-1-2-1',
                        lv: 5,
                    }]
                }]
            }]
        }]
    }]
}

TreeTopath(tree)

返回：
[
	"root/一级树-0",
    "root/一级树-1/二级树-1-1", 
    "root/一级树-2/二级树-2-1", 
    "root/一级树-2/二级树-2-2/三级树-2-2-1/四级树-2-2-1-1", 
    "root/一级树-2/二级树-2-2/三级树-2-2-1/四级树-2-2-1-2/五级树-2-2-1-2-1"
]
```





##  题解



```javascript
function flatTree(json) {
    let res = []
    let carry = function(_arr, name) {
        for (let i = 0; i < _arr.length; i++) {
            let _name = name ? name + '/' + _arr[i].name : _arr[i].name
            if (_arr[i].children) {
                carry(_arr[i].children, _name)
            } else {
                if (name) {
                    res.push(_name)
                } else {
                    res.push(_arr[i].name)
                }
            }
        }
    }
    carry([json])
    return res
}
```



