/* Javascript for Digital Comics day 11*/

/*boolean that stores sound playing state */
var soundPlaying = false;
	
function playSound() {
	if (soundPlaying == false) {
		document.getElementById('pad').play();
		soundPlaying = true;	
		} else {
		document.getElementById('pad').pause();
		document.getElemebtByID('pad').currentTime = 0;
		soundPlaying = false;
	}
}
	
/* function to switch images */
var newPic=new Image()
newPic.src="JOAK_pg1C.gif"

var originalPic=new Image ()
originalPic.src="JOAK_pg1C.jpg"

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