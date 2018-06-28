$(function(){
	// 注册跳转
	$(".zc_btn").click(function(){
		location.href = "login.html";
	})
	
	
	
	
	
	
	
	
	// 提示框& 登录
	$(".main_btn").click(function(){
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("#use").val(),password:$("#psw").val()},function(data){
					data = JSON.parse(data);
						console.log(data);
					if($("#psw").val() == "" && $("#use").val() == ""){
							$(".tc").css("display","block");
						}else if(data == 2){
							$(".tc").css("display","block");
						}else if(data == 0){
							$(".tc").css("display","block");
						}else{
							$.cookie("username",data.userID,{expires:7,path:"/"});
							location.href = "../index.html";
						}
					})
		/*$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{"status":"login","userID":$("#use").val(),"password":$("#psw").val()},
			async:true,
			success:function(data){
				if($("#psw").val() == "" && $("#use").val() == ""){
					$(".tc").css("display","block");
				}else if(data == 2){
					$(".tc").css("display","block");
				}else if(data == 0){
					$(".tc").css("display","block");
				}else{
					$.cookie("username",data.userID,{expires:7,path:"/"});
					location.href = "../index.html";
				}
				
				
			}
		});*/
		
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
