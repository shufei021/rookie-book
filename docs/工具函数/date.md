# date

```js
/*
 * Date.js v1.0.1
 * Anthor  Shu Fei
 * create Date:2018-07-21
 * update Date:2020-02-07
 */

function DATE(){}

/**
 * (验证类)
 * 检查年份是否是闰年
 * 参数可选,表示检查给定的年份
 * 不传参默认检查当前年份
 */
export const isLeapYear = function(){
    var y=arguments[0]?arguments[0].split(' ')[0].split(/[\_./-]/)[0]:new Date().getFullYear();
    return y%4===0&&y%100!==0 || y%400===0
}

/**
 * (验证类)
 * 只验证年月日是否合法
 * 参数一个,表示给定验证的日期
 * 验证日期
 */
export const isValidDate = function(date){
 	var f=date.split(/[\_./-]/);
 	var s=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
	return reg.test(s)
} 

/**
 * (验证类)
 * 只验证时分秒是否合法
 * 参数一个,表示给定验证的时分秒
 * 验证时间
 */
export const isValidTime = function(time){
 	var f=time.split(':');
 	var s=f[0]+':'+(f[1].length<2?'0'+f[1]:f[1])+':'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
	return reg.test(s)
}

/**
 * (验证类)
 * 检查验证完整日期 年月日时分秒格式是否合法
 * 参数一个,表示给定验证的年月日时分秒
 * 验证日期时间格式
 */

export const isValidateDateTime = function(dateTime){
 	var a=dateTime.split(' ');
 	var f=a[0].split(/[\_./-]/);
 	var s=a[1].split(':');
 	var zf=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
 	var zs=s[0]+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2]);
 	var regDate=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
 	var regTime=/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
 	return regDate.test(zf)&&regTime.test(zs)
}


 /*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n天或后n天
 * 第二个参数可选,表示给定日期,获取给定日期的前n天或后n天,否则获取为当前日期的前n天或后n天
 * n为正表示前n天 -n表示后n天
 */
export const getBeAfDateByDate = function(n){
    var dt =arguments[1]?new Date(arguments[1]):new Date();
    dt.setDate(dt.getDate() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}

/*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n月或后n月日期
 * 第二个参数可选,表示给定日期,获取给定日期的前n月或后n月,否则获取为当前日期的前n月或后n月日期
 * 传参获取n月前的日期 6为半年前 12为1年前
 * n为正表示前n月 -n表示后n月
 */
export const getBeAfDateByMonth = function(n){
    var dt =arguments[1]?new Date(arguments[1]): new Date();
    dt.setMonth(dt.getMonth() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}

/*
 * (获取类)
 * 不传参则获取当天的星期
 * 传参的参数表示给定的日期,返回对应的星期,参数个数为年月日
 * 获取当前时间所在的星期,
 */
export const getWeek =  function (){
	var i=arguments[0]?new Date(arguments[0]).getDay():new Date().getDay()
	return ['日','一','二','三','四','五','六'][i]
}

/*
 * (获取类)
 * 第一个参数n必填,星期一 ~ 星期日对应参数是1 ~ 0
 * 第二参数可选,表示给定日期,不填写默认为当前日期
 * 获取当前日期或给定日期所在周,给定一个星期n,返回对应的日期
 */
export const getWeekByDate = function(week){
	var t=arguments[1]?new Date(arguments[1]):new Date()
	var i=t.getDay()==0?7:t.getDay();
	var week=week==0?7:week;
	return i==week?t:(function(){t.setDate(t.getDate() -(i-week));return t})()
}


/* (获取类)
 * 任意给一个日期，获取这个日期所在的月份有多少天
 */

export const getMaxDayOfDate = function(){
    var dt=arguments[0]?new Date(arguments[0]):new Date()
    dt.setMonth(dt.getMonth() + 1)
    dt.setDate(1)
    dt.setDate(dt.getDate() -1)
    return dt.getDate() 
}


/* (获取类)
 * 不传日期,则获取当前日期所在年的第几周
 * 传参则获取给定日期所在年的周数
 */
export const getWeekNumOfYear = function(){
	if(arguments[0]){
		var eStamp=new Date(arguments[0]).getTime();
		var dt=new Date(arguments[0]);
		dt.setMonth(0)
		dt.setDate(1)
		var sStamp=dt.getTime()
		return Math.ceil(((eStamp-sStamp)/1000/24/60/60 + 1)/7)
	}else{
		var dt=new Date();
		var eStamp=new Date(dt).getTime();
		dt.setMonth(0)
		dt.setDate(1)
		var sStamp=dt.getTime()
		return Math.ceil((eStamp-sStamp)/1000/24/60/60/7)
	}
}

/* (获取类)
 * 获取两个时间戳相差多少天
 */ 
export const getDaysByStamps = function(stamp1,stamp2){
	return parseInt(Math.abs(stamp1-stamp2)/1000/60/60/24)
}

/**
 * 
 * (获取类)
 * 日期天数差  参数格式:年月日
 * 第一个参数：开始日期 必填项
 * 第二个参数可选，填写则表示给定结束日期，不填写结束日期默认为当前日期
 */	
export const getDateDiff = function(){
	if(arguments.length===1){//相对于当前日期
		var e=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		return parseInt(Math.abs(new Date(d).getTime() - new Date(e).getTime())/1000/24/60/60)
	}else if(arguments.length===2){//比较两个指定日期
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var e=arguments[1].split(' ')[1]?arguments[1]:arguments[1]+' 00:00:00';
		return parseInt(Math.abs(new Date(s).getTime() - new Date(e).getTime())/1000/24/60/60)
	}else{
		return ''
	}
}


/* 
 * (获取类)
 * 只传开始日期,返回开始日期到当前日期的所有日期
 * 起止日期都传,返回起止日期之间并包含起止日期在内的所有日期
*/
export const getAllDatesBetween = function(startDate,endDate){
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



/*
* (获取类)
* 获取日期中部分信息
* 可获取信息:y M d h s m
* 年月日时分秒
* 第一个参数为日期部分信息的名字必填项
* 第二个参数可选,表示给定时间戳,获取时间戳转成日期的信息
*/
export const getDatePart = function(typeName){
	var t=arguments[1]?new Date(arguments[1]):new Date();
	switch(typeName) {
		case '年':
		return t.getFullYear();
		break;
		case '月':
		return t.getMonth()+1;
		break;
		case '日':
		return t.getDate();
		break;
		case '时':
		return t.getHours();
		break;
		case '分':
		return t.getMinutes();
		break;
		case '秒':
		return t.getSeconds();
		break;
		default:
		return '';
	}
}

/**
 * 
 * (工具类)
 * 日期分割为数组
 * 没有传参数则分割当前时间
 * 传参数则分割指定时间
 */
export const dateToArray = function(){
	var d=new Date()
	if(arguments.length===0){//当前日期
		return [d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()]
	}else if(arguments.length===1){//指定日期
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var t=new Date(s);
		return [t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()]
	}else{
		return ''
	}
}

/**
 * (工具类)
 * 日期格式化成标准的2位
 * 第一个参数必填,适合日期部分 . _ / - 日期合法 没有补零
 */

export const dateToStandard = function(){
	if(arguments[0]){
		var t=arguments[0].split(' ');
	}else{
		var dt=new Date();
		var t=[dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate(),dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()]
	}
	var f=t[0].split(/[\_./-]/);
	if(t[1]){
		var s=t[1].split(':');
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])+' '+(s[0].length<2?'0'+s[0]:s[0])+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2])
	}else{
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])+' 00:00:00'
	}
}

/**
 * (工具类)
 * 年月日时分秒格式日期加减
 * 相对当前日期进行加减
 * 相对给定日期进行加减
 * 参数 n 必填项
 * 第二个参数可选，表示给定日期，对给定日期进行的加减
 * -n 减去n天
 *  n 加上n天
 */

export const datePlusMinus = function(n){
	var t=arguments[1]?new Date(arguments[1]).getTime():new Date().getTime();
	var date=new Date(t+n*86400000);
	var y=date.getFullYear(); 
	var MM=date.getMonth()+1; 
	var dd=date.getDate(); 
	var hh=date.getHours(); 
	var mm=date.getMinutes(); 
	var ss=date.getSeconds(); 
	return y+'-'+(MM<10?'0'+MM:MM)+'-'+(dd<10?'0'+dd:dd)+' '+(hh<10?'0'+hh:hh)+':'+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss);
}

/**
 * (工具类)
 * 日期格式化
 *
 * 参数：{format} 格式 必填项
 * 第二个参数可选,表示格式化的时间戳
 * 第二个参数不填，返回当前日期格式化后的字符串
 */
export const dateFormat = function(format){
	var d=new Date();
	var t=arguments[1]?new Date(arguments[1]):d;
	var date = {
	  "M+": t.getMonth() + 1,
	  "d+": t.getDate(),
	  "h+": t.getHours(),
	  "m+": t.getMinutes(),
	  "s+": t.getSeconds(),
	  "q+": Math.floor((t.getMonth() + 3) / 3),
	  "S+": t.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
	    format = format.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
		    format = format.replace(RegExp.$1, RegExp.$1.length == 1? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}



/* (工具类)
 * 日期转字符串
 * 参数是时间戳,可选 (指定时间戳转日期格式 1530902499242 => 2018-07-07 02:41:39)
 * 没有参数,默认格式化当前日期时间
 */ 
export const dateToString = function(){
	var now=arguments[0]? new Date(arguments[0]):new Date()
	var y=now.getFullYear(); 
	var m=now.getMonth()+1; 
	var d=now.getDate(); 
	var hh=now.getHours(); 
	var mm=now.getMinutes(); 
	var ss=now.getSeconds(); 
	return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(hh<10?'0'+hh:hh)+':'+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss);
}
DATE.prototype = {
    isLeapYear,
    isValidDate,
    isValidTime,
    isValidateDateTime,
    getBeAfDateByDate,
    getBeAfDateByMonth,
    getWeek,
    getWeekByDate,
    getMaxDayOfDate,
    getWeekNumOfYear,
    getDaysByStamps,
    getDateDiff,
    getAllDatesBetween,
    getDatePart,
    dateToArray,
    dateToStandard,
    datePlusMinus,
    dateFormat,
    dateToString,
}

export default new DATE()
```

