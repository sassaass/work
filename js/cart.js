$(function(){
	$(".gwc").click(function(){
			$(".wm_toolbar").stop().animate({right:"0"},500);
		})
		
		$(".pop_title em").click(function(){
			$(".wm_toolbar").stop().animate({right:"-276px"},500);
		})
		
	var count = $("#count").val();
	$(".lose").click(function(){
		count --;
		$("#count").val(count);
	})
	
	$(".add").click(function(){
		count ++;
		$("#count").val(count);
	})
	/*if($("#count").val() == 1){
		$(".lose").unbind();
	}else{
		$(".lose").click(function(){
			count --;
			$("#count").val(count);
		})
	}*/
	
	
	$("#qg").click(function(){
		$(".num").text($("#count").val());
	})
	
	
		
		
})
