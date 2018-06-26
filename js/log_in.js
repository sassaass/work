$(function(){
	// 注册跳转
	$(".zc_btn").click(function(){
		location.href = "login.html";
	})
	
	
	
	
	
	
	
	
	// 提示框& 登录
	$(".main_btn").click(function(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{"status":"login","userID":$("#use").val(),"password":$("#psw").val()},
			async:true,
			success:function(data){
				if($("#psw").val() == "" && $("#use").val() == ""){
					$(".tc").css("display","block");
				}
				/*if(data == 2){
					$(".tc").css("display","block");
				}
				if(data == 0){
					$(".tc").css("display","block");
				}else{
					location.href = "../index.html";
				}*/
			}
		});
		
		if($("#psw").val() == ""){
			$(".input_error").css("display","block");
		}
	})
	
	
	$(".gb").click(function(){
		$(".tc").css("display","none");
	})
	$(".alert_b").click(function(){
		$(".tc").css("display","none");
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
