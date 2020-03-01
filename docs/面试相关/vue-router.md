## 一、vue-router有几种钩子函数？具体是什么及其参数

####  **1、全局路由。**（全局导航钩子主要有两种钩子：前置守卫、后置钩子。）

   ##### 注册一个全局前置守卫：**`beforeEach`**

```javascript
const router = new VueRouter({ ... });

router.beforeEach((to, from, next) => {

     // do someting

});
```

+ 这三个参数 **to** 、**from** 、**next** 分别的作用：
  - **to: Route，代表要进入的目标，它是一个路由对象；**
  - **from: Route，代表当前正要离开的路由，同样也是一个路由对象；**
  - **next: Function，这是一个必须需要调用的方法，而具体的执行效果则依赖 next 方法调用的参数；**
    - next参数须知：
      - next()：进入管道中的下一个钩子，如果全部的钩子执行完了，则导航的状态就是 confirmed（确认的）；
      - next(false)：这代表中断掉当前的导航，即 to 代表的路由对象不会进入，被中断，此时该表 URL 地址会被重置到 from 路由对应的地址；
      - next(‘/’) 和 next({path: ‘/’})：在中断掉当前导航的同时，跳转到一个不同的地址；
      - next(error)：如果传入参数是一个 Error 实例，那么导航被终止的同时会将错误传递给 router.onError() 注册过的回调；

​       

**注意：next 方法必须要调用，否则钩子函数无法 resolved；**

##### 全局后置钩子：**`afterEach`**

```javascript
router.afterEach((to,from)=>{
  if(to.path === "/news"){
    alert("进来news了哦");
  }
})
```

> **注意：不同于前置守卫，后置钩子并没有 next 函数，也不会改变导航本身**

#### **2.路由独享的钩子**

> 顾名思义，即单个路由独享的导航钩子，它是在路由配置上直接进行定义的：

```javascript
cont router = new VueRouter({

    routes: [

        {

            path: '/file',

            component: File,

            beforeEnter: (to, from ,next) => { 

                // do someting 

            }

        }

    ]

});
```

> **注意：参数的使用，和全局前置守卫是一样的**

#### 3. 组件内的导航钩子

> 组件内的导航钩子主要有这三种：**beforeRouteEnter**、**beforeRouteUpdate**、**beforeRouteLeave**。他们是直接在路由组件内部直接进行定义的。

 具体用法：

```javascript
const File = {

    template: `<div>This is file</div>`,

    beforeRouteEnter(to, from, next) {

        // do someting

        // 在渲染该组件的对应路由被 confirm 前调用

    },

    beforeRouteUpdate(to, from, next) {

        // do someting

        // 在当前路由改变，但是依然渲染该组件是调用 

    }，

    beforeRouteLeave(to, from ,next) {

        // do someting

        // 导航离开该组件的对应路由时被调用

    }

}
```

> **注意：beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，剩下两个钩子则可以正常获取组件实例 this**

但是并不意味着在 beforeRouteEnter 中无法访问组件实例，我们可以通过给 next 传入一个回调来访问组件实例。在导航被确认是，会执行这个回调，这时就可以访问组件实例了，如:

```javascript
beforeRouteEnter(to, from, next) {

    next (vm => {

        // 这里通过 vm 来访问组件实例解决了没有 this 的问题

    })

}
```

> 注意，仅仅是 beforRouteEnter 支持给 next 传递回调，其他两个并不支持。因为归根结底，支持回调是为了解决 this 问题，而其他两个钩子的 this 可以正确访问到组件实例，所有没有必要使用回调

总结：

> 最后是完整的导航解析流程：
>
>   1、导航被触发
>
>   2、在失活的组件里调用离开守卫
>
>   3、调用全局的 beforeEach 守卫
>
>   4、在重用的组件里调用 beforeRouteUpdate 守卫
>
>   5、在路由配置里调用 beforEnter
>
>   6、解析异步路由组件
>
>   7、在被激活的组件里调用 beforeRouteEnter
>
>   8、调用全局的 beforeResolve 守卫
>
>   9、导航被确认
>
>   10、调用全局的 afterEach 钩子
>
>   11、触发 DOM 更新
>
>   12、在创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数



#### 简记

+ 全局路由钩子

  - **`beforeResolve`** (全局解析守卫)

    > 这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用
    >
    > 即在 beforeEach 和 组件内beforeRouteEnter 之后，afterEach之前调用

  - **`beforEach`**（全局前置守卫）

  - **`afterEach`**（全局后置钩子）

    > `after` 钩子没有 `next` 方法，不能改变导航

+ 某个路由独享钩子

  - **`beforeEnter`**
  - **`beforeLeave`**

+ 组件内的钩子

  - **`beforeRouteEnter`**

    **调用场景：**在渲染该组件的对应路由被 confirm 前调用

    > 不能获取组件实例 `this`，因为当钩子执行前，组件实例还没被创建

  - **`beforeRouteUpdate`**

    **调用场景：**在当前路由改变，但是该组件被复用时调用

    > 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
    >
    > 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    >
    > 可以访问组件实例 `this`

  - **`beforeRouteLeave`**

    **调用场景：**导航离开该组件的对应路由时调用

    > 可以访问组件实例 `this`

