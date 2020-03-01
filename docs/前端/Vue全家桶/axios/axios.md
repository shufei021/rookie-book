### axios的特点有哪些?

+ Axios 是一个基于 promise 的 HTTP 库，支持promise所有的API

+ 从浏览器中创建 [XMLHttpRequests](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest)

+ 从 node.js 创建 [http](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.org%2Fapi%2Fhttp.html) 请求

+ 支持 [Promise](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FPromise) API

+ 拦截请求和响应

+ 转换请求数据和响应数据

+ 取消请求

+ 自动转换 JSON 数据

+ 客户端支持防御 [XSRF](https://links.jianshu.com/go?to=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCross-site_request_forgery)

  > 防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。



### axios有哪些常用方法？

+ axios.get(url[, config])  //get请求用于列表和信息查询
+ axios.delete(url[, config]) //删除
+ axios.post(url[, data[, config]]) //post请求用于信息的添加
+ axios.put(url[, data[, config]]) //更新操作

### axios相关配置属性？

+ `url`是用于请求的服务器URL

+ `method`是创建请求时使用的方法,默认是get

+ `baseURL`将自动加在`url`前面，除非`url`是一个绝对URL。它可以通过设置一个`baseURL`便于为axios实例的方法传递相对URL

+ `transformRequest`允许在向服务器发送前，修改请求数据，只能用在'PUT','POST'和'PATCH'这几个请求方法

+ `headers`是即将被发送的自定义请求头

  ```javascript
  headers:{'X-Requested-With':'XMLHttpRequest'},
  ```

+ `params`是即将与请求一起发送的URL参数，必须是一个无格式对象(plainobject)或URLSearchParams对象

  ```javascript
  params:{
      ID:12345
  },
  ```

+ `auth`表示应该使用HTTP基础验证，并提供凭据
  这将设置一个`Authorization`头，覆写掉现有的任意使用`headers`设置的自定义`Authorization`头

  ```javascript
  auth:{
      username:'janedoe',
      password:'s00pers3cret'
  },
  ```

+ 'proxy'定义代理服务器的主机名称和端口
  `auth`表示HTTP基础验证应当用于连接代理，并提供凭据
  这将会设置一个`Proxy-Authorization`头，覆写掉已有的通过使用`header`设置的自定义`Proxy-Authorization`头。

  ```javascript
  proxy:{
      host:'127.0.0.1',
      port:9000,
      auth::{
          username:'mikeymike',
          password:'rapunz3l'
      }
  },
  ```

  

