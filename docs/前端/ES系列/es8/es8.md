## ES8 (ES2017)

> **ES8 中主要的6个新特性：**
>
> + Shared memory and atomics （共享内存和原子）
> + Async Functions（异步函数）
> + Object.values/Object.entries （配合Object.keys使用）
> + String padding （字符串填充）
> + Object.getOwnPropertyDescriptors()
> + Trailing commas in function parameter lists and calls（在函数参数列表和调用中减少逗号的使用）

### 1.SharedArrayBuffer和Atomics

如果之前您没有接触过ArrayBuffer相关知识的话，建议您从内存管理速成教程系列漫画解说入门，强推：

+ [A crash course in memory management](https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/)
+ [A cartoon intro to ArrayBuffers and SharedArrayBuffers](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)
+ [Avoiding race conditions in SharedArrayBuffers with Atomics](https://hacks.mozilla.org/2017/06/avoiding-race-conditions-in-sharedarraybuffers-with-atomics/)

------

ECMAScript 2017 特性 SharedArrayBuffer 和 atomics”，由Lars T. Hansen设计。它引入了一个新的构造函数 SharedArrayBuffer 和 具有辅助函数的命名空间对象 Atomics。

在我们开始之前，让我们澄清两个相似但截然不同的术语：并行(Parallelism) 和 并发(Concurrency) 。他们存在许多定义，我使用的定义如下：

+ 并行(Parallelism) (parallel 并行 vs. serial 串行)：同时执行多个任务；
+ 并发(Concurrency) (concurrent 并发 vs. sequential 连续)：在重叠的时间段内（而不是一个接一个）执行几个任务。

#### JS并行的历史

+ JavaScript 在单线程中执行。某些任务可以异步执行：浏览器通常会在单线程中运行这些任务，然后通过回调将结果重新加入到单线程中。
+ Web workers 将任务并行引入了 JavaScript ：这些是相对重量级的进程。每个 workers 都有自己的全局环境。默认情况下，不共享任何内容。 workers 之间的通信（或在 workers 和主线程之间的通信）发展：
  + 起初，你只能发送和接收字符串。
  + 然后，引入结构化克隆：可以发送和接收数据副本。结构化克隆适用于大多数数据（JSON 数据，TypedArray，正则表达式，Blob对象，ImageData对象等）。它甚至可以正确处理对象之间的循环引用。但是，不能克隆 error 对象，function 对象和 DOM 节点。
  + 可在 workers 之间的转移数据:当接收方获得数据时，发送方失去访问权限。
+ 通过 WebGL 使用 GPU 计算(它倾向于数据并行处理)

#### 共享数组缓冲区（Shared Array Buffers）

共享阵列缓冲区是更高并发抽象的基本构建块。它们允许您在多个 workers 和主线程之间共享 SharedArrayBuffer 对象的字节(该缓冲区是共享的，用于访问字节，将其封装在一个 TypedArray 中)这种共享有两个好处：

+ 你可以更快地在 workers 之间共享数据。
+ workers 之间的协调变得更简单和更快（与 postMessage() 相比）。

```javascript
// main.js
const worker = new Worker('worker.js');

// 要分享的buffer
const sharedBuffer = new SharedArrayBuffer( // (A)
    10 * Int32Array.BYTES_PER_ELEMENT); // 10 elements

// 使用Worker共用sharedBuffer
worker.postMessage({sharedBuffer}); // clone

// 仅限本地使用
const sharedArray = new Int32Array(sharedBuffer); // (B)
```

创建一个共享数组缓冲区（Shared Array Buffers）的方法与创建普通的数组缓冲区(Array Buffer)类似：通过调用构造函数，并以字节的形式指定缓冲区的大小(行A)。你与 workers 共享的是 缓冲区（buffer） 。对于你自己的本地使用，你通常将共享数组缓冲区封装在 TypedArray 中(行B)。

workers的实现如下所列。

```javascript
// worker.js
self.addEventListener('message', function (event) {
    const {sharedBuffer} = event.data;
    const sharedArray = new Int32Array(sharedBuffer); // (A)
    // ···
});
```

#### sharedArrayBuffer 的 API

+ 构造函数

  new SharedArrayBuffer(length)

  > 创建一个 length 字节的 buffer(缓冲区)。

+ 静态属性：

  get SharedArrayBuffer[Symbol.species]

  > 默认情况下返回 this。 覆盖以控制 slice() 的返回。

+ 实例属性：

  get SharedArrayBuffer.prototype.byteLength()

  > 返回 buffer(缓冲区) 的字节长度。

  SharedArrayBuffer.prototype.slice(start, end)

  > 创建一个新的 this.constructor[Symbol.species] 实例，并用字节填充从（包括）开始到（不包括）结束的索引。

#### Atomics: 安全访问共享数据

例如：

```javascript
// main.js
sharedArray[1] = 11;
sharedArray[2] = 22;
```

在单线程中，您可以重新排列这些写入操作，因为在中间没有读到任何内容。 对于多线程，当你期望以特定顺序执行写入操作时，就会遇到麻烦：

```javascript
// worker.js
while (sharedArray[2] !== 22) ;
console.log(sharedArray[1]); // 0 or 11
```

Atomics 方法可以用来与其他 workers 进行同步。例如，以下两个操作可以让你读取和写入数据，并且不会被编译器重新排列：

+ Atomics.load(ta : TypedArray, index)
+ Atomics.store(ta : TypedArray, index, value : T)

这个想法是使用常规操作读取和写入大多数数据，而 Atomics 操作（load ，store 和其他操作）可确保读取和写入安全。通常，您将使用自定义同步机制，例如锁，其实现基于Atomics。

这是一个非常简单的例子，它总是有效的：

```javascript
// main.js
console.log('notifying...');
Atomics.store(sharedArray, 0, 123);

// worker.js
while (Atomics.load(sharedArray, 0) !== 123) ;
console.log('notified');
```

#### Atomics 的 API

Atomic 函数的主要操作数必须是 Int8Array ，Uint8Array ，Int16Array ，Uint16Array ，Int32Array 或 Uint32Array 的一个实例。它必须包裹一个 SharedArrayBuffer 。

所有函数都以 atomically 方式进行操作。存储操作的顺序是固定的并且不能由编译器或 CPU 重新排序。

加载和存储

+ Atomics.load(ta : TypedArray<T>, index) : T
  读取和返回 ta[index] 上的元素，返回数组指定位置上的值。
+ Atomics.store(ta : TypedArray<T>, index, value : T) : T
  在 ta[index] 上写入 value，并且返回 value。
+ Atomics.exchange(ta : TypedArray<T>, index, value : T) : T
   将 ta[index] 上的元素设置为 value ，并且返回索引 index 原先的值。
+ Atomics.compareExchange(ta : TypedArray<T>, index, expectedValue, replacementValue) : T
   如果 ta[index] 上的当前元素为 expectedValue , 那么使用 replacementValue 替换。并且返回索引 index 原先（或者未改变）的值。

简单修改 TypeArray 元素

以下每个函数都会在给定索引处更改 TypeArray 元素：它将一个操作符应用于元素和参数，并将结果写回元素。它返回元素的原始值。

+ Atomics.add(ta : TypedArray<T>, index, value) : T
  执行 ta[index] += value 并返回 ta[index] 的原始值。
+ Atomics.sub(ta : TypedArray<T>, index, value) : T
  执行 ta[index] -= value 并返回 ta[index] 的原始值。
+ Atomics.and(ta : TypedArray<T>, index, value) : T
  执行 ta[index] &= value 并返回 ta[index] 的原始值。
+ Atomics.or(ta : TypedArray<T>, index, value) : T
  执行 ta[index] |= value 并返回 ta[index] 的原始值。
+ Atomics.xor(ta : TypedArray<T>, index, value) : T
  执行 ta[index] ^= value 并返回 ta[index] 的原始值。

等待和唤醒

+ Atomics.wait(ta: Int32Array, index, value, timeout=Number.POSITIVE_INFINITY) : ('not-equal' | 'ok' | 'timed-out')
   如果 ta[index] 的当前值不是 value ，则返回 'not-equal'。否则继续等待，直到我们通过 Atomics.wake() 唤醒或直到等待超时。 在前一种情况下，返回 'ok'。在后一种情况下，返回'timed-out'。timeout 以毫秒为单位。记住此函数执行的操作：“如果 ta[index] 为 value，那么继续等待” 。
+ Atomics.wake(ta : Int32Array, index, count)
  唤醒等待在 ta[index] 上的 count workers。



### 2.Object.values and Object.entries

Object.values() 方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于for-in循环枚举原型链中的属性 )。

