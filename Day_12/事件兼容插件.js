	function addEvent(obj,evt,callBack){
		if(obj.attachEvent){
			obj.attachEvent("on"+evt,callBack);
		}else{
			obj.addEventListener(evt,callBack);
		}
	}