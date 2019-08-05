/* Javascript Page One */



/* boulean that stores sound playing state */
var soundPlaying = false;
var newPic=new Image()
newPic.src="img/03/sound_play.gif"
var originalPic=new Image()
originalPic.src="img/03/sound.gif"
	
	
/* function that plays the sound */
function playSound()	{
	if (soundPlaying == false)	{
		document.getElementById('cooper3').play();
		soundPlaying = true;
		document.getElementById('soundButton').src=newPic.src;
	} else {
		document.getElementById('cooper3').pause();
		soundPlaying = false;
		document.getElementById('soundButton').src=originalPic.src;

	}
}


