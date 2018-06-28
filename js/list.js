$(function(){
	


// banner
	
	var index = 0;
	function banner(){
		index++;
		if(index>=5){
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
	

		
		
		
		
		
		var classid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
			console.log(data);
			var str = "";
			$.each(data, function(index,item){
				str += `
					<dl>
						<dt>
							<a href="details.html?id=${item.goodsID}">
								<img src="${item.goodsListImg}"/>
							</a>
						</dt>
						<dd>
							<div class="goods_title">
								<a href="">${item.goodsName}</a>
							</div>
							<div class="goods_price">￥${item.price}</div>
							<div class="goods_buy">
								<a href="#"></a>
							</div>
						</dd>
					</dl>`
			});
			$(".tab_container").html(str);
			
			
			
		//  table  
		
			$(".hg li").mouseover(function(){
				$(".tab_content ul li").eq($(this).index()).addClass("ahg").siblings().removeClass("ahg");
				$(".tab_container").hide().eq($(this).index()).show();
		})
		
		
			// 弹出
			
			$(".goods_buy a").click(function(){
				$("#list_wrap").css("display","block");
			})
			$(".play").click(function(){
				location.href = "cart.html";
			})
			$(".go_shop").click(function(){
				$("#list_wrap").css("display","none");
			})
			$("#list_wrap").click(function(){
				$("#list_wrap").css("display","none");
			})
		});
		
		
		
	
})