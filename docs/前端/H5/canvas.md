## canvas

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>canvas</title>
</head>
<body>
    <canvas id="myCanvas" width="400" height="400"
style="border:1px solid #000000;">
<img src="http://moxiaofei.com/wp-content/themes/Art_Blog/images/record.jpg" alt="" id="img">
</canvas>
</body>
<script>
    var initHeight=15;//绘制字体距离canvas顶部初始的高度
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");img
    //画矩形 150*75
    // ctx.fillStyle="pink";
    // ctx.fillRect(0,0,150,75);

    //画线条
    // ctx.moveTo(0,0); //线条起始坐标
    // ctx.lineTo(200,100);//线条结束坐标
    // ctx.stroke();// 链接两点

    //画圆
    // ctx.beginPath();//启动一个路径分支
    // ctx.arc(95,50,40,0,2*Math.PI); // arc(x,y,r,start,stop) 圆心坐标 半径
    // ctx.stroke();

    //文字实心
    // ctx.font="30px Arial";
    // ctx.fillText("Hello World",0,30);// 实心文字

    //空心文字
    // ctx.font="italic bold 16px/1 arial,sans-serif"
    // ctx.strokeText("Hello World",10,15);

    //Canvas - 渐变
    // 创建渐变
    // var grd=ctx.createLinearGradient(0,0,200,0);
    // grd.addColorStop(0,"red");
    // grd.addColorStop(1,"white");
    
    // // 填充渐变
    // ctx.fillStyle=grd;
    // ctx.fillRect(10,10,150,80);


    //创建一个径向/圆渐变。使用渐变填充矩形

    // 创建渐变
    // var grd=ctx.createRadialGradient(75,50,5,90,60,100);
    // grd.addColorStop(0,"red");
    // grd.addColorStop(1,"white");
    
    // // 填充渐变
    // ctx.fillStyle=grd;img
    // ctx.fillRect(10,10,150,80);

    //把一幅图像放置到画布上, 使用以下方法: drawImage(image,x,y)
    var img=document.getElementById("img");
    img.onload=function(){
        ctx.drawImage(img,10,10,380,360);
    }

</script>
</html>
```