**时间回显**

```js
//月份回显    1 -> 一月

/**
 * 处理月份的回显
 * @param {Number} num 月份的数字
 * @returns {string} 转换后的汉字月份
 */
function monthFilter (num) {
    return 
    	num>0&&num<13
        ? ['一','二','三','四','五','六','七','八','九','十','十一','十二'][num-1]+'月'
    	:'月'
}
```
> 参数说明：

num：数字月份，为1~12，必须

返回值：一月 ~ 十二月

参数错误处理：参数传入不正确时，返回值为   '月'

```js
//星期回显  1 - > 周一，7 - > 周日
/**
 * 处理星期的回显
 * @param {Number} num 星期的数字
 * @returns {string} 转换后的汉字星期
 */
function weekFilter (num) {
    return num>0&&num<8?'周'+['一','二','三','四','五','六','日'][num-1]:'周'
}
```
> 参数说明：

num：数字 1 ~ 7

返回值：周一 ~ 周日

参数错误处理：参数传入不正确时，返回值为   '周'




**获取/创建 （基于 s 日期）过去 n 天的时间**

```js
function formatDate(n,s)  {
    return [...Array(n).keys()].map(days=>new Date((s?new Date(s):Date.now()) - 86400000 * days).toLocaleDateString()).map(item=>item.split(/\/|-/).map(i=>i.padStart(2,'0')).join('-'))
}
console.log(formatDate(3,1530975600000))//["2018-07-07", "2018-07-06", "2018-07-05"]
console.log(formatDate(3,'2016-05-04 23:22:10'))//["2016-05-04", "2016-05-03", "2016-05-02"]
```
> 参数说明：

n：只传一个参数时，表示基于当前时间过去的 n 天时间

s：如果传了第二个参数，表示指定 **时间戳** 或 **标准时间格式 `yyyy-MM-dd hh:mm:ss`**,返回基于自定义的时间的过去 n 天的时间

返回值：时间数组形式