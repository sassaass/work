$(function(){
	
	
	var reg1 = /^1(3|5|7|8)\d{9}$/;
	var reg2 = /^\w+@\w+(\.\w+)+$/;
	$("#txt").blur(function(){
		if(reg1.test($("#txt").val()) == false){
			$(".ts_1").css("display","block");
		}else{
			$(".ts_1").css("display","none");
		}
	});
	$("#use").blur(function(){
		if($("#use").val().length < 4){
			$(".ts_2").css("display","block");
			$(".ts_2 b").text("用户名太短，请在4-20字符之间");
		}else{
			$(".ts_2").css("display","none");
		}
	});
	
	$("#psw1").blur(function(){
		if($("#psw1").val().length < 8){
			$(".ts_3").css("display","block");
			$(".ts_3 b").text("密码长度必须为8-16个字符");
		}else{
			$(".ts_3").css("display","none");
		}
	});
	$("#psw2").blur(function(){
		if($("#psw2").val() === $("#psw1").val()){
			$(".ts_4").css("display","none");
		}else{
			$(".ts_4").css("display","block");
			$(".ts_4 b").text("两次输入的密码不一致，请重新输入");
		}
	});
	
	// 验证码
	
	$(".fs").click(function(){
		var sjs = 4;
		var arr = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","D","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		$(".fs").text("");
		for(var i=0;i<sjs;i++){
			$(".fs").append(arr[Math.floor(Math.random()*36)]);
		}
	})
	$("#phone_yz").blur(function(){
		if($("#phone_yz").val().toUpperCase() != $(".fs").text()){
			$(".ts_5").css("display","block");
			$(".ts_5 b").text("输入的验证码不正确");
		}else{
			$(".ts_5 b").css("display","none");
			
		}
	})
	
	
	$("#btn2").click(function(){
		if($("#txt").val() == ""){
			$(".ts_1").css("display","block");
			$(".ts_1 b").text("邮箱或手机不能为空");
		}
	});
	
	

		$("#btn2").click(function(){
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$("#txt").val(),password:$("#psw1").val()},function(data){
				if(data == 0){
					$(".ts_1").css("display","block");
					$(".ts_1 b").text("手机号已存在，请换另外一个");
				}
				if(data == 1){
					location.href = "log_in.html";
				}
			})
		})

		$(".invite").click(function(){
			$(".invite_code").toggle()
		})
		
	
	
	/*$("#btn2").click(function(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			data:{"status":"register","userID":$("#use").val(),"password":$("#psw1").val()},
			success:function(data){
				if(data == 0){
					$(".ts_1 b").text("用户名已存在，请换另外一个");
				}else if(data == 1){
					location.href = "log_in.html";
				}
				
			}
		});
	})*/
})
