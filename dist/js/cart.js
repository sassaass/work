$(function(){
	
	
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str = "";
					for(var i=0;i<data.length;i++){
						str += `<div class="ccc">
						<div class="cart_img">
							<div>
								<input type="checkbox" name="" id="gouxuan" value="" />
								<a class="pic_1" href="#">
									<img src="${data[i].goodsListImg}"/>
								</a>
								<div class="wz">
									<a href="#">
										<p class="wz_1">${data[i].goodsName}</p>
									</a>
								</div>
							</div>
						</div>
						<div class="cart_dj">${data[i].price}</div>
						<div class="cart_js">
							<div class="reduce_g">-</div>
							<div class="input_goods">
								<input type="text" name="" class="cz" id="wbsz" value="1" />
							</div>
							<div class="puls_g">+</div>
						</div>
						<div class="cart_we">1</div>
						<div class="cart_zj">${data[i].price}</div>
						<div class="cart_sc" data-id="${data[i].goodsID}">删除</div>
						</div>`
						$(".kkk").html(str);
						
						
						// 删除 
						$(".cart_sc").click(function(){
							console.log("aa");
							var id = $(this).attr("data-id");
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0},function(data){
								alert("确定要删除吗？");
								location.href = "cart.html";
							})
						})
						
						
//						var count = $(".cz").val();
						$(".reduce_g").click(function(){
							var index = $(this).index(".reduce_g");
							var count = $(".cz").eq(index).val();
							count--;
							if(count < 1){
								count = 1;
							}else{
								$(".cz").eq(index).val(count);
								asss = parseInt(count*$(".cart_dj").eq(index).text());
								$(".cart_zj").eq(index).text(asss);
							}
							
							zongjia();
						})
						$(".puls_g").click(function(){
							var index = $(this).index(".puls_g");
							var count = $(".cz").eq(index).val();
							count++;
							$(".cz").eq(index).val(count);
							asss = parseInt(count*$(".cart_dj").eq(index).text()); 
							
							$(".cart_zj").eq(index).text(asss);
							
							zongjia();
							
						})
						
						
					
				}
				
					
						
			
			
			
			
			
			// 全选
			$("#in_qx").click(function(){
				$(".cart_img input").prop("checked",$(this).prop("checked"));
			})
			$(".cart_img input").click(function(){
				if($(".cart_img input:checked").length == $(".cart_img input").length){
					$("#in_qx").prop("checked",true);
				}else{
					$("#in_qx").prop("checked",false);
				}
				
				zongjia();
			})
		})
		
		function zongjia(){
			//var count = 0;
			var sum2 = 0
			$("#gouxuan:checked").each(function(){
				sum2 += parseInt($(this).parent().parent().siblings(".cart_zj").text());
				console.log($(".cart_zj").text());
			})
				/*if($("#gouxuan:checked").length == 0){
					count = 0
				}else{
					count = $("#gouxuan:checked").length
				}*/
				//console.log($(".son_check:checked"))
				$(".top_r span").text(sum2);
				//$(".piece_num").text(count);
			
		}	

		
})