obj参数是需要待操作的对象。可以是一个对象，或者一个数组（是一个带有数字下标的对象，[10,20,30] -> {0: 10,1: 20,2: 30})。

```javascript
const obj = { x: 'xxx', y: 1 };
Object.values(obj); // ['xxx', 1]

const obj = ['e', 's', '8']; // 相当于 { 0: 'e', 1: 's', 2: '8' };
Object.values(obj); // ['e', 's', '8']

// 当我们使用数字键值时，返回的是数字排序
// 根据键值排序
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.values(obj); // ['yyy', 'zzz', 'xxx']

Object.values('es8'); // ['e', 's', '8']
```

Object.entries 方法返回一个给定对象自身可遍历属性 [key, value] 的数组， 排序规则和 Object.values 一样。这个方法的声明比较琐碎:

```javascript
const obj = { x: 'xxx', y: 1 };
Object.entries(obj); // [['x', 'xxx'], ['y', 1]]

const obj = ['e', 's', '8'];
Object.entries(obj); // [['0', 'e'], ['1', 's'], ['2', '8']]

const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]

Object.entries('es8'); // [['0', 'e'], ['1', 's'], ['2', '8']]
```

### 3.String padding

为 String 对象增加了 2 个函数：padStart 和 padEnd。

像它们名字那样，这几个函数的主要目的就是填补字符串的首部和尾部，为了使得到的结果字符串的长度能达到给定的长度。你可以通过特定的字符，或者字符串，或者默认的空格填充它。下面是函数的声明：

