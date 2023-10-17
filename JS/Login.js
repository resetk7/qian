
// 切换登录方式功能

// 获取页面元素
var code =document.getElementById("login_code");
var account =document.getElementById("login_account");
var box_other =document.getElementById("box_other");
var box =document.getElementById("box");
//设flag，0:显示  1：不显示
var flag=0;
 
 //扫码登录页面
code.onclick=function(){
	if(flag==1){
		box.style.display="block";
		box_other.style.display="none";
		this.className="c-tab-nav-item active"
		account.className="c-tab-nav-item";
		code.className="code";
		flag=0;
	}
}
//账户登录页面
account.onclick=function(){
	if(flag==0){
		box_other.style.display="block";
		box.style.display="none";
		// className属性可以用来设置或返回元素的class属性
		this.className="c-tab-nav-item active"
		code.className="c-tab-nav-item";
		flag=1;
	}
}


// 显示隐藏功能

//获取页面元素
var p_border =document.getElementById("p_border");
var code= document.getElementById("code");
var _picture= document.getElementById("_picture");

p_border.onmouseover=function(){
	code.className="code hover_code";
	_picture.className="_picture hover_picture"
}
p_border.onmouseout=function(){
	code.className="code";
	_picture.className="_picture"
}



//登录功能
// 获取页面元素
var login = document.getElementById("login");	
var uname = document.getElementById("uname");
var word = document.getElementById("word");

login.onclick = function(){	
	if(uname.value == "suser" && word.value == "123456"){
				//账号和密码正确，登录成功
					window.location.href="index.html";
				}
				else{
	 			//账号或密码不正确，登录失败
					alert("账号或者密码输入不正确！请重新输入。");
				}
}


