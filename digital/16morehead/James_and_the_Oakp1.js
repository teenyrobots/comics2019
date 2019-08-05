/* Javascript for Digital Comics day 11*/

/*boolean that stores sound playing state */
var soundPlaying = false;

/*function that plays a sound */

function playSound() {
		document.getElementById('Mockingbird').play();
	}
	
/* function to switch images */
var newPic=new Image()
newPic.src="assets/JOAK_pg1E.gif"

var originalPic=new Image ()
originalPic.src="assets/JOAK_pg1E.jpg"

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
	