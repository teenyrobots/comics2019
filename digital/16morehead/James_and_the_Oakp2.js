/*boolean that stores sound playing state */
var soundPlaying = false;

/*function that plays a sound */
function playSound() {
	if (soundPlaying == false) {
		document.getElementById('cicada').play();
		soundPlaying = true;
	} else {
		document.getElementById('cicada').pause();
		document.getElemebtByID('cicada').currentTime = 0;
		soundPlaying = false;
	}
	
}

/* function to switch images */
var newPic=new Image()
newPic.src="assets/JOAK_pg2D.gif"

var originalPic=new Image ()
originalPic.src="assets/JOAK_pg2D.jpg"

var clickedPic = false;

/* function that swaps the first image for the second image */
function progressPic() {
	if (clickedPic == false) {
		document.getElementById('switchPic').src=newPic.src;
		clickedPic = true;
	} else {
		document.getElementById('switchPic').src=originalPic.src;
		clickedPic = false;
	}
}	