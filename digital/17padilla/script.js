$(document).ready(function () {
	
	$(".mapOverlay").hide();

	var revealMap = new Waypoint({
  		element: document.getElementById('firstWaypoint'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map thing is here now");
    		$(".mapOverlay").show();
  		},
  		offset: '200px',
  		horizontal: true
	})
	
	var revealMapTwo = new Waypoint({
  		element: document.getElementById('secondWaypoint'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map two should show");
    		$(".mapOverlay").attr("src", "assets/map-2.gif");	
  		},
  		horizontal: true
	})
	
	var revealMapThree = new Waypoint({
  		element: document.getElementById('thirdWaypoint'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map three should show");
    		$(".mapOverlay").attr("src", "assets/map-3.gif");	
  		},
  		horizontal: true
	})
	
	var revealMapThree = new Waypoint({
  		element: document.getElementById('fourthWaypoint'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map x marks the spot should show");
    		$(".mapOverlay").attr("src", "assets/map-x.gif");	
  		},
  		horizontal: true
	})
	
	var hideMapEnd = new Waypoint({
  		element: document.getElementById('hideMapWaypointEnd'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map should hide");
    		$(".mapOverlay").hide();	
  		},
  		horizontal: true,
  		offset: '-20px'
	})
	
	var hideMapBefore = new Waypoint({
  		element: document.getElementById('hideMapWaypointBefore'),
  		handler: function() {
    		/* waypoint function goes below */
    		console.log("map should hide");
    		$(".mapOverlay").hide();	
  		},
  		horizontal: true,
  		offset: '-50%'
	})
		
	
})