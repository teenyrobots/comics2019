/*
 TODOS:
 [x] Use underscore for a lot of quick array searching.
 [x] Procedural (rather than random) generation
 [x] Don't duplicate panels
 [ ] Implement save
*/

var testMode = false;
var testModeCounter = 0;

// The guts of it all!
var comic = [];

// State variables
var setting = data.settings.HOME; // always start at home
var characters = { // mapping character to the most recent tier in which they appeared
  'Evan': false,
  'Greg': false,
  'Milo': false
}
var currentCharacters = [];
var startCharacter = null;
var miscCharacters = [data.dudes.SOMEONE, data.dudes.PHONE, data.dudes.TABLET, data.dudes.LAPTOP, 'Greg and Evan'];

var introducing = false;
var usedText = [];
var lastTextType = null;
var imageStaleness = {};

// How many rows have been/should be generated?
var rowCount = 0;
var maxRows = false;
var fullPanelCount = 0;
var uniqueLimit = 20;
var uniqueSpacing = 10;

// Flags
var animated = true;
var deleteWasLastAction = false;
var reverseOrder = true;

// Initialize text
var superShort = 11;
var largeCap = 40;
_.each(data.dialog, function(textNode) {
  textNode.size = textNode.text.length;
  textNode.isSmall = textNode.size < largeCap;
  textNode.isExtraSmall = textNode.size < superShort;
});

// reverse a string
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }
  return o;
}

function isAppropriateTextType(type, panelEndsTier, isHackathon) {
  // first text on the page, or it doesn't matter
  if (!lastTextType) return true;

  // don't end a tier with a question
  if (panelEndsTier && (type == data.dialogTypes.BOOLEAN_QUESTION || type == data.dialogTypes.QUESTION)) {
    return false;
  }

  // TODO: can't reply to oneself
  if (lastTextType == data.dialogTypes.BOOLEAN_QUESTION) return type == data.dialogTypes.BOOLEAN;
  if (type == data.dialogTypes.BOOLEAN) return lastTextType == data.dialogTypes.BOOLEAN_QUESTION;
  // if (lastTextType == 'generalQuestion') return type == 'generalAnswer';
  // if (type == 'generalAnswer') return lastTextType == 'generalQuestion';

  if (introducing && currentCharacters.length > 1 && !isHackathon) {
    return type == data.dialogTypes.GREETING;
  } else {
    return type !== data.dialogTypes.GREETING;
  }
}

function getAvailableText(size, panelEndsTier, isHackathon) {
  var options = _.filter(data.dialog, function(textNode) {
    if (!isAppropriateTextType(textNode.type, panelEndsTier, isHackathon)) return false;
    if (size == data.sizes.S && !textNode.isSmall) return false;
    if (size == data.sizes.XS && !textNode.isExtraSmall) return false;
    return usedText.indexOf(textNode.text) == -1;
  });
  return options;
}

function generateText(size, panelEndsTier, isHackathon) {
  var options = getAvailableText(size, panelEndsTier, isHackathon);
  if (options.length == 0) {
    usedText = [];
    options = getAvailableText(size, panelEndsTier, isHackathon);
  }
  var option = _.sample(options);
  if (!option) {
    option = { text: 'What is life?', type: null };
  }
  usedText.push(option.text);
  lastTextType = option.type;
  introducing = false;
  return option.text;
}

function generatePanelUI(panel) {
  var cell = $('<div class="panel"></div>');
  cell.data('panel', panel);

  // blank panel
  if (!panel) {
    cell.addClass('b');
    cell.append('<img src="images/binary.jpg" alt="blank panel"/>');
    return cell;
  }

  var alt = panel.image.alt ? panel.image.alt : '';

  // speech balloons
  for (var i = 0; i < panel.dialog.length; i++) {
    var speech = panel.dialog[i];
    // visual text is hidden from screenreaders, as text is
    // reproduced in the alt text for the panel image
    var balloon = $(
      '<span class="speech speech--' + speech.size + '" aria-hidden="true">' + speech.text + '</span>'
    );
    balloon.css('left', '' + (speech.left * 100) + '%');
    balloon.css('top', '' + (speech.top * 100) + '%');
    if (speech.width) {
      balloon.css('width', '' + (speech.width * 100) + '%');
    }
    if (speech.height) {
      balloon.css('height', '' + (speech.height * 100) + '%');
    }
    cell.append(balloon);

    // generate text for screenreader users
    alt += ' ' + speech.speaker + ' says, \'' + speech.text + '\'';
  }

  // image
  var src = panel.image.src;
  if (panel.image.gifSrc) {
    cell.addClass('animated');
    if (animated) {
      src = panel.image.gifSrc;
    }
  }
  cell.append('<img src="' + src+ '" alt="' + alt + '"/>');

  return cell;
}

function hasRelevantCharacter(image) {
  if (image.characters.length == 0) return true;
  return _.find(image.characters, function(character) {
    return _.contains(currentCharacters, character.name) || _.contains(miscCharacters, character.name);
  });
}

function hasOkaySetting(image) {
  // Panels with arbitrary settings (such as close-ups)
  // are fine as long as the current setting isn't HOME.
  if (!image.setting && (setting !== data.settings.HOME)) return true;

  // Panels in the same setting as current setting are fine.
  if (image.setting == setting) return true;

  // HOME must be sandwiched by TRANSIT.
  if (setting == data.settings.HOME) {
    return image.setting == data.settings.TRANSIT;
  }
  if (image.setting == data.settings.HOME) {
    return setting == data.settings.TRANSIT && rowCount > 7;
  }

  return false;
}

