/* scripts for jQuery demo */

$(document).ready(function(){

	/* all jQuery goes in here */
	
//	$("img").hide();
//	$(".specialImage").show("slow");
	
	$(".specialImage").click(function(){
		$(this).css("background-color","purple");
		console.log("you clicked the special image");
		$(this).attr("src","assets/2.png");
	});
	
	$("#imgAdder").click(function(){
		$("#images").append("<p>hi</p>");
	});
	
	let imgCycler=1;
	
	$(".cycle").click(function(){
		if (imgCycler < 4) {
			$(this).attr("src","assets/"+imgCycler+".png");
			imgCycler++;
		} else {
			$(this).attr("src","assets/"+imgCycler+".png");
			imgCycler = 1;
		};
	
	})

})