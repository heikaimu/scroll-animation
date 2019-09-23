# scroll-animation
滚动触发animation的函数，纯JavaScript版本，不依赖Jquery

[演示地址](https://heikaimu.github.io/scroll-animation/index.html)

### 使用方法
```
<head>
  <link rel="stylesheet" href="./animate.min.css">
</head>

<body>
<h3 class="scroll-animation" in-mode="rollIn" out-mode="hinge">剃刀沼泽</h3>
</body>

<script src="./scroll-animation.js"></script>
<script>
  var scrollAnimation = new ScrollAnimation({
    className: "scroll-animation",
    inOffset: 100,
    outOffset: 100,
    repeat: true
  });
</script>
```

### 标签配置
首先给标签加上一个className，默认值为scroll-animation，此步骤必填

然后添加动画效果名：
所有的特效都基于Animate.css, 可以自己参考网站上的效果自行配置
[animate.css](https://daneden.github.io/animate.css/)
in-mode是入场动画名，默认值fadeInDown
out-mode是出场动画名，默认值fadeOutDown

### 参数
| Name             | Type    | Default            | Description           |
| ---------------- | ------- | ------------------ | --------------------- |
| className        | String  | scroll-animation   | 动画标签class名         |
| inOffset         | Number  | 0                  | 入场触发动画的偏移距离    |
| outOffset        | Number  | 0                  | 出场触发动画的偏移距离    |
| repeat           | Number  | false              | 是否循环执行动画         |
