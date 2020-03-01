# 仿 [博客园](http://moxiaofei.com/rookie-book/html/date-case.html)  日历

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>仿博客园日历</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
</head>
<style>
  body,h4{
    margin: 0;
    padding: 0;
  }
  body{
    position: relative;
  }
  html,body{
    height: 100%;
  }
  #wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    text-align: center;
  }
  #wrap h4{
    padding-bottom: 10px;
  }
  a{
    text-decoration: none;
    color: red;
  }
  td,th{
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    text-align: center;
  }
  
  h4{
    text-align: center;
  }
  #tableBox{
    width: 210px;
    border: 1px solid #777;
    margin: 0 auto;
  }
  table{
    border-collapse: collapse;
  }
  #tableHead>tbody tr:not(:nth-child(2)) td{
    font-size: 14px;
    color: #000;
  }
  #tableHead tbody tr:last-child{
    border-top: 1px solid #e2e2e2;
  }
  #tableConetent>tbody tr td{
    font-size: 14px;
  }
  #tableConetent>tbody tr td:hover{
    background-color: #eaeaea;
      color: #333;
      cursor: pointer;
  }
  #prev,#next{
    cursor: pointer;
  }
  #prev:hover,#next:hover{
    color: red!important;
  }
  .active{
    background:#73d661;
    color:#fff!important;
  }
</style>
<body>
  <div id="wrap">
    <h4>仿博客园日历</h4>
    <div id="tableBox">
      <table id="tableHead">
        <tbody>
          <tr>
            <td id="prev"><</td>
            <td colspan="5" align="center" id="details" ></td>
            <td id="next">></td>
          </tr>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </tbody>
      </table>
      <table id="tableConetent">
        <tbody></tbody>
      </table>
    </div>
  </div>
</body>
<script>
"use strict;"
  var prev=document.querySelector('#prev');
  var next=document.querySelector('#next');
  var details=document.querySelector('#details');
  var tbody=document.querySelector('#tableConetent tbody');
  var tdStr = '';
  for(let i =0;i<6;i++){
    tdStr += `<tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>`
  }
  tbody.innerHTML = tdStr;
  var aTb=document.querySelectorAll('#tableConetent tbody td');
  prev.onclick = function(){calendar(-1)}
  next.onclick = function(){calendar(1)}
  calendar(0)
  function calendar(status){
    if(status==0){
      details.innerHTML = dateFormat('yyyy年M月');
      var curDate=getWeek(dateFormat('yyyy-MM-')+'01');
      var n=curDate=='日'?7:curDate=='六'?6:curDate=='五'?5:curDate=='四'?4:curDate=='三'?3:curDate=='二'?2:1;
      var arr=[]
      //上一月多少天
      var prveMonth=getMaxDayOfDate(getBeAfDateByMonth(-1));
      //本月多少天
      var currMonth=getMaxDayOfDate();
    }else if(status==1){
      //获取原来的日期
      var currYearMonth=details.innerHTML;
      //原来的日期转化到格式化日期
      var curDate=currYearMonth.replace(/[年月]/g,function(r1){return r1=='年'||'月'?'/':'';})+'01 00:00:00';
      var dt=new Date(curDate)
      details.innerHTML = getBeAfDateByMonth(1,dt).split('-',2)[0]+'年'+(getBeAfDateByMonth(1,dt).split('-',2)[1]-0)+'月';
      var currentDate=getWeek(getBeAfDateByMonth(1,dt));
      var n=currentDate=='日'?7:currentDate=='六'?6:currentDate=='五'?5:currentDate=='四'?4:currentDate=='三'?3:currentDate=='二'?2:1;
      var arr=[]
      //上一月多少天
      var prveMonth=getMaxDayOfDate(dateFormat('yyyy-MM-dd',getBeAfDateByMonth(0,curDate)));
      //本月多少天
      var currMonth=getMaxDayOfDate(dateFormat('yyyy-MM-dd',getBeAfDateByMonth(1,dt)));
    }else if(status==-1){
      //获取原来的日期
      var currYearMonth=details.innerHTML;
      //原来的日期转化到格式化日期
      var curDate=currYearMonth.replace(/[年月]/g,function(r1){return r1=='年'||'月'?'/':'';})+'01 00:00:00';
      var dt=new Date(curDate)
      details.innerHTML = getBeAfDateByMonth(-1,dt).split('-',2)[0]+'年'+(getBeAfDateByMonth(-1,dt).split('-',2)[1]-0)+'月';
      var currentDate=getWeek(getBeAfDateByMonth(-1,dt));
      var n=currentDate=='日'?7:currentDate=='六'?6:currentDate=='五'?5:currentDate=='四'?4:currentDate=='三'?3:currentDate=='二'?2:1;
      var arr=[]
      //上一月多少天
      var prveMonth=getMaxDayOfDate(dateFormat('yyyy-MM-dd',getBeAfDateByMonth(-2,curDate)));
      //本月多少天
      var currMonth=getMaxDayOfDate(dateFormat('yyyy-MM-dd',getBeAfDateByMonth(-1,dt)));
    }
    var init=details.innerHTML;
    for(var i=prveMonth;i>prveMonth-n;i--){arr.unshift(i)}
    for(var j=1;j<currMonth+1;j++){arr.push(j)}
    var len=43-arr.length;
    for(var k=1;k<len;k++){arr.push(k)}

    for(var t=0;t<42;t++){
      if(t>=n&&t<=n+currMonth-1){
        aTb[t].removeAttribute('class');
        if(getDatePart('日')==arr[t]&&dateFormat('yyyy年M月')==init){
          aTb[t].className='active';
        }else{
          aTb[t].style.color='#333';
        }
      }else{

        aTb[t].removeAttribute('style');
        aTb[t].style.color='#d2d2d2';
      }
      aTb[t].innerHTML = arr[t]
    } 
  }
//获取日期加减n月后的日期  
function getBeAfDateByMonth(n){
    var dt =arguments[1]?new Date(arguments[1]): new Date();
    dt.setMonth(dt.getMonth() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}
//获取星期
function getWeek(){
    var i=arguments[0]?new Date(arguments[0]).getDay():new Date().getDay()
    return ['日','一','二','三','四','五','六'][i]
}
//获取日期部分具体信息
function getDatePart(typeName){
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
//获取日期所在的月份有多少天
function getMaxDayOfDate(){
    var dt=arguments[0]?new Date(arguments[0]):new Date()
    dt.setMonth(dt.getMonth() + 1)
    dt.setDate(1)
    dt.setDate(dt.getDate() -1)
    return dt.getDate() 
}
//日期格式化
function dateFormat(format){
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
</script>
</html>
```