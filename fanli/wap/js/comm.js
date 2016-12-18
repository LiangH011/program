$(document).ready(function(){
	$("#help .help-nav li").eq(0).addClass("helpnavStyle");
	
	$("#help .help-nav li").click(function(){
		$(this).addClass("helpnavStyle").siblings().removeClass("helpnavStyle");
	})
	
	
})