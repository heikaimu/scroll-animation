/**
 * Create By Heikaimu 2019/9/23
 * 纯JavaScript滚动触发animation构造函数
 * @param {className, inOffset, outOffset, repeat} params 
 */
function ScrollAnimation(params) {
	// 触发的偏移量
	this.inOffset = params.inOffset || 0;
	this.outOffset = params.outOffset || 0;
	// 需要动画的标签class name
	this.className = params.className || "";
	// 是否循环
	this.repeat = params.repeat;

	// 屏幕可视高度
	this.screenHeight = document.documentElement.clientHeight;
	// 页面滚动距离
	this.scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;

	// 动画函数
	this.animation = function () {
		// 实时计算页面滚动距离
		this.scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
		// 获取所有动画标签
		var animationItems = document.getElementsByClassName(this.className);
		// 遍历所有标签
		for (var i = 0; i < animationItems.length; i++) {
			// 标签
			var item = animationItems[i];
			// 入场动画名
			var inMode = item.getAttribute("in-mode") || "fadeInDown";
			// 离场动画名
			var outMode = item.getAttribute("out-mode") || "fadeOutDown";
			// 获取标签当前所有class
			var itemClass = item.getAttribute("class");
			var classList = itemClass.split(" ");
			// 标签距离顶部距离
			var offsetTop = item.offsetTop || 0;

			// 如果出现在可视区域内并且没有动画名则添加动画名,并且将透明度置为0
			if (classList.indexOf('animated') === -1) {
				classList.push('animated');
				item.style.opacity = 0;
			}
			if (this.scrollDistance > offsetTop - this.screenHeight + this.inOffset
				&& this.scrollDistance < offsetTop - this.outOffset) {
				if (this.repeat) {
					var outModeIndex = classList.indexOf(outMode);
					if (outModeIndex > -1) {
						classList.splice(outModeIndex, 1);
					}
				}
				if (classList.indexOf(inMode) === -1) {
					classList.push(inMode);
					item.style.opacity = 1;
				}
			} else {
				// 如果需要循环动画, 则每次移除可视区域之后把动画样式移除，方便再次添加再次触发
				if (this.repeat) {
					var inModeIndex = classList.indexOf(inMode);
					if (inModeIndex > -1) {
						classList.splice(inModeIndex, 1);
					}
					if (classList.indexOf(outMode) === -1) {
						classList.push(outMode);
					}
				}
			}
			item.setAttribute('class', classList.join(" "));
		}
	}

	var _this = this;
	document.addEventListener('scroll', function () {
		_this.animation();
	});
	window.onresize = window.onload = this.animation();
}