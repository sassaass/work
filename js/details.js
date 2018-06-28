
$(function(){
	


		// 右侧
		
		
		$(".gwc").click(function(){
			$(".wm_toolbar").stop().animate({right:"0"},500);
		})
		
		$(".pop_title em").click(function(){
			$(".wm_toolbar").stop().animate({right:"-276px"},500);
		})
		
		
		// 右侧回到顶部
		
		$(".hddb").click(function(){
			var scrollTop = $(window).scrollTop();
			$("html,body").animate({"scrollTop":0},500);
		})
		
		
		
	
	
	
		
	var goodsid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						console.log(data);
		var str = `
		<div class="box">
			<div class="ck_pic">
				<img src="${data[0].goodsListImg}"/>
				<div class="zoom"></div>
			</div>
			<div class="ck_pic_big">
				<img src="${data[0].goodsListImg}"/>
			</div>
		</div>
			<div class="pic_content">
				<b>${data[0].goodsName}</b>
				<span class="price_a">￥${data[0].price}</span>
				<div class="js">
					<span class="reduce">-</span>
					<input type="text" name="txt" id="txt" value="1" />
					<span class="aadd">+</span>
				</div>
				
				<div class="add_shop">加入购物车</div>
			</div>`
			$("#ck_wrap").html(str);
			
			$(".add_shop").click(function(){
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
					console.log(data);
				})
			})
			})
			// 放大镜
			
			$(".box").mouseover(function(){
				$(".ck_pic_big").css("display","block");
				$(".zoom").css("display","block");
			})
			$(".box").mouseout(function(){
				$(".ck_pic_big").css("display","none");
				$(".zoom").css("display","none");
			})	
			$(".ck_pic").mousemove(function(e){
				var evt = e || event;
				var x = e.vt.pageX - $(".zoom").offset().left;
				var y = e.evt.pageY - $(".zoom").offset().top;
				var _left = x - $(".zoom").width()/2 + "px";
				var _top = y - $(".zoom").height()/2 + "px";
				console.log(_left);
				$(".zoom").css({left:"_left",top:"_top"});
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			// 添加   & 删除
			var count = $("#txt").val();
			$(".reduce").click(function(){
				count --;
				$("#txt").val(count);
			})
			
			$(".aadd").click(function(){
				count ++;
				$("#txt").val(count);
			})
			
			
			
			
			$(".add_shop").click(function(){
				$(".num").text($("#txt").val());
			})
			
		
	
	
})