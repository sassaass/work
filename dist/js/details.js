
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
			</div>
			<div class="go_p">
				<a href="cart.html">去购物车结算</a>
			</div>`
			$("#ck_wrap").html(str);
			
				$(".add_shop").click(function(){
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
						console.log(data);
						if(data==0){
							alert("添加失败");
						}
						if(data == 1){
							alert("添加成功");
						}
						
					})
				})
				
				
			var count = $("#txt").val();
			$(".reduce").click(function(){
				count--;
				$("#txt").val(count);
			})
			$(".aadd").click(function(){
				count++;
				$("#txt").val(count);
			})
			
			
			
			
			$(".add_shop").click(function(){
				$(".num").text($("#txt").val());
			})
		
		
		
		// 放大镜
		var oCk_wrap = document.getElementById("ck_wrap");
		var oZoomBox = document.getElementsByClassName("box")[0];
		var oMidArea = document.getElementsByClassName("ck_pic")[0];
		var oZoom = document.getElementsByClassName("zoom")[0];
		var oMidImg = oMidArea.children[0];
		var oBigArea = document.getElementsByClassName("ck_pic_big")[0];
		var oBigImg = oBigArea.children[0];
		oMidArea.onmouseover = function(){
			oBigArea.style.display = "block";
			oZoom.style.display = "block";
		}
		oMidArea.onmouseout = function(){
			oBigArea.style.display = "none";
			oZoom.style.display = "none";
		}
		oMidArea.onmousemove = function(e){
			var evt = e || event;
			var x = evt.pageX - oCk_wrap.offsetLeft;  // 不能用offsetX来表示  事件源会发生改变
			//console.log(oCk_wrap);
			var y = evt.pageY - oCk_wrap.offsetTop;  // 不能用offsetY来表示
			var _left = x-oZoom.offsetWidth/2;
			var _top = y-oZoom.offsetHeight/2;
			
			if(_left<=0){
				_left=0;
			}
			if(_left>=oMidArea.offsetWidth-oZoom.offsetWidth){
				_left=oMidArea.offsetWidth-oZoom.offsetWidth;
			}
			if(_top<=0){
				_top=0;
			}
			if(_top>=oMidArea.offsetHeight-oZoom.offsetHeight){
				_top=oMidArea.offsetHeight-oZoom.offsetHeight;
			}
			
			oZoom.style.left = _left + "px";
			oZoom.style.top = _top + "px";
			oBigImg.style.left = -_left*2 + "px";
			oBigImg.style.top = -_top*2 + "px";
		}
			
		
	})
})


