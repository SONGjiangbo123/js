	class PopPlugin{
		constructor(newBox) {
		    this.box = newBox;
			this.btnDiv = null;
		}
		
		setPosition(){
			//要想获取offsetWidth display必须设置为block
			this.box.style.display = "block";
			this.box.style.left = window.innerWidth/2 - this.box.offsetWidth/2 + "px";
			this.box.style.top = window.innerHeight/2 - this.box.offsetHeight/2+ "px";	
			this.createBtn();
		}
		
		createBtn(){
			this.btnDiv = document.createElement("button");
			//记得加定位
			this.btnDiv.style.position = "absolute";
			this.btnDiv.style.width = 50 + "px";
			this.btnDiv.style.height = 25 + "px";
			this.btnDiv.innerHTML = "关闭";
			//必须先有元素才有offsetWidth 这些东西
			this.box.appendChild(this.btnDiv);
			this.btnDiv.style.left = this.box.offsetWidth - this.btnDiv.offsetWidth + "px";
			this.closeBox();
		}
		
		closeBox(){
			let that = this;
			this.btnDiv.onclick = function(){
				that.box.style.display = "none";
			}
		}
	}