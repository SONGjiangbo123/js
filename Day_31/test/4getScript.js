	function changeColor(obj){
		let color = "#";
		let str = "0123456789abcdef";
		
		for(let i=0; i<6; i++){
			color += str.charAt(Math.round(Math.random()*15));
		}
		
		obj.css({background:color});
	}