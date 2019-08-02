function getStyle(obj, attr) { //获取非行间样式，obj是对象，attr是值
	if (obj.currentStyle) { //针对ie获取非行间样式
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr]; //针对非ie
	};
};
