# 算法题



## 题目



写一个方法`pathToTree`，传入不确定个数的路径字符串，然后返回树结构对象

```javascript
示例：
pathToTree('/src/node/libs', '/node_modules/vuex/dist','/src/node/bin')
返回：
[
    {
        name:"src",
        child:[{
            name:"node",
            child:[
                {name:"libs"},
                {name:"bin"}
            ]
        }]
    },
    {
        name:"node_modules",
        child:[{
            name:"vuex",
            child:[
                {name:"dist"}
            ]
        }]
    }
]
```





##  题解



```javascript
function pathToTree(...args) {
    //格式化参数 并调用 merge he format11方法 进行加工处理参数
    function format(args) {
        let arr = args.map(item => item.substr(1).split('/'))

        let prefixs = (() => {
            return [...new Set(arr.map(item => item[0]))]
        })()

        let _arr = new Array(prefixs.length).toString().split(',').map(i => [])

        for (let i = 0; i < prefixs.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (prefixs[i] === arr[j][0]) {
                    _arr[i].push(arr[j])
                }
            }
        }

        let arr3 = _arr.map(item => item.map(item => merge(item)))
        return arr3.map(item => {
            if (item.length == 1) {
                return item[0]
            } else {
                return format11(...item)
            }
        })
    }
	//一级对象生成方法
    function merge(arr) {
        let obj = {}
        let fn = function (arr1, _obj) {
            if (arr1.length >= 2) {
                if (Object.keys(obj) == 0) {
                    let o = {
                        name: arr1[0],
                        child: [{
                            name: arr1[1]
                        }]
                    }
                    obj = o
                    arr.splice(0, 2)
                    fn(arr, o.child[0])
                } else {
                    _obj.child = [{
                        name: arr1[0],
                        child: [{
                            name: arr1[1]
                        }]
                    }]
                    arr.splice(0, 2)

                    fn(arr, _obj.child[0].child[0])
                }
            } else if (arr1.length == 0) {} else {
                _obj.child = [{
                    name: arr1[0]
                }]
                arr.splice(0, 1)
            }
        }
        fn(arr)
        return obj
    }
    //format11 调用 assign 方法进行多个一级对象树合并成一个树对象
	function format11(...args) {
        let arr = args
        while (arr.length > 2) {
            arr.splice(0, 2, assign(arr[0], arr[1]))
        }
        return assign(arr[0], arr[1])
    }
    //两个一级对象树合并
    function assign(_a, _b) {
        let o = {
            name: _a.name
        }
        let fn = function (a, b, obj) {
            if (a.hasOwnProperty('child') && b.hasOwnProperty('child')) {
                let a0 = a.child[0]
                let b0 = b.child[0]

                if (a0.name === b0.name) {
                    if (obj) {
                        obj.push(...b.child)
                    }

                    if (a0.hasOwnProperty('child') && b0.hasOwnProperty('child')) {
                        o.child = [{
                            name: a0.name,
                            child: [...a.child[0].child, ...b.child[0].child]
                        }]
                        fn(a0, b0, o.child[0].child)
                    }
                } else {
                    o.child = [...a.child, ...b.child]
                }
            }
        }
        fn(_a, _b)
        return o
    }
    return format(args)
}
```

测试用例：

```js
pathToTree(
    '/src/node/libs',
    '/src/node/bin', 
    '/node_modules/vuex/dist'
)
pathToTree(
    '/src/node/libs',
    '/node/libs',
    '/node_modules/vuex/dist',
    '/src/node/bin',
    '/src/node/temp',
    '/project/vue/vue-press',
    '/project/vueSS/vue-press/vux/VUSWE'
)
```