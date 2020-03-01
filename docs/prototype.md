## 原型链类

#### 创建对象的三种方法

+ **字面量**

  ```javascript
  var o1 = {name:'O1'}
  var o11 = new Object({name:'O11'})
  ```

+ **通过构造函数**

  ```javascript
  var M = function(){ this.name = 'O2' }
  var o2 = new M()
  ```

+ **Obejct.create**

  ```javascript
  var P = {name:'O3'} 
  
  var o3 = Object.create(P)
  
  //把新对象P 赋给 原型对象 o3的原型对象
  
  o3.__proto__ === p
  //Object.create 创建对象是用原型链来连接的
  ```

  > Object.create 创建对象是用原型链来连接的

![原型链](http://moxiaofei.com/wp-content/uploads/2019/05/QQ图片20191222222504.png)

> **构造函数 通过 new 和实例对象关联**



> **函数才有 prototype 属性**，但也有 `__proto__`这个属性，因为函数也是对象，其构造函数是 **Function**

```javascript
function D (){}
D.__proto__ === Function.prototype //true
```



> **实例对象才有 `__proto__`这个属性**

> **构造函数和原型对象的关系：**
>
> **函数创建的时候，JS会为其自动添加一个prototype属性，这个属性是一个指针，指向一个对象，这个对象包含了所有实例对象共享的属性和方法，默认情况下，这个原型对象会有一个constructor属性，这个属性指向该函数**

代码解释：

```javascript
//构造函数
function M(){}

//实例对象
var m = new M()


m.__proto__ === M.prototype   //true

M.prototype.construtor === M  //true

m.__proto__.construtor === M  //true
```

> **原型链：**
>
> **原型链 **就是从一个实例对象 往上找 构造这个实例的 相关联的 对象，然后这个相关联的对象再往上找，它又有的创造它的上一级的原型对象，以此类推，一直到Object.prototype终止，Object.prototype是原型链的顶端
>
> **原型链是通过什么来实现向上找的这么个过程呢？**
>
> 其实就是通过prototype这个原型和`__proto__`这个属性来完成原型链的查找

> **构造函数** 通过 new 运算符 生成实例

```javascript
//模拟new 运算符
var myNew = function(func){
    var o = Object.create(func.prototype)
    var k = func.call(o)
    if(typeof k === 'object'){
       return k
    } else {
        return o
    }
} 
```





> 构造函数创建的时候，会为其自动添加一个 **prototype** 属性，这个属性





![原型链](http://moxiaofei.com/wp-content/uploads/2019/05/QQ图片20191222223817.png)

> 实例对象 通过  **`__proto__`**  找到 这个构造函数
>
> 这个构造函数 引用了一个prototype原型对象
>
> 所以 实例对象的 **`__proto__`** 关联的其实是这个原型对象

> 实例对象的 **`__proto__`** 是全等于 构造函数的 prototype的

**instanceof**

```javascript
funciton M(){}

var m = new M()

m instanceof M //true

m instanceof Object  //true

M.prototype.__proto__ === Object.prototype //true
```

只要在这个原型链上的

需求真正的判断是不是它的实例

```javascript
funciton M(){}

var m = new M()

m.__proto__.constructor === M  //true 就说明m是M真正实例
```

> 函数的原型对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有**一个原型链指针_proto_，该指针指向上一层的原型对象，而上一层的原型对象的结构依然类似，这样利用_proto_一直指向Object的原型对象上，而Object的原型对象用Object._proto_ = null表示原型链的最顶端，如此变形成了javascript的原型链继承，同时也解释了为什么所有的javascript对象都具有Object的基本方法**

> 每一个JavaScript对象(除了 null )都具有的一个属性，叫**proto**，这个属性会指向该对象的原型

