/* scripts for Final Project */

$(document).ready(function(){



$("#helmet").hide();

	$("#clickhelmet").click(function(){
		$("#helmet").show();
		$("#clickhelmet").hide();
	})

	$("#helmet").click(function(){
		$("#clickhelmet").show();
		$("#helmet").hide();
	})

$("#chestplate").hide();

	$("#clickchestplate").click(function(){
		$("#chestplate").show();
		$("#clickchestplate").hide();
	})

	$("#chestplate").click(function(){
		$("#clickchestplate").show();
		$("#chestplate").hide();
	})

$("#cannon").hide();

	$("#clickcannon").click(function(){
		$("#cannon").show();
		$("#clickcannon").hide();
		})

	$("#cannon").click(function(){
		$("#clickcannon").show();
		$("#cannon").hide();
		})

$("#boot").hide();

	$("#clickboot").click(function(){
		$("#boot").show();
		$("#clickboot").hide();
		})

	$("#boot").click(function(){
		$("#clickboot").show();
		$("#boot").hide();
		})

$("#gauntlet").hide();

	$("#clickgauntlet").click(function(){
		$("#gauntlet").show();
		$("#clickgauntlet").hide();
		})

	$("#gauntlet").click(function(){
		$("#clickgauntlet").show();
		$("#gauntlet").hide();
		})


var waypoint = new Waypoint({
	  element: document.getElementById('rumble'),
	  handler: function() {
	   //  notify('Basic waypoint triggered')
// 	$(img src(panel6.gif))
	     $("#dragon").attr("src", "assets/panel6.gif")
	  }
	})



})
