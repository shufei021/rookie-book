# url


```js
/*
 * Date.js v1.0.0
 * Anthor  Shu Fei
 * create Date:2020-01-28
 * update Date:2020-03-01
 */

/*
 * 描述：获取URL查询参数 
 * url: 传入的 url 地址，不传参数，则url默认是当前页面上的url地址
 * 没有参数返回 空对象 {}
 */

function getQueryParam(url = window.location.href){
    if(url.includes('?')){
        let right = url.split('?')[1].split('&');
        let res = {};
        for(let i = 0,len = right.length; i<len; i++) {
            let p = right[i].split('=');
            res[p[0]] = decodeURIComponent(p[1])
        }
        return res
    }else{
        return {}
    }
}

/*
 * 描述：获取URL查询参数对象中某个 key  的值 
 * url: 传入的 url 地址，不传参数，则url默认是当前页面上的url地址
 * key: 要查询参数对象的key
 * 没有值返回 undefined
 */

function getQueryParamValueByKey (key,url = window.location.href) {
    return getQueryParam(url)[key]
}


/*
 * 描述：baseURL +  params 序列化
 * url: 传入的 url 地址，不传参数，则url默认是当前页面上的url地址
 * 没有值返回 undefined
 */
function ParamSerialize (baseURL,params){
    return Object.keys(params).reduce((pre,cur)=> pre += ((pre===baseURL? '?':'&')+`${cur}=${params[cur]}`),baseURL)
}


```

**补充**
```js
function Url(){}

/**
* url 参数序列化
* @param {String} baseURL 
* @param {Object} params 
*/
export const serialize = function(baseURL,params){
   return Object.keys(params).reduce((pre,cur)=> pre += ((pre===baseURL? '?':'&')+`${cur}=${params[cur]}`),baseURL)
}

/**
 * 获取当前页面路径 或 指定路径 上的 参数集合
 * @param {String} url 指定一个url路径字符串
 * 
 */
export const getUrlParms = function(url){
    return  (url?url:location.href).includes('?')?(url?url:location.href).split('?')[1].match(/([^&=]*)=([^&]*)/g).reduce((pre,cur)=> {pre[cur.split('=')[0]] = cur.split('=')[1];return pre},{}):{}
}

Url.prototype = {
    serialize,
    getUrlParms
}
export default new Url()
```