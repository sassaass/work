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
	
	
	
	
	// banner
	
	var index = 0;
	function banner(){
		index++;
		if(index>=8){
			index = 0;
		}
		$(".banner_img li").eq(index).css("display","block").siblings().css("display","none");
		$(".banner_hover li").eq(index).addClass("hover").siblings().removeClass("hover");
	}
	

	
	var timer = setInterval(function(){
		banner();
	},2000)

	$(".banner_img li a").mouseover(function(){
		$(".banner_anniu").css("display","block");
		clearInterval(timer);
	})
	$(".banner_img li a").mouseout(function(){
		$(".banner_anniu").css("display","none");
		timer = setInterval(function(){
			banner();
		},2000)
	})
	$(".banner_anniu").mouseover(function(){
		$(".banner_anniu").css("display","block");
	})
	$(".banner_anniu").mouseover(function(){
		clearInterval(timer);
	})
	
	$(".banner_hover li").mouseover(function(){
		clearInterval(timer);
		$(this).addClass("hover").siblings().removeClass("hover");
		var index = $(this).index();
		$(".banner_img li").eq(index).css("display","block").siblings().css("display","none");
	})
	

	$(".anniu1").click(function(){
		index--;
		if(index == -1){
			index = $(".banner_hover li").length-1
		}
		$(".banner_img li").eq(index).css("display","block").siblings().css("display","none");
	})
	$(".anniu2").click(function(){
			index++;
			if(index == $(".banner_hover li").length){
				index = 0;
			}
			$(".banner_img li").eq(index).css("display","block").siblings().css("display","none");
		$("banner_hover li").eq(index).addClass("hover").siblings().remove("hover");
	})
		
		
		//  划过
		
		
	$(".xgt a").mouseenter(function(){
		$(".aImg").stop().animate({left:"242px"},500);
	})
	$(".xgt a").mouseleave(function(){
		$(".aImg").css("left","-242px");
	})
	
	
	$(".pic a").mouseenter(function(){
		$(".aImg").stop().animate({left:"242px"},500);
	})
	$(".pic a").mouseleave(function(){
		$(".aImg").css("left","-242px");
	})
		
	
	// main_lb
	
	$(".lb_1").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	$(".lb_1").mouseout(function(){
		$(".left_btn").css("display","none");
		$(".right_btn").css("display","noen");
	})
	$(".left_btn").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	$(".right_btn").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	
	// 点击
	$(".left_btn").click(function(){
		
		if($(".lb_1").position().left == -972){
			$(".lb_1").stop().animate({left:"0px"},500);
		}else{
			$(".lb_1").stop().animate({left:"-972px"},500);
		}
	})
	$(".right_btn").click(function(){
		if($(".lb_1").position().left == 0){
			$(".lb_1").stop().animate({left:"-972px"},500);
		}else{
			$(".lb_1").stop().animate({left:"0px"},500);
		}
	})
	
	
	// main_2
	
	$(".lb_2").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	$(".lb_2").mouseout(function(){
		$(".left_btn").css("display","none");
		$(".right_btn").css("display","noen");
	})
	$(".left_btn").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	$(".right_btn").mouseover(function(){
		$(".left_btn").css("display","block");
		$(".right_btn").css("display","block");
	})
	
	// 点击
	$(".left_btn").click(function(){
		
		if($(".lb_2").position().left == -1210){
			$(".lb_2").stop().animate({left:"0px"},500);
		}else{
			$(".lb_2").stop().animate({left:"-1210px"},500);
		}
	})
	$(".right_btn").click(function(){
		if($(".lb_2").position().left == 0){
			$(".lb_2").stop().animate({left:"-1210px"},500);
		}else{
			$(".lb_2").stop().animate({left:"0px"},500);
		}
	})
	
	
	//  小轮播图
	
	
	var i = 0;
	var len = $(".floor_pic li").length;
	
	// 轮播
	var t = setInterval(function () { i++; move();},2000);
	
	//  悬停
	$(".floor_pic").mouseover(function(){
		clearInterval(t);
		$(".floor1_anniu").css("display","block");
	})
	$(".floor_pic").mouseout(function(){
		t = setInterval(function () { i++; move();},2000);
		$(".floor1_anniu").css("display","none");
	})
	$(".floor1_anniu").mouseover(function(){
		clearInterval(t);
		$(".floor1_anniu").css("display","block");
	})
	
	// 滑入焦点
	$(".floor_hover li").hover(function () {
		clearInterval(t);
        var index = $(this).index();
        i = index;
        $(".floor_pic").stop().animate({ left: -index * 482 }, 500);
        $(this).addClass("hover").siblings().removeClass("hover");
    });
	
	
	// 点击按钮
	
	// 向左按钮
    $(".anniu1").click(function () {
        i++;
        move();
    })
    
	// 向右按钮
    $(".anniu2").click(function () {
        i--;
        move();
    })
	
	// 创建移动
	function move(){
		if(i == len){
			$(".floor_pic").css("left","0");
			i = 1;
		}
		if(i == -1){
			$(".floor_pic").css({ left: -(len - 1) * 482 });
			i = len-2;
		}
		 $(".floor_pic").stop().animate({left:-i*482},500);
		 if (i == len - 1) {
                        $(".floor_hover li").eq(0).addClass("hover").siblings().removeClass("hover");
                    } else {
                        $(".floor_hover li").eq(i).addClass("hover").siblings().removeClass("hover");
                    }
	}
	
	
	
	//  两栏
	
	$(".xz1").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".fr_con1").css("display","block");
		$(".fr_con2").css("display","none");
	})
	$(".xz2").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".fr_con2").css("display","block");
		$(".fr_con1").css("display","none");
	})
	
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
})
