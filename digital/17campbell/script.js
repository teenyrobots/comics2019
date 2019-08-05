$(document).ready(function(){

	$(".absoluteImage").hide();
	$(".clothes").hide();
	$(".button").hide();
	document.getElementById("theSmiths").play();

	/* var closetOpening = false; */
	
	$(".backlay").click(function(){
		$(".absoluteImage").show();
		$(".button").show();
	});
		
	$(".absoluteImage").click(function(){
		$(".absoluteImage").hide();
	});
		
	$("#punkbutton").click(function(){
		$("#punkClothes").show();
	});	
		
	$("#skabutton").click(function(){
		$("#skaClothes").show();
	});	
	
	$(".jukebox").click(function(){
		document.getElementById("theSmiths").pause();
		document.getElementById("theJoneses").play();
	});
	
	$(".recordplayer").click(function(){
		document.getElementById("theSmiths").pause();
		document.getElementById("theJoneses").play();
	});
	
	$(".turntable").click(function(){
		document.getElementById("theSmiths").pause();
		document.getElementById("theJoneses").play();
	});


/*
var soundPlaying = false;
		
	$(".disappear").click(function(){
		if (soundPlaying == false) {
			document.getElementById("mySound").play();
			soundPlaying = true;
		} else {
			document.getElementById("mySound").pause();
			soundPlaying = false;
		}
*/
});