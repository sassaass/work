$(function(){
	$(".nav_right_zh").mousemove(function(){
		$(".nav_right_down").css("display","block");
	})
	$(".nav_right_zh").mouseout(function(){
		$(".nav_right_down").css("display","none");
	})

	$(".nav_right_serve").mousemove(function(){
		$(".serve_down").css("display","block");
	})
	$(".nav_right_serve").mouseout(function(){
		$(".serve_down").css("display","none");
	})
})
