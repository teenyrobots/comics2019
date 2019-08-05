var soundPlaying = false;

function playSound() {
		document.getElementById('aura').play();
	}
	
function playSound() {
		document.getElementById('aura').play();
	}
	
/* function to switch images */
var newPic=new Image()
newPic.src="assets/JOAK_pg5C.gif"

var originalPic=new Image ()
originalPic.src="assets/JOAK_pg5B.jpg"

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