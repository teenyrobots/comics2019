/* Scripts for Webcomic*/

$(document).ready(function(){

		/*all jQuery goes in here */
	//	$("img").hide();
	//	$(".specialImage").show("slow");
		
		$(".specialImage").click(function(){
		
		
			$(this).css("background-color","purple");
			console.log("you clicked the thing");
			$(this).attr("src","assets/101.jpg");
		
		
		
		});
		
		$("#imgAdder").click(function(){
		
			$("#images").append("<img src='assets/105.jpg'>");
		
		
		});
		
		let imgCycler= 1;
		
		
		$(".cycle").click(function(){
			if (imgCycler < 4) {
				$(this).attr("src","assets/10"+imgCycler+".jpg");
				imgCycler++;
			} else {
				$(this).attr("src","assets/10"+imgCycler+".jpg");
				imgCycler = 1;
			
			};
		
		
		
		})

})