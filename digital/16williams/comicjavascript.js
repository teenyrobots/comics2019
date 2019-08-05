//Javascript for Lyssette's comic


/*  boolean that checks if sound is playing */
var soundPlaying = false; 

/* function that plays a sound */

function playSound1() {
		if (soundPlaying == false) {
		document.getElementById('openingBag').play();
		soundPlaying = true;
	} else {
		document.getElementById('openingBag').pause();
		document.getElementById('openingBag').currentime = 0;
		soundPlaying = false;
		}
	}

//what follows is new for sound 2

function playSound2() {
	if(soundPlaying == false) {
		document.getElementById('eatingChip').play();
		soundPlaying = true;
	} else {
		document.getElementById('eatingChip').pause();
		document.getElementById('eatingChip').currentime = 0;
		soundPlaying = false;
	}
}

//Divergent ending number 1 script

var notEmptyImage=new Image()
notEmptyImage.src="assets/ending1.jpg"

function populateEnding1() {
	document.getElementById('empty1').src = notEmptyImage.src;
	window.location.hash = "empty1";
	}
// divergent ending number 2

var notEmptyImage2=new Image()
notEmptyImage2.src="assets/ending2.jpg"

//what follows is new 

var notEmptyImage3=new Image()
notEmptyImage3.src="assets/ending2-2.jpg"

	function populateEnding2() {
	document.getElementById('empty1').src = notEmptyImage2.src;
	window.location.hash = "empty1";  //what follows is new
	document.getElementById('empty2').src = notEmptyImage3.src;
	}