```javascript
str.padStart(targetLength [, padString])
str.padEnd(targetLength [, padString])
```

这些函数的第一个参数是 targetLength（目标长度），这个是结果字符串的长度。第二个参数是可选的 padString（填充字符），一个用于填充到源字符串的字符串。默认值是空格。

```javascript
'es8'.padStart(2);          // 'es8'
'es8'.padStart(5);          // '  es8'
'es8'.padStart(6, 'woof');  // 'wooes8'
'es8'.padStart(14, 'wow');  // 'wowwowwowwoes8'
'es8'.padStart(7, '0');     // '0000es8'

'es8'.padEnd(2);            // 'es8'
'es8'.padEnd(5);            // 'es8  '
'es8'.padEnd(6, 'woof');    // 'es8woo'
'es8'.padEnd(14, 'wow');    // 'es8wowwowwowwo'
'es8'.padEnd(7, '6');       // 'es86666'
```

### 4.Object.getOwnPropertyDescriptors

getOwnPropertyDescriptors 方法返回指定对象所有自身属性的描述对象。属性描述对象是直接在对象上定义的，而不是继承于对象的原型。ES2017加入这个函数的主要动机在于方便将一个对象深度拷贝给另一个对象，同时可以将getter/setter拷贝。声明如下：

```javascript
Object.getOwnPropertyDescriptors(obj)
```

obj 是待操作对象。返回的描述对象键值有：configurable, enumerable, writable, get, set and value。

```javascript
const obj = { 
  get es7() { return 777; },
  get es8() { return 888; }
};
Object.getOwnPropertyDescriptor(obj);
// {
//   es7: {
//     configurable: true,
//     enumerable: true,
//     get: function es7(){}, //the getter function
//     set: undefined
//   },
//   es8: {
//     configurable: true,
//     enumerable: true,
//     get: function es8(){}, //the getter function
//     set: undefined
//   }
// }
```

### 5.结尾逗号

结尾逗号用代码展示非常明了：

```javascript
// 参数定义时
function foo(
    param1,
    param2,
) {}

// 函数调用时
foo(
    'abc',
    'def',
);

// 对象中
let obj = {
    first: 'Jane',
    last: 'Doe',
};

// 数组中
let arr = [
    'red',
    'green',
    'blue',
];
```

这个改动有什么好处呢？

