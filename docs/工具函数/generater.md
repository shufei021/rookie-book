# generater

```js
/*
 * Date.js v1.0.0
 * Anthor  Shu Fei
 * create Date:2020-02-03
 * update Date:2020-03-01
 */
function Generater(){}
/**
 * 生成随机数
 * @param {Number | Object} start 范围起始数字
 * @param {Number} end 范围终止数字
 * @param {Number} count 随机数个数
 * @param {Boolean} isRepeat 是否重复
 * @return 随机数数组
 */
export const randomNum = function (start,end,count,isRepeat = true){
    var _isRepeat = true;
    if(arguments.length==1 && arguments[0] !==null && typeof arguments[0] === 'object' ){
        var {start,end,count,...reset} = arguments[0]
        _isRepeat = reset.isRepeat=== undefined ?true:reset.isRepeat === false? false : reset.isRepeat ;
    }else{
        _isRepeat = isRepeat
    }
    var _arr= []
    var _max_count =isRepeat? count : end - start + 1
    var _count = count > _max_count? _max_count : count

    while(_arr.length < _count){
        var random = Math.ceil(Math.random()*end)
        var _condition = random>=start && random<=end 
        if(_condition){
            if(_isRepeat){
                _arr.push(random)
            }else{
                !_arr.includes(random) && _arr.push(random)
            }
        }   
    }
    return _arr
}

/**
 * 生成随机字符串
 * @param {Number} len 随机字符串的长度
 * @param {Boolean} isRepeat 是否重复 默认true
 * @return 长度为len的随机字符串
 */
export const randomStr = function (count,isRepeat=true){
    var strArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),res = '';
    var _count = isRepeat===true? count : count > 62? 62 : count;
    while(res.length < _count){
        var random = Math.floor(Math.random()*62)
        if(isRepeat){
            res+=strArr[random]
        }else{
            if(!res.includes(strArr[random])) {
                res+=strArr[random]
            }
        }
    }
    return res
}

/**
 * 生成Guid
 * @return guid
 */
export const guid = function(){
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    } return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


/**
 * 生成 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
 * @param {Number} days 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
 * @param {Boolean} s 指定时间
 * @return 数组
 */
export const passDaysDate = function(days,s)  {
    if(!arguments.length)return [];
    return [...Array(days*1+1).keys()].map(days=>new Date((s?new Date(s):Date.now()) - 86400000 * days).toLocaleDateString()).map(item=>item.split(/\/|-/).map(i=>i.padStart(2,'0')).join('-')).splice(1)
}

/**
 * 生成 范围内所有日期 包含起止日期
 * @param {String | Number} startDate 开始时间
 * @param {String | Number} endDate 结束时间
 * @return 数组
 */
export const between = function(startDate,endDate){
    var arr=[];
    var now=new Date();
    var endDate=endDate?endDate:(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate());
    var days=parseInt(Math.abs(new Date(startDate.split(' ')[0]+' 00:00:00') - new Date(endDate.split(' ')[0]+' 00:00:00'))/1000/24/60/60)+1;
    for(var i=0;i<days;i++){
        var stamp=new Date(new Date(startDate).getTime()+i*86400000);
        arr.push(stamp.getFullYear()+'-'+((stamp.getMonth()+1)<10?'0'+(stamp.getMonth()+1):(stamp.getMonth()+1))+'-'+(stamp.getDate()<10?'0'+stamp.getDate():stamp.getDate()))
    }
    return arr
}
Generater.prototype = {
    randomNum,
    randomStr,
    guid,
    passDaysDate,
    between
}

export default new Generater()
```