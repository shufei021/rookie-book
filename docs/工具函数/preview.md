# preview

> 回显类

```js
/*
 * Date.js v1.0.0
 * Anthor  Shu Fei
 * create Date:2020-07-21
 * update Date:2020-03-01
 */

function Preview(){}

//回显月份
export const echoMonth = function(i){
    return i>0&&i<13? ['一','二','三','四','五','六','七','八','九','十','十一','十二'][i-1]+'月':'Invalid month'
}

//回显星期
export const echoWeek = function(i){
    return i>0&&i<8?'周'+['一','二','三','四','五','六','日'][i-1]:'Invalid week'
}

//回显时间
export const echoDate = function(target = Date.now()){
    /** 
     * 回显 
     * {
     * <60s:'刚刚',
     * '>60s && 3600s':'x分钟之前',
     *  '>3600s && <86400s':'x小时之前',
     * '昨天':'昨天',
     * '前天':'前天',
     * '具体日期':'月日',
     * '不是当年':'显示年月日'
     * }
     * */
    // 时间格式参数 2018/07/08 06:05:59 | 2018-07-08 06:05:59 | 时间戳
    let targetStamp = parseInt(new Date(target).getTime()/1000)//参数转时间戳
    let diff = parseInt((Date.now()/1000 - targetStamp))// 计算 与当前时间相差秒数
    let dt =new Date();
    let today = dt.toLocaleDateString() //今天日期 年月日
    let yestoday = new Date(dt.setDate(dt.getDate() - 1)).toLocaleDateString()//昨天日期 年月日
    let beforeYestoday = new Date(dt.setDate(dt.getDate() - 1)).toLocaleDateString()//前天日期 年月日
    let todayDawnStamp = new Date(today +' 00:00:00').getTime()/1000 //2020/2/8
    let yestodayDawnStamp =new Date(yestoday +' 00:00:00').getTime()/1000 //昨天凌晨 时间戳 （秒）2020/2/7
    let beforeYestodayDawnStamp = new Date(beforeYestoday +' 00:00:00').getTime()/1000 //前天凌晨 时间戳（秒） 2020/2/6
    if(diff < 60) {
        return '刚刚'
    }else if(diff > 60 && diff <3600) {
        return parseInt(diff/60)+'分钟前'
    }else if(diff >= 3600 && diff < 86400){
        return parseInt(diff/3600)+'小时前'
    }else if( targetStamp < todayDawnStamp && targetStamp >= yestodayDawnStamp){
        return '昨天'
    }else if(targetStamp <= yestodayDawnStamp && targetStamp >= beforeYestodayDawnStamp){
        return '前天'
    }else if(targetStamp > beforeYestodayDawnStamp){
        let d = new Date(target);
        return (d.getMonth() +1) +'-'+ d.getDate()
    }else {
        let t = new Date(targetStamp*1000).toLocaleDateString();
        let c = new Date().getFullYear();
        return t.substr(0,4) == c?t.slice(5):t
    }
}
Preview.prototype= {
    echoMonth,
    echoWeek,
    echoDate
}

export default new Preview()
```