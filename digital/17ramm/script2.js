/* jquery for audiopage*/

$(document).ready (function(){
	document.getElementById("mySound1").play();
	document.getElementById("mySound2").play();
	document.getElementById("mySound3").play();
	document.getElementById("mySound4").play();
	document.getElementById("mySound5").play();
	document.getElementById("mySound6").play();
	document.getElementById("mySound7").play();
	document.getElementById("mySound8").play();

	var soundcount = 0;

	$(".audioArrow").hover(function(){
		$(".audioArrow").attr("src", "../assets/arrow_glow.png");
		}, function(){
		$(".audioArrow").attr("src", "../assets/arrow.png");
	});

	
	$("#speaker1").click(function(){
		document.getElementById("mySound1").pause();
		$("#speaker1").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	$("#speaker2").click(function(){
		document.getElementById("mySound2").pause();
		$("#speaker2").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	$("#speaker3").click(function(){
		document.getElementById("mySound3").pause();
		$("#speaker3").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	$("#speaker4").click(function(){
		document.getElementById("mySound4").pause();
		$("#speaker4").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	$("#speaker5").click(function(){
		document.getElementById("mySound5").pause();
		$("#speaker5").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	$("#speaker6").click(function(){
		document.getElementById("mySound6").pause();
		$("#speaker6").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});	
	
	$("#speaker7").click(function(){
		document.getElementById("mySound7").pause();
		$("#speaker7").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});

	$("#speaker8").click(function(){
		document.getElementById("mySound8").pause();
		$("#speaker8").attr("src", "../assets/speaker_off.png");
		soundcount += 1;
		soundchecker();
	});
	
	function soundchecker(){
		if (soundcount == 8){
		console.log("let's see if this works");
		$(".audioRed").attr("src", "../assets/c_3.png");	
	}};
	
});