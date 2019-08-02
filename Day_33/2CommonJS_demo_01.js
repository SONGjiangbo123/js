let str = "heihei";
let str1 = "我是隔壁的大黄";
exports.str = str;
module.exports.str1 = str1;

function fun(str){
	console.log(str);
}

exports.fun = fun;

var tools = {
    _add:function(a,b){
        return a + b;
    }
}

exports._add = tools._add;