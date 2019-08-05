/* Javascript for Digital Comics day 11 */

/*  boolean that stores sound playing state*/
var soundPlaying = false;

/* Function that plays a sound*/
function playSound() {
	if (soundPlaying == false) {
		document.getElementById('gunShot').play();
		soundPlaying = true;
	} else {
		document.getElementById('gunShot').pause();
		document.getElementById('gunShot').currentTime = 0;
		soundPlaying = false;
	}
}

/* function to switch images for page One*/
var newPic=new Image()
newPic.src="Assets/Devilp1_Teir4.gif"

/* variable that checks if the image has been clicked */


/* function that swaps the first image for second image*/
function progressPic1() {
	document.getElementById('switchPic').src=newPic.src;
}


/* Page Two Devil*/

var picTwo=new Image()
picTwo.src="Assets/Devil_p3.gif"

/* variable that checks if the image has been clicked */


/* function that swaps the first image for second image*/
function progressPic2() {
		document.getElementById('devilSwitch').src=picTwo.src;
	}

/* function to switch images for page three first gif*/
var doIt=new Image()
doIt.src="Assets/Devilp3_Teir2_2.gif"

/* variable that checks if the image has been clicked */


/* function that swaps the first image for second image*/
function progressPic3() {
	document.getElementById('mouseSwitch').src=doIt.src;
}

/* function to switch images for page three 2nd gif*/
var walkIt=new Image()
walkIt.src="Assets/Devilp3_Teir3.gif"

/* variable that checks if the image has been clicked */


/* function that swaps the first image for second image*/
function progressPic4() {
	document.getElementById('handSwitch').src=walkIt.src;
			document.getElementById('gunShot').play();
}


/* function to switch images for page three 2nd gif*/
var headSwitch=new Image()
headSwitch.src="Assets/Devil_p4_Teir3.gif"

/* variable that checks if the image has been clicked */


/* function that swaps the first image for second image*/
function progressPic5() {
	document.getElementById('deadDevil').src=headSwitch.src;
}

