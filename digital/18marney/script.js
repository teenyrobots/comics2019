// Scripts for The Future Now.

function hideAllBut(selector_list) {
  $(ALL_DIVS_SELECTOR).hide();

  // This is the "right" way to loop over an array, gnarly.
  for (let selector of selector_list) {
    $(selector).show();
  }
}

function isInteractive() {
  // Insert a little override in case we just want to see the page
  // quickly.
  let url = window.location.href;
  return !url.endsWith("?showall");
}

function loadFrom(from_selector, load_selector) {
  removePreload(from_selector);
  $(load_selector).fadeIn("fast");
}

function replaceImageWith(selector, new_image_path) {
  $(selector).attr("src", new_image_path);
}

function removePreload(selector) {
  // Remove bottom padding to show loaded in item.
  $(selector).removeClass("bottomPadded");
  $(selector).removeClass("button");
}

function setupPreloads(selector_list) {
  for (let selector of selector_list) {
    // Give some extra space so user can see when the next
    // element is loaded in.
    $(selector).addClass("bottomPadded");
    $(selector).addClass("button");
  }
}

function showAll() {
  $(ALL_DIVS_SELECTOR).show();
}

function withDelay(func, delay_length_secs) {
  window.setTimeout(func, delay_length_secs * 1000);
}


// All children of body.
const ALL_DIVS_SELECTOR = "body > *"

const NO_DELAY = 0;
const SHORT_DELAY_SECS = 1.8;
const MEDIUM_DELAY_SECS = 3.8;
const LONG_DELAY_SECS = 9;
const WAY_LONG_DELAY_SECS = 30;
$(document).ready(function() {
  if (isInteractive()) {
    hideAllBut(["#intro"]);
    // Set up initial preload state for buttons.
    setupPreloads([
      "#introButton",
      "#page1Button",
      "#page2Button",
      "#page3Button",
      "#page4Button"]);
  } else {
    showAll();
  }

  $("#introButton").click(function(){
    replaceImageWith(
      "#introButton",
      "assets/p1_tier1_moving.gif");

    function loadAndReplaceImage() {
      loadFrom("#introButton", "#page1");
      replaceImageWith(
      "#introButton",
      "assets/p1_tier1_postpush.gif");
    }
    withDelay(loadAndReplaceImage, MEDIUM_DELAY_SECS);
  });

  $("#page1Button").click(function(){
    replaceImageWith(
      "#page1Button",
      "assets/p1_tier4_moving.gif");
    function loadAndReplaceImage() {
      loadFrom("#page1Button", "#page2");
      replaceImageWith(
        "#page1Button",
        "assets/p1_tier4_postpush.gif");
    }
    withDelay(loadAndReplaceImage, MEDIUM_DELAY_SECS);
  });

  $("#page2Button").click(function(){
    replaceImageWith(
      "#page2Button",
      "assets/p2_tier5_moving.gif");
    function loadAndReplaceImage() {
      loadFrom("#page2Button", "#page3");
      replaceImageWith(
        "#page2Button",
        "assets/p2_tier5_postpush.gif");
    }
    withDelay(loadAndReplaceImage, MEDIUM_DELAY_SECS);
  });


  // Set up some initial state for the poof panel.
  let nextPoofPanelIndex = 0;
  $("#page3Button").click(function(){
    // Note this list excludes the initial image.
    let poofPanelImages = [
      "assets/p3_tier5_1.gif",
      "assets/p3_tier5_2.gif",
      "assets/p3_tier5_3.gif",
      "assets/p3_tier5_4.gif"]
    let poofPanelDelays = [
      SHORT_DELAY_SECS,
      SHORT_DELAY_SECS,
      SHORT_DELAY_SECS,
      LONG_DELAY_SECS
    ]

    // Load the next poof panel image, if it exists.
    let replacePoofPanel = 
      nextPoofPanelIndex < poofPanelImages.length;
    if (replacePoofPanel) {
      replaceImageWith(
        "#page3Button",
        "assets/p3_tier6_moving.gif");

      function replaceImagesAndIncrementIndex() {
        new_image = poofPanelImages[nextPoofPanelIndex];
        replaceImageWith("#page3PoofPanel", new_image);
        replaceImageWith(
          "#page3Button",
          "assets/p3_tier6_prepush.gif");
        
        nextPoofPanelIndex += 1;
      }
      delay = poofPanelDelays[nextPoofPanelIndex];
      withDelay(replaceImagesAndIncrementIndex, delay)
      return;
    }

    // Otherwise load the next section.
    function loadAndHideButton() {
      loadFrom("#page3Button", "#page4");
      $("#page3Button").hide();
    }
    withDelay(loadAndHideButton, NO_DELAY);

    // And load easter egg.
    function loadAndReplaceImage() {
      loadFrom("#page4Button", "#page5");
    }
    withDelay(loadAndReplaceImage, WAY_LONG_DELAY_SECS);
  });
});