function canBeNextImage(image, panelStartsTier) {
  // Don't reuse recent images
  var staleness = imageStaleness[image.src];
  if (
    staleness &&
    staleness > (fullPanelCount-uniqueLimit) &&
    fullPanelCount-staleness < uniqueSpacing) {
    return false;
  }

  // First two tiers are set at home. The character should be consistent.
  if (rowCount < 3) {
    return (image.setting == data.settings.HOME) && hasRelevantCharacter(image);
  }

  // When starting a new tier, either same character or same setting as previous panel.
  if (panelStartsTier) {
    return hasRelevantCharacter(image) || (image.setting == setting);
  // When adding to a new tier, use same setting with same character.
  } else {
    return hasRelevantCharacter(image) && hasOkaySetting(image);
  }
}

function getNextImage(panelStartsTier, panelEndsTier) {
  var image = null;
  if (testMode) {
    if (testModeCounter == data.images.length) {
      testModeCounter = 0;
    }
    testModeCounter++;
    return data.images[testModeCounter-1];
  }

  // always start at home
  var homeCount = data.startPanels[startCharacter].length;
  if (fullPanelCount <= homeCount) {
    image = data.startPanels[startCharacter][fullPanelCount-1];
  }

  if (image == null) {
    var unusedPanels = _.filter(data.images, function(image) {
      return canBeNextImage(image, panelStartsTier);
    });

    // If we weren't able to find viable panels,
    // freshen them up and try it again.
    if (unusedPanels.length == 0) {
      imageStaleness = [];
      // data.images.forEach(function(image) {
      //   imageStaleness[image.src] = false;
      // });
      unusedPanels = _.filter(data.images, function(image) {
        return canBeNextImage(image, panelStartsTier);
      });
    }
    var image = _.sample(unusedPanels);
  }
  if (image == null) {
    // Weirdly, we can't find a panel to use next!
    image = _.findWhere(data.images, {src: 'images/speech-balloons_02.jpg'});
    console.log('Uhhh...');
  }

  imageStaleness[image.src] = fullPanelCount;

  // update state variables
  if (typeof image.setting != "undefined") setting = image.setting;
  if (panelStartsTier) currentCharacters = [];
  for(var i = 0; i < image.characters.length; i++) {
    name = image.characters[i].name;
    if (!_.contains(currentCharacters, name) && !_.contains(miscCharacters, name)) {
      introducing = true;
      currentCharacters.push(name);
    }
  }
  // console.log('Current state:');
  // console.log('Setting: ', setting);
  // console.log('Characters: ', characters);
  // console.log('Panel: ', image);

  // return image
  return image;
}

function generatePanel(blank, panelStartsTier, panelEndsTier) {
  if (blank) return null;
  introducing = false;
  fullPanelCount++;
  var image = getNextImage(panelStartsTier, panelEndsTier);
  var dialog = [];
  for (var i = 0; i < image.characters.length; i++) {
    var character = image.characters[i];
    var isHackathon = character.name == 'Greg and Evan';
    if (character.balloon) {
      var text = generateText(character.balloon.size, panelEndsTier, isHackathon);
      dialog.push(_.extend(character.balloon, {text: text, speaker: character.name}));
    }
  }
  return {image: image, dialog: dialog};
}

function generateRow() {
  if (maxRows && (rowCount > maxRows)) return;
  rowCount++;
  deleteWasLastAction = false;

  var tier = [];
  var binary = (rowCount >>> 0).toString(2);

  var row = $('<section class="tier" aria-label="Tier ' + rowCount + '"></section>');
  if (reverseOrder) binary = reverse(binary);
  var foundFirst = false;
  for (var i = 0; i < binary.length; i++) {
    var isEmpty = binary[i] == 0;
    var isFirst = !foundFirst && !isEmpty;
    if (isFirst) {
      foundFirst = true;
    }
    var panel = generatePanel(isEmpty, isFirst, i==binary.length-1);
    tier.push(panel);
    row.append(generatePanelUI(panel));
  }
  comic.push(tier);
  $('main').append(row);
  row[0].scrollIntoView();
}

function removeRow() {
  if (rowCount <= 1 || deleteWasLastAction) return;
  $('.tier').last().remove();
  comic = comic.splice(comic.length-1, 1);
  rowCount--;
  deleteWasLastAction = true;
}

function toggleAnimations() {
  animated = !animated;

  $('.animated').each(function(index, element) {
    var data = $(element).data('panel');
    var src = animated ? data.image.gifSrc : data.image.src;
    $(element).find('img').attr('src', src);
  });
  text = animated ? 'Turn off animations' : 'Turn on animations';
  $('.button--animations').html(text);
}

function toggleAbout() {
  about = $('.about');
  about.toggle();
  if (about.is(':visible')) {
    $('.button--about').html('Hide project info');
    about[0].scrollIntoView();
  } else {
    $('.button--about').html('About this project');
  }
}

// key handlers
$('body').keydown(function(event) {
  // k key: generate a new row
  if (event.keyCode == 74) {
    generateRow();
    event.preventDefault();
  }
  // f key: remove latest row
  if (event.keyCode == 70) {
    removeRow();
    event.preventDefault();
  }
});

$(document).ready(function() {
  startCharacter = _.sample(_.keys(characters));
  characters[startCharacter] = 1;
  generateRow();
});

console.log('You currently have ' + data.images.length + ' panels.');