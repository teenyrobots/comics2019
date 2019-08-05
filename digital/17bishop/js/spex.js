
$(function() {

	var spexOn = false,
		spexUsed = false,
		spexStartTime,
		cursed = false,
		curseTimer,
		warningTimer,
		warningCount = 0;

	var handAnimMs = 200,
		curseMs = 60 * 1000,
		warningMs = 45 * 1000,
		warningIntervalMs = 5 * 1000,
		curseProgressUpdateMs = 200,
		haloDelayMs = 2000,
		haloStepMs = 100,
		haloPauseMs = 500;

	var currentOverlayStopFn,
		currentHalo,
		endOverlayTimer,
		overlayActive;

	//
	// Popups & overlays
	//

	// Show a popup element when the trigger has been clicked on.  The popup stays visible until you click on it,
	// or click on the trigger again.  If an area has multiple popups, the "data-popup" attribute on the trigger
	// provides a jQuery selector for finding the appropriate one.
	function triggerPopup(e) {
		var $t = $(e.target),
			selector = $t.attr('data-popup') || '.popup',
			$popup = $t.closest('.has-popup').find(selector);
		e.preventDefault();
		$popup.toggleClass('active');
	}

	function closePopup(e) {
		var $t = $(e.target);
		e.preventDefault();
		$t.closest('.popup').toggleClass('active');
	}

	// Show an overlay element when the trigger has been pressed on.  The overlay stays visible until you release
	// the button, although if there's a "data-max-duration" attribute then it will only stay visible up to that
	// number of milliseconds.
	function triggerOverlay(e) {
		var $t = $(e.target),
			$overlay = $t.closest('.has-overlay').find('.overlay'),
			opacity = $overlay.attr('data-max-opacity') || 1.0;
		e.preventDefault();
		$overlay.hide();
		$overlay.addClass('active');
		$overlay.fadeTo(500, opacity);
		overlayActive = true;
		currentOverlayStopFn = function() {
			$overlay.fadeOut(500, function() {
				$overlay.removeClass('active');	
			});
			overlayActive = false;
		}
		if (timeLimit) {
			endOverlayTimer = setTimeout(endOverlay, parseInt(timeLimit));
		}
	}

	function endOverlay(e) {
		if (currentOverlayStopFn) {
			e && e.preventDefault();
			currentOverlayStopFn();
			currentOverlayStopFn = null;
			if (endOverlayTimer) {
				clearTimeout(endOverlayTimer);
				endOverlayTimer = null;
			}
		}
	}

	// Briefly flash the halos for all clickable elements, in case the user hasn't found them by hovering (or
	// can't hover because we're on a mobile device).
	function showHalos() {
		var levelsAndDelays = [
			[1, haloStepMs],
			[2, haloStepMs],
			[3, haloPauseMs],
			[2, haloStepMs],
			[1, haloStepMs],
			[0, 0]];
		function doHaloStep(step) {
			var level = levelsAndDelays[step][0],
			    delay = levelsAndDelays[step][1],
			    $body = $('body');
			if (level > 0) {
				$body.addClass('halos-active');
				$body.addClass('halos-animate' + level);
			} else {
				$body.removeClass('halos-active');
			}
			for (var i = level + 1; i <= 3; i++) {
				$body.removeClass('halos-animate' + i);
			}
			if (delay == 0) {
				setTimeout(showHalos, haloDelayMs);
			} else {
				setTimeout(doHaloStep, delay, step + 1);
			}
		}
		if (overlayActive) {
			setTimeout(showHalos, haloDelayMs);
		} else {
			doHaloStep(0);
		}
	}

	//
	// Story logic
	//

	// Special animation for panel 4, the blurry hand in front of the light.  It's just 2 image overlays shown in
	// rapid succession, and then shown in reverse when you let go of the button.

	function triggerHandAnimation(e) {
		var $div = $('#p04'),
			nextStepTimer,
			rewindAnimFn;
		e.preventDefault();
		rewindAnimFn = function() {
			clearTimeout(nextStepTimer);
			if ($div.hasClass('step2')) {
				$div.addClass('step1').removeClass('step2');
				nextStepTimer = setTimeout(rewindAnimFn, handAnimMs);
			} else {
				$div.removeClass('step1');
			}
		};
		$div.addClass('step1');
		nextStepTimer = setTimeout(function() {
				$div.addClass('step2').removeClass('step1');
			}, handAnimMs);
		currentOverlayStopFn = rewindAnimFn;
	}

	// Update the timer progress bar while the glasses are on.

	function updateCurseProgress() {
		if (spexOn) {
			var curTime = new Date(),
				elapsedMs = curTime.getTime() - spexStartTime.getTime(),
				percent = Math.min(100, Math.max(0, (elapsedMs / curseMs) * 100));
			$('#curse-progress').css('height', percent + '%');
			setTimeout(updateCurseProgress, curseProgressUpdateMs);
		}
	}

	// Show the warning animation that happens at 5-second intervals starting 15 seconds before expiration.

	function spexTimeWarning() {
		warningCount += 1;
		$('body').addClass('curse-warning').addClass('warnings-' + warningCount);
			// the different "warnings-1/2/3" classes are used to force it to load the image with a
			// slightly different URL each time, so the animation will keep resetting
		console.log('warned ' + warningCount);
		if (warningCount < ((curseMs - warningMs) / warningIntervalMs)) {
			warningTimer = setTimeout(spexTimeWarning, warningIntervalMs);
		}
		resetBackgroundAnimation();
	}

	// Show the animation that happens when the curse timer expires.

	function spexTimeExpired() {
		console.log('expired');
		cursed = true;
		$('body').addClass('curse-happening').removeClass('curse-warning');
		resetBackgroundAnimation();
	}

	function resetBackgroundAnimation() {
		setTimeout(function() { $('body').removeClass('curse-warning curse-happening'); console.log('reset'); }, 3000);
	}

	// The reader has chosen to put the glasses on.  Start the curse timer.

	function putSpexOn(e) {
		e.preventDefault();
		if (!spexUsed) {
			spexUsed = true;
			spexOn = true;
			spexStartTime = new Date();
			curseTimer = setTimeout(spexTimeExpired, curseMs);
			warningTimer = setTimeout(spexTimeWarning, warningMs);
			$('body').addClass('part2-unlocked spex-on');
			$('.put-spex-on').hide();
			window.scrollTo(0, $('#p07').offset().top);
			setTimeout(updateCurseProgress, curseProgressUpdateMs);
		}
	}

	// The reader has chosen to take the glasses off.  Stop the curse timer, and show one of the two possible
	// part 3 endings depending on whether the timer expired.

	function takeSpexOff(e) {
		e.preventDefault();
		if (spexUsed && spexOn) {
			spexOn = false;
			clearTimeout(curseTimer);
			clearTimeout(warningTimer);
			$('body').addClass(cursed ? 'cursed' : 'not-cursed').addClass('part3-unlocked')
				.removeClass('spex-on');
			$('.take-spex-off').hide();
			window.scrollTo(0, $('#p14').offset().top);
		}
	}

	// Start over by refreshing the page.

	function startOver(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		window.location.reload();
	}

	//
	// Setup/event binding
	//

	$(document).on('mouseup', endOverlay);

	$('.overlay-trigger')
		.on('mousedown', triggerOverlay)
		.on('touchstart', triggerOverlay)
		.on('mouseup', endOverlay)
		.on('touchend', endOverlay);
	$('.overlay').on('mouseup', endOverlay);

	$('.popup-trigger').on('click', triggerPopup);
	$('.popup').on('click', closePopup);

	$('#p04')
		.on('mousedown', triggerHandAnimation)
		.on('touchstart', triggerHandAnimation)
		.on('mouseup', endOverlay)
		.on('touchend', endOverlay);
	$('.put-spex-on').on('click', putSpexOn);
	$('.take-spex-off').on('click', takeSpexOff);

	$('.restart-link').on('click', startOver);

	setTimeout(showHalos, haloDelayMs);

	// TEMPORARY DEVELOPER HACK
	$('#toggle-state-links a').on('click', function(e) {
		var $l = $(e.target), stateClass = $l.attr('data-state');
		$('body').toggleClass(stateClass);
		$l.css('background-color', $('body').hasClass(stateClass) ? 'yellow' : 'white');
		e.preventDefault();
	});
});
