/*Javascript Death Comic*/


var soundPlaying = false;

var soundOn=new Image()
soundOn.src="image/soundButtonOn.jpg"

var soundOff=new Image()
soundOff.src="image/soundButtonOff.jpg"

function playSound() {
	if (soundPlaying == false) {
		document.getElementById('rainSound').play();
		soundPlaying = true;
		document.getElementById('soundButton').src=soundOn.src;
	} else {
		document.getElementById('rainSound').pause();
		document.getElementById('rainSound').currentTime = 0;
		soundPlaying = false;
		document.getElementById('soundButton').src=soundOff.src;
	}
}

/*Fade script*/

$(document).ready(function() {

	$("#pageB").mouseover(function() {
		$("#pageB").fadeOut(1600, "linear")
		});

	$("#pageD").mouseover(function() {
		$("#pageD").fadeOut(1600, "linear")
		});

});

/*Fade script END*/
