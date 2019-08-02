	class Select{
		//如果某个类的某个方法不依赖于对象本身的属性,则建议设置为静态方法
		//静态方法:可以直接通过类名来调用,而不需要依赖对象本身
		static $(str){
			if(str.charAt(0) == "#"){//#box
				return document.getElementById(str.substring(1,str.length));
			}else if(str.charAt(0) == "."){
				return document.getElementsByClassName(str.substring(1,str.length))[0];
			}else{
				return document.getElementsByTagName(str)[0];
			}
		}
	}