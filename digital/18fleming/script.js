/* scripts for sound */

$(document).ready(function(){

	console.log("the document ready");
	
	$("#play").click(function(){
		$("#sound").trigger("play");
		console.log("the sound");

	})

	// $("#pause").click(function(){
// 	
// 		$("sound").trigger("pause");
// 		$("#pause").hide();
// 		$("#play").show();
// 	
// 	
// 	})

})