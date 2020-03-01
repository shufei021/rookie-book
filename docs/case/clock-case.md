# [css3时钟](http://moxiaofei.com/rookie-book/html/clock-case.html) 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>时钟</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .cloack-container{
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background-color: #000;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
        transform: rotate(-90deg);
    }
    .cloack-container::after{
        content: '';
        width: 15px;
        height: 15px;
        background: #fff;
        border-radius: 50%;
        z-index: 99;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 1000;
    }
    .hour{
        width: 100px;
        height: 4px;
        background-color: #848484;
        transform-origin: 15px 1px;
        position: absolute;
        left: 185px;
        top: 201px;
        z-index: 997;
        animation: hour 43200s  infinite;
        animation-timing-function:linear;
    }
    .minute{
        width: 160px;
        height: 2px;
        background-color: #eee;
        transform-origin: 0 0;
        position: absolute;
        left: 200px;
        top: 200px;
        z-index: 998;
        animation: minute 3600s  infinite;
        animation-timing-function:linear;
    }
    .second{
        width: 170px;
        height: 2px;
        transform-origin: 15px center;
        position: absolute;
        left: 185px;
        top: 200px;
        z-index: 999;
        background-color: red;
        animation: second 60s  infinite;
        animation-timing-function:linear;
    }
    ul{
        position: absolute;
        width: 400px;
        height: 400px;
        z-index: 100;
        border-radius: 50%;
        background-color: cornflowerblue;
        color: #fff;
        position: relative;
        transform: rotate(90deg);
    }
    li{
        width: 400px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        transform-origin:center;
        
        position: absolute;
        top: 46%;   
    }
    ul{
        list-style: none;
    }
    ul li>div{
        position: absolute;
        right: 20px;
        top: 0;
        transform: rotate(90deg);
    }
    ul li:nth-child(1){
        transform: rotate(-90deg);
    }
    ul li:nth-child(2){
        transform: rotate(-60deg); 
    }
    ul li:nth-child(3){
        transform: rotate(-30deg);
    }
    ul li:nth-child(4){
        transform: rotate(0deg);
    }
    ul li:nth-child(4)>div{
        transform: rotate(0deg);
    }
    ul li:nth-child(5){
        transform: rotate(30deg);
    }
    ul li:nth-child(6){
        transform: rotate(60deg);
    }
    ul li:nth-child(7){
        transform: rotate(90deg);
    }
    ul li:nth-child(7)>div{
        transform: rotate(-90deg);
    }
    ul li:nth-child(8){
        transform: rotate(120deg);
    }
    ul li:nth-child(9){
        transform: rotate(150deg);
    }
    ul li:nth-child(10){
        transform: rotate(180deg);
    }
    ul li:nth-child(10)>div{
        transform: rotate(175deg);
    }
    ul li:nth-child(11){
        transform: rotate(210deg);
    }
    ul li:nth-child(12){
        transform: rotate(240deg);
    } 
</style>
<body>
    <div class="cloack-container">
        <div class="hour"></div>
        <div class="minute"></div>
        <div class="second"></div>
        <ul>
            <li><div>12</div></li>
            <li><div>|<div></li>
            <li><div>|<div></li>
            <li><div>3</div></li>
            <li><div>|<div></li>
            <li><div>|<div></li>
            <li><div>6</div></li>
            <li><div>|<div></li>
            <li><div>|<div></li>
            <li><div>9</div></li>
            <li><div>|<div></li>
            <li><div>|<div></li>
        
        </ul>
    </div>
</body>
<script>
    var curTime = new Date()
    var hour = curTime.getHours()
    var minute = curTime.getMinutes()
    var second = curTime.getSeconds()
    var style = document.styleSheets[0];

    //时
    var from1 =  (360 - (24-(hour>12?hour:(hour+12)) - (minute/60).toFixed(2))*30)
    var to1 = 360+from1
    document.querySelector('.hour').style =`transform: rotate(${from1}deg)`
    style.insertRule('@keyframes hour {from{ transform:rotate('+from1+'deg) } to{ transform:rotate('+to1+'deg)}}',25);//写入样式
    console.log(from1,to1,'时')

    //分
    var from2 = (360/60)*minute
    var to2 =  from2 +360
    document.querySelector('.minute').style =`transform: rotate(${from2}deg)`
    style.insertRule('@keyframes minute {from{ transform:rotate('+from2+'deg) } to{ transform:rotate('+to2+'deg)}}',26);//写入样式
    console.log(from2,to2,'分')

    //秒
    var from = 360/60*second
    var to =  from + 360
    document.querySelector('.second').style =`transform: rotate(${from}deg)`
    style.insertRule('@keyframes second {from{ transform:rotate('+from+'deg) } to{ transform:rotate('+to+'deg)}}',27);//写入样式
  
</script>
</html>
```