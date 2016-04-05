//登录浮层拖拽 
var mask;

function divDrag(uiId,titleId) {
		document.getElementById(uiId).style.display = "block";
		document.getElementById(uiId).style.zIndex = 10001;

		//自动居中登录浮层
		var el = document.getElementById(uiId);
		autoCenter(el);
		function autoCenter(el){
			var bodyW = document.documentElement.clientWidth;
			var bodyH = document.documentElement.clientHeight;
			var elW = el.offsetWidth;
			var elH = el.offsetHeight;
			el.style.left = (bodyW-elW)/2+"px";
			el.style.top = (bodyH-elH)/2+"px";
		}
		//自动全屏
		function fillToBody(el){
			el.style.display ="block";
			el.style.width = document.documentElement.clientWidth+"px"; 
			el.style.height = document.documentElement.clientHeight+"px";
		}
		//鼠标事件1 － 在标题栏上按下（要计算鼠标相对拖拽元素的左上角的坐标，并且标记元素为可拖动） 
		var mouseTitleX = 0;
		var mouseTitleY = 0;
		var isDraging = false;
		document.getElementById(titleId).onmousedown = function(e){
			var e = e || window.event;
			mouseTitleX = e.pageX - document.getElementById(uiId).offsetLeft;
			mouseTitleY = e.pageY - document.getElementById(uiId).offsetTop;
			isDraging = true;
		}
		//鼠标事件2 － 鼠标移动时（要检测，元素是否可标记为移动，如果是，则更新元素的位置，到当前鼠标的位置［ps：要减去第一步中获得的偏移］）
		document.onmousemove = function(e){
			var e = e || window.event;
			if (isDraging === true) {
				var moveX = e.pageX - mouseTitleX;
				var moveY = e.pageY - mouseTitleY;

				if (moveX < 0) {
					moveX = 0;
				}else if (moveX > document.documentElement.clientWidth - document.getElementById(uiId).offsetWidth) {
					moveX = document.documentElement.clientWidth - document.getElementById(uiId).offsetWidth;
				}else{
					document.getElementById(uiId).style.left = moveX + "px";	
				}
				if (moveY < 0) {
					moveY = 0;
				}else if (moveY > document.documentElement.clientHeight - document.getElementById(uiId).offsetHeight) {
					moveY = document.documentElement.clientHeight - document.getElementById(uiId).offsetHeight
				}else{
					document.getElementById(uiId).style.top = moveY + "px";
				}
			}
		}
		//鼠标事件3 － 鼠标松开的时候（标记元素为不可拖动即可)
		document.onmouseup = function(){
			isDraging = false;
		}
		//创建遮罩层
		mask = document.createElement("div");
		mask.className = "dialog-mask";
		document.body.appendChild(mask);
		//保持登录浮层居中
		window.onresize = function(){
			autoCenter(el);
			fillToBody(mask);
		}
}
//关闭登录框浮层
function closeButton(uiId){
		document.getElementById(uiId).style.display = "none";
		mask.style.display = "none";
}

