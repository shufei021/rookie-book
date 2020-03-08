# picker-card 项目介绍

picker-card 英文意思是：像卡片一样的选择器，区别于 IOS 原生的 picker

很多时候我们需要更多的自由度，需要一级选择,二级联动选择，三级联动选择，而非定死，于是我于2020/3/8创建了这个项目，花了1小时完成了第一版，

第一版没有考虑默认参数项，没有考虑默认初始化的性能等等；为后续逐渐完善留足了空间

[github：picker-card](https://github.com/shufei021/picker-card)

## useage

```html
<link rel="stylesheet" href="picker-card.css">
<body>
    <button class="selectProvince">省份选择</button>
    <p class="province"></p>
</body>
<script src="city-data.js"></script>
<script src="picker-card.js"></script>
<script>
new PickerCard({
    trigger:".selectProvince",
    type:1,
    list:cityData,
    success:function(res){
        document.querySelector('.province').innerHTML = res.join('-')
    }
})
</script>
```

## options

```js
trigger：触发器
type：选择类型
list：数据列表
success：选择完成后的回调，携带选择好的数据
```

示例：

![示例1](http://moxiaofei.com/wp-content/uploads/2019/05/1.png)


![示例2](http://moxiaofei.com/wp-content/uploads/2019/05/2.png)
