### `vue`的 生命周期

在 vue 实例化的过程中，也就是new Vue( )的对象过程

+ 第一步

  > 首先执行了init
  >
  > init是vue组件里面默认去执行的

  - 在init过程中，首先调用了beforeCreate

    > 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用

    - data里面的值获取不到的
    - DOM也还没有挂载

    > 数据观测 (data observer) 和 event/watcher 事件配置

  - 然后在注射和反应的时候，再去调用created





+ 实例化开始

+ init

+ beforeCreate

+ 数据观测 (data observer) 和 event/watcher 事件配置 （注射和反应）

  - 数据观测 (data observer)
  - 属性和方法的运算
  - watch/event 事件回调
  - 尚未挂载

+ created

  - 实例完成后立即调用

+ beforeMount

  > **在挂载开始之前**被调用：相关的 `render` 函数首次被调用。

  + `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子

+ mounted

  > `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 `mounted` 被调用时 `vm.$el` 也在文档内

+ boforeUpdate

  > 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器

+ updated

  > 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  >
  > 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。

+ activated

  > keep-alive 组件激活时调用。

+ deactivated

  > keep-alive 组件停用时调用

+ beforeDestroy

  > 实例销毁之前调用。在这一步，实例仍然完全可用

+ destroyed

  > Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

+ errorCaptured

  > 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。



​	

