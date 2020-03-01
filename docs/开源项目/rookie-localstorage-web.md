# rookie-localstorage-web 介绍
>  rookie-localstorage-web.js 是专门用于单一localStorage的单独一条数据管理工具
>
> 有些时候，我们浏览器登录了多个用户账号，每个用户信息肯定不一样，用 LocalStorage 动态生成各自账号的 LocalStorage 实例并进行管理变得高效，也许每个账号角色权限不一样，你只需要对 对应的LocalStorage 实例数据进行管理操作即可，对 LocalStorage 实例 data 的操作会同步映射到 本地  LocalStorage 。

[npm：https://www.npmjs.com/package/rookie-localstorage-web](https://www.npmjs.com/package/rookie-localstorage-web)

[github：https://github.com/shufei021/LocalStorage](https://github.com/shufei021/LocalStorage)

## API

+ set：为 root-localStorage 对象添加属性

```javascript
  // 初始化一个 A用户 root-localStorage 实例
  let AuserInstance = new LocalStorage('A-user');
  /* .set()
   * 此时，本地存储中生成一条 {'A-user':'{}'} 的数据，
   * 后续操作都只是对这个 '{}' json字符串 进行操作
   * 我们称 这条 数据 为 A-user 的 root-localStorage 实例
   */
  
  //添加一个数据  AuserInstance.set(key, name)
  AuserInstance.set( 'name', 'lisi')  
  
  AuserInstance.set( 'userInfo', {name:'lisi',age:30})
  
  AuserInstance.set({
      China :'中文'，
      America：'美国'，
      list：['Chinese','English']
  })
```

  

+ get: 获取 root-localStorage 实例 数据对应的值

```javascript
  /*
   * .get(key1,key11,key111,...)
   * 注意：key 都是对象，并且存在才能正确获取到对应的值
   * 参数的长度 决定你了获取 key 值的 深度
   * 如：AuserInstance.set( 'key', {key1:{key2：{key3：555}},age:30})
   * 获取key3的值：AuserInstance.get('key','key1','key2','key3')
   */
  let AuserInstance = new LocalStorage('A-user');
  
  AuserInstance.set( 'userInfo', {name:'lisi',age:30})
  
  console.log(AuserInstance.get('userInfo','name'))
```

  

+ edit: 更新 root-localStorage 实例 数据

```javascript
  /*
   * .edit(key1,key11,key111,...,newValue)
   * 参数的长度 决定你了更新 key 值的 深度
   * 如：AuserInstance.edit(key1,key11,key111,newValue)
   * 参数的最后一个始终为 改变的新值
   * 参数至少为2个
   */
  AuserInstance.edit(key1,newValue)  
  //更改 AuserInstance.data 对象身上的 key1 为 newValue，同步映射到本地存储
  AuserInstance.edit(key1,key11,newValue)
  
  AuserInstance.edit(key1,key11,key111,newValue)
```

  

+ del

```javascript
  let AuserInstance = new LocalStorage('A-user');
  
  AuserInstance.set( 'userInfo', {name:'lisi',age:30});
  //root-localStorage 实例 数据为：{'userInfo'： {name:'lisi',age:30}}
  
  //AuserInstance.del('userInfo') //root-localStorage 实例 数据为：{}
  
  //AuserInstance.del('userInfo','name') //为：{'userInfo', {age:30}}
  
  //参数长度 类似 .get 参考get的参数
```

  

+ destroy: 从本地存储中 移除 这条数据

```javascript
  let AuserInstance = new LocalStorage('A-user');
  
  AuserInstance.set( 'userInfo', {name:'lisi',age:30});
  
  AuserInstance.destroy();//执行后，本都存储中已经没有这条数据了，root-localStorage 实例 已经销毁
  //后续 对 root-localStorage 实例 的操作也都无效
```

  

+ clear: 继承底层的 localStorage.clear() 功能效果一样

```js

  AuserInstance.clear()

```

  

+ listener : 监听 root-localStorage 实例 数据的更新 和 删除，

```js
    let AuserInstance = new LocalStorage('A-user');
    
    AuserInstance.set({
        'key1':'newValue',
        'key2':'newValue1',
        'key3':{a:1,b:{job:'IT'}},
    })
  
  
    //模拟用户操作
    setTimeout(()=>{
        
        AuserInstance.edit('key2',{color:'red'})
        
        AuserInstance.del('key3','b','job')
        
        //获取实例数据
        console.log(AuserInstance.data)
        
    },3000)
  
    //获取实例数据
    console.log(AuserInstance.data)
  
    //监听 edit 和 del 事件，并且返回一个json ，包含新旧值，和 事件类型
    AuserInstance.listener(function(json){
        console.log(json)
        //  json 是一个对象，{type:update | del, beforeUpdate: Object , update: Object }
    })
```

  

> script 标签 引入使用

```html
<script src="../dist/rookie-localstorage-web.js"></script>
<script>
    //创建一个 A用户 localStorage root 实例
    let AuserInstance = new LocalStorage('USER-A')
<script>
```

## Installation

```javascript
npm i rookie-localstorage-web
```

## useage

.vue 使用

```javascript
import LocalStorage from 'rookie-localstorage-web'

let AuserInstance = new LocalStorage('USER-A');

```

vue 项目中全局挂载

```javascript
//main.js
import Vue from 'vue'
import LocalStorage from 'rookie-localstorage-web'
Vue.prototype.LocalStorage = LocalStorage
```

.vue 使用

```javascript
export default {
    data () {
        return {
            userInstance: null
        }
    },
    created(){
        //用户登录后获取到用户信息 生成对应的 LocalStorage实例
        this.$http.api.getUserInfo('http://xxxx.com').then((data)=>{
            let username = data.username;
            let userInfo = data.userInfo;
            //生成对应username的 LocalStorage实例
            this.userInstance = new this.LocalStorage(username)
            //给对应username的 LocalStorage实例数据 添加属性
            this.userInstance.set('userInfo',userInfo)
        })
		
    },
    mounted(){
        
    },
    methods: {
		
    }
}
```

