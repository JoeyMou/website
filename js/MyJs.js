$(function(){
	// T-shirt被选中的颜色
	var selectedColor = $(".canvas.front").css("background-color");
	/* 当鼠标经过时，自动改变T-shirt颜色 */
	$(".shirt-color-sample").hover(function(){
		$(".canvas.front").css("background-color", $(this).css("background-color"));
	},function(){
		$(".canvas.front").css("background-color", selectedColor);
	});
	/* 当鼠标选中颜色时，改变selectedColor的值 */
	$(".shirt-color-sample").click(function(){
		selectedColor = $(this).css("background-color");
	});
});


