## DOM事件类

#### 一、自定义事件

```html
<body>
    <div id="ev">
        
    </div>
</body>
<script>
    var ev = document.getElementById('ev)
                                     
    var eve = new Event('test')
    
    ev.addEventListener('test',function(){
        console.log('自定义事件 test触发了')
    })
    
    ev.dispatchEvent(eve)
</script>

```