- 首先，重新排列项目更简单，因为如果最后一项更改其位置，则不必添加和删除逗号。

- 其次，它可以帮助版本控制系统跟踪实际发生的变化。例如，从：

  ```javascript
  [
      'foo'
  ]
  ```

  修改为

  ```javascript
  [
      'foo',
      'bar'
  ]
  ```

导致线条'foo'和线条'bar'被标记为已更改，即使唯一真正的变化是后一条线被添加。

### 6.Async Functions

Async Functions也就是我们常说的Async/Await，相信大家对于这个概念都已经不陌生了。Async/Await是一种用于处理JS异步操作的语法糖，可以帮助我们摆脱回调地狱，编写更加优雅的代码。

通俗的理解，async关键字的作用是告诉编译器对于标定的函数要区别对待。当编译器遇到标定的函数中的await关键字时，要暂时停止运行，带到await标定的函数处理完毕后，再进行相应操作。如果该函数fulfiled了，则返回值是fulfillment value，否则得到的就是reject value。

下面通过拿普通的promise写法来对比，就很好理解了：

```javascript
async function asyncFunc() {
    const result = await otherAsyncFunc();
    console.log(result);
}

// Equivalent to:
function asyncFunc() {
    return otherAsyncFunc()
    .then(result => {
        console.log(result);
    });
}
```

按顺序处理多个异步函数的时候优势更为明显：

```javascript
async function asyncFunc() {
    const result1 = await otherAsyncFunc1();
    console.log(result1);
    const result2 = await otherAsyncFunc2();
    console.log(result2);
}

// Equivalent to:
function asyncFunc() {
    return otherAsyncFunc1()
    .then(result1 => {
        console.log(result1);
        return otherAsyncFunc2();
    })
    .then(result2 => {
        console.log(result2);
    });
}
```

并行处理多个异步函数：

```javascript
async function asyncFunc() {
    const [result1, result2] = await Promise.all([
        otherAsyncFunc1(),
        otherAsyncFunc2(),
    ]);
    console.log(result1, result2);
}

// Equivalent to:
function asyncFunc() {
    return Promise.all([
        otherAsyncFunc1(),
        otherAsyncFunc2(),
    ])
    .then([result1, result2] => {
        console.log(result1, result2);
    });
}
```

处理错误：

```javascript
async function asyncFunc() {
    try {
        await otherAsyncFunc();
    } catch (err) {
        console.error(err);
    }
}

// Equivalent to:
function asyncFunc() {
    return otherAsyncFunc()
    .catch(err => {
        console.error(err);
    });
}
```

#### 含义

> ES2017 标准引入了 async 函数，使得异步操作变得更加方便。

#### 基本用法

> **async函数返回一个 Promise 对象**，可以使用`then`方法添加回调函数。当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

```javascript
//第一步 通过商品名称获取该商品库存数量
async function getGoodsStockByName(name){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(10)
        }, 2000);
    });
}

//第二步 根据商品数量和单价 计算总价格
async function getStockPrice(count,price){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(count*price)
        }, 3000);
    });
}


async function getStockPriceByName(name,price) {
  const goodsCount = await getGoodsStockByName(name);
  const stockPrice = await getStockPrice(goodsCount,price);
  return stockPrice;
}

getStockPriceByName('apple',5).then(function (result) {
  console.log(result);
});
```

> 3秒后输出 50 ，该示例中，getGoodsStockByName和getStockPrice均是异步，在getStockPriceByName方法中，第二个 await 会等第一个await成功返回值后，再执行第二个 await，这样第二个 await 拿到第一个await 的值后，继续计算，最后返回结果，因为`async`函数返回一个 Promise 对象，所以可以以then的形式拿到最终的值。

#### 返回 Promise 对象

```javascript
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))    // "hello world"
```

> `async`函数返回一个 Promise 对象
>
> `async`函数内部`return`语句返回的值，会成为`then`方法回调函数的参数
>
> 上面代码中，函数`f`内部`return`命令返回的值，会被`then`方法回调函数接收到

#### 错误处理机制

```javascript
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: 出错了
```

> `async`函数内部抛出错误，会导致返回的 Promise 对象变为`reject`状态。抛出的错误对象会被`catch`方法回调函数接收到。

