$(document).ready(function(){

	 var swimming = new Waypoint({
  			element: document.getElementById('firstWaypoint'),
  			handler: function() {
  					$("#firstWaypoint").attr("src","images/SEA-turtle-800-new.gif");
    				console.log("horizontal waypoint triggered");
  				},
  			
 	 		context: document.getElementById('scroller-container'),
	  		horizontal: true,
	  		offset: -150
	
	});
	



	var soundPlaying=false;

	$(".soundButton").click(function(){
		if (soundPlaying == false) {
			document.getElementById("mySound").play();
			soundPlaying= true;
			$(".soundButton").attr("src", "images/sound-but.png");
		} else {
			document.getElementById("mySound").pause();
			soundPlaying= false;
			$(".soundButton").attr("src", "images/sound-but-off.png");
		}	
	
		});

})

