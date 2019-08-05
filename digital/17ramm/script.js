/* jquery for meggie's page*/

$(document).ready (function(){
	
	$(".aImage").click(function(){
		$(".aImage").attr("src", "assets/bookgif.gif");
	});
	
	$(".disappear").hide();
	$(".aImage").click(function(){
		$(".disappear").show(900);
		console.log("the link has appeared")
	});	
	
	$("#bHover").hover(function(){
		$("#bHover").attr("src", "../assets/b_hover.png");
		}, function(){
		$("#bHover").attr("src", "../assets/b_4.png");
	});

	$(".finalRed").hover(function(){
		$(".finalRed").attr("src", "../assets/d_hover.png");
		}, function(){
		$(".finalRed").attr("src", "../assets/d.png");
	});
	
	
});

