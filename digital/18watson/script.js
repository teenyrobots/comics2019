/*scripts for jQuery demo*/

$(document).ready(function(){

	/*all JQuery goes in here */
	
//	$("img").hide();
//	$(".specialImage").show("slow");

// 	$(".specialImage").click(function(){
// 	
// 		$(this).css("background-color","purple");
// 		console.log("you clicked the special image")
// 		$(this).attr("src","assets/2.jpg")	
// 	})

	$("#imgAdder").click(function(){
	
		$("#images").append("<img src='assets/1.jpg'>");
	
	});
	
	let imgCycler=1; 
	
	$(".cycle").click(function(){
		if (imgCycler < 3) {
			$(this).attr("src","assets/"+imgCycler+".jpg");
			imgCycler++;
		} else {
			$(this).attr("src","assets/"+imgCycler+".jpg");
			imgCycler = 1;
		}
	
	})

})