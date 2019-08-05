$(document).ready(function(){
	
	
var flashGif = new Waypoint({
  	element: document.getElementById('firstFlashWaypoint'),
  	handler: function() {
    		/* waypoint function goes below*/
    		$("#firstFlashWaypoint").attr("src", "../assets/03.gif");
 		 },
 		 offset: "50%"

	});
	
var flashGifTwo = new Waypoint({
  	element: document.getElementById('secondFlashWaypoint'),
  	handler: function() {
    		/* waypoint function goes below*/
    		$("#secondFlashWaypoint").attr("src", "../assets/03.gif");
 		 },
 		 offset: "50%"

	});

var trainSound = new Waypoint({
  	element: document.getElementById('trainSoundOne'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("trainSound").play();}
 		 },
 		 offset: "90%"

	});
var firstZap = new Waypoint({
  	element: document.getElementById('firstZapSound'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("firstZap").play();}
 		 },
 		 offset: "50%"

	});
var ambientSound = new Waypoint({
  	element: document.getElementById('atmosphereSound'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("ambientSound").play();}
 		 },
 		 offset: "80%"

	});
var trainDoor = new Waypoint({
  	element: document.getElementById('doorSoundOne'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("trainDoor").play();}
 		 },
 		 offset: "30%"

	});
var windSound = new Waypoint({
  	element: document.getElementById('windSoundEffect'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("windSound").play();}
 		 },
 		 offset: "10%"

	});
var secondZzt = new Waypoint({
  	element: document.getElementById('secondZapSound'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("secondZzt").play();}
 		 },
 		 offset: "50%"

	});
var trainAnnouncer = new Waypoint({
  	element: document.getElementById('trainAnnounce'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("trainAnnouncer").play();}
 		 },
 		 offset: "50%"

	});
var trainDoor = new Waypoint({
  	element: document.getElementById('doorSoundTwo'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("trainDoor").play();}
 		 },
 		 offset: "30%"

 	});
 var windSoundTwo = new Waypoint({
  	element: document.getElementById('windSoundTwo'),
  	handler: function(direction) {
  		if (direction === 'down') {
    		/* waypoint function goes below*/
    		document.getElementById("windSound").play();}
 		 },
 		 offset: "50%"

 	});
});