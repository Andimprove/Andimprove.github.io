$(function() {
	// body...
	$('.changewidth').hover(
		function(){
			$(this).animate({"width":"130px";},200);
		},
		function(){
			$(this).animate({"width":"100px";},200);
		}
		)
})