/*用户名注册*/
/*倒计时*/
$(document).ready(function(){
	var wait=60;
	function time(x){
		if(wait==0){
		x.removeAttribute("disabled");   
		x.value="免费获取验证码";
		wait = 60; 
		}else{
			x.setAttribute("disabled", true);  
				x.value="重新发送(" + wait + ")";  
				wait--;  
				setTimeout(function() {  
					time(x)  
				},  
				1000); 
		}
	}
	document.getElementById("btn1").onclick=function(){time(this)};
});
	