var data = {};

data.dialogTypes = {
  RESPONSE: 0,
  BOOLEAN: 1,
  MONOLOGUE: 2,
  CONVERSATION: 3,
  BOOLEAN_QUESTION: 4,
  OPEN_QUESTION: 5,
  GREETING: 6,
  DEVICE: 7
};

data.d = data.dialogTypes;

data.actions = {
  NONE: 0,
  WAKE: 1,
  DRESS: 2,
  TRANSIT: 3,
  COFFEE: 4
};

data.settings = {
  HOME: 'home',
  TRANSIT: 'transit',
  WORK: 'work',
  CAFE: 'cafe',
  BAR: 'bar'
};

data.sizes = {
  XS: 'extraSmall',
  S: 'small',
  M: 'medium',
  L: 'large'
};

data.dudes = {
  DESIGNER_DUDE: 'Designer Dude',
  EVAN: 'Evan',
  GREG: 'Greg',
  MILO: 'Milo',
  PRANAV: 'Pranav',
  ERIC: 'Eric',
  ERIK: 'Erik',
  SOMEONE: 'Someone',
  PHONE: 'Phone',
  TABLET: 'Tablet',
  LAPTOP: 'Laptop'
}

data.images = [
  // Establishing
  {
    setting: data.settings.WORK,
    characters: [],
    src: 'images/establishing--work.jpg',
    alt: 'Exterior of a building with logo \'Generic Startup\'. A figure walks in the front door. Through one window, a few figures are sitting/standing at desks. Through another window, a figure is throwing a small ball at a basketball hoop.'
  },
  {
    setting: data.settings.WORK,
    characters: [],
    src: 'images/establishing--ping-pong.jpg',
    alt: 'A ping-pong table in a room with a poster that says \'Code more.\' Next to the poster is a post with several labelled arrows pointing in different directions: \'Desks,\' \'Cafe,\' \'IT Room,\' and \'Roof.\''
  },
  {
    setting: data.settings.CAFE,
    characters: [],
    src: 'images/establishing--cafe.jpg',
    alt: 'A line of people outside a food truck. The truck\'s sign reads: \'organic rustic free-range premium urban-inspired locally-sneezed coffee.\''
  },
  // Objects,
  {
    characters: [
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.L, left: .12, top: .1, width: .7, height: .3}},
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.L, left: .17, top: .54, width: .62, height: .36}}
    ],
    src: 'images/speech-balloons_01.jpg',
    alt: 'Two speech balloons.'
  },
  {
    characters: [
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.L, left: .15, top: .1, width: .7, height: .3}},
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.L, left: .2, top: .54, width: .62, height: .36}}
    ],
    src: 'images/speech-balloons_02.jpg',
    alt: 'Two speech balloons.'
  },
  {
    characters: [],
    src: 'images/beer-bottle_01.jpg',
    alt: 'A hand holding a beer bottle.'
  },
  {
    characters: [{name: data.dudes.PHONE, balloon: {size: data.sizes.L, left: .3, top: .2, width: .38, height: .5}}],
    src: 'images/cell-phone_01.jpg',
    alt: 'A hand holding a white smartphone.'
  },
  {
    characters: [{name: data.dudes.PHONE, balloon: {size: data.sizes.L, left: .3, top: .15, width: .4, height: .65}}],
    src: 'images/cell-phone_02.jpg',
    alt: 'A hand holding a black smartphone.'
  },
  {
    characters: [{name: data.dudes.PHONE, balloon: {size: data.sizes.L, left: .33, top: .13, width: .42, height: .7}}],
    src: 'images/cell-phone_03.jpg',
    alt: 'A hand holding a black smartphone.'
  },
  {
    characters: [{name: data.dudes.SOMEONE, balloon: {size: data.sizes.L, left: .1, top: .1, height: .5}}],
    src: 'images/coffee-cup_01.jpg',
    alt: 'A coffee cup alone on a table.'
  },
  {
    characters: [{name: data.dudes.LAPTOP, balloon: {size: data.sizes.L, left: .2, top: .11, width: .6, height: .5}}],
    src: 'images/laptop--pc.jpg',
    alt: 'A laptop screen.'
  },
  {
    characters: [{name: data.dudes.LAPTOP, balloon: {size: data.sizes.L, left: .23, top: .11, width: .5, height: .45}}],
    src: 'images/laptop--mac.jpg',
    alt: 'A laptop screen.'
  },
  // Evan
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.EVAN}],
    src: 'images/evan--waking_01.jpg',
    gifSrc: 'images/evan--waking_01.gif',
    alt: 'Evan asleep in bed with a partner. His watch is glowing.'
  },
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.EVAN}],
    src: 'images/evan--waking_02.jpg',
    gifSrc: 'images/evan--waking_02.gif',
    alt: 'Evan looks at his glowing watch in the dark.'
  },
  {
    characters: [{name: data.dudes.EVAN}],
    src: 'images/evan.jpg',
    alt: 'Evan staring at viewer.'
  },
  {
    setting: data.settings.TRANSIT,
    characters: [{name: data.dudes.EVAN}],
    src: 'images/evan--transit_01.jpg',
    gifSrc: 'images/evan--transit_01.gif',
    alt: 'Evan rides his bike down hill.'
  },
  {
    characters: [
      {name: data.dudes.EVAN, balloon: {size: data.sizes.S, left: .1, top: .06, width: .39, height: .26}},
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.S, left: .06, top: .45, width: .29, height: .41}}
    ],
    src: 'images/evan--drinking-coffee.jpg',
    alt: 'Evan takes a sip out of his disposable coffee cup.'
  },
  {
    characters: [
      {name: data.dudes.EVAN, balloon: {size: data.sizes.L, left: .05, top: .06, width: .48, height: .4}},
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.S, left: .08, top: .53, width: .26, height: .36}}
    ],
    src: 'images/evan--holding-coffee.jpg',
    gifSrc: 'images/evan--holding-coffee.gif',
    alt: 'Evan smiles while holding a disposable coffee cup.'
  },
  {
    characters: [{name: data.dudes.EVAN, balloon: {size: data.sizes.L, left: .1, top: .57, width: .5, height: .35}}],
    src: 'images/evan--closeup.jpg',
    alt: 'Evan smiles.'
  },
  {
    characters: [{name: data.dudes.EVAN, balloon: {size: data.sizes.L, left: .56, top: .05, width: .4, height: .5}}],
    src: 'images/evan--closeup_02.jpg',
    alt: 'Close-up on Evan, so only the bottom half of his head and the top of his chest are visible.'
  },
  {
    setting: data.settings.WORK,
    characters: [{name: data.dudes.EVAN}],
    src: 'images/evan--typing.jpg',
    gifSrc: 'images/evan--typing.gif',
    alt: 'Evan typing on laptop.'
  },
  // Greg
  {
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg.jpg',
    alt: 'Greg staring at viewer.'
  },
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg--waking_01.jpg',
    gifSrc: 'images/greg--waking_01.gif',
    alt: 'Greg is asleep in bed.'
  },
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg--waking_02.jpg',
    alt: 'Hand reaches for phone alarm.'
  },
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg--waking_03.jpg',
    alt: 'Man puts on a t-shirt with a power on symbol on it.'
  },
  {
    setting: data.settings.TRANSIT,
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg--hoodie.jpg',
    gifSrc: 'images/greg--hoodie.gif',
    alt: 'Greg zips up his hoodie while riding hoverboard.'
  },
  {
    setting: data.settings.TRANSIT,
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.L, left: .4, top: .1, height: .4}}],
    src: 'images/greg--hoverboard.jpg',
    gifSrc: 'images/greg--hoverboard.gif',
    alt: 'Greg rides a hoverboard down the sidewalk.'
  },
  {
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.S, left: .52, top: .05, width: .42, height: .20}}],
    src: 'images/greg--phone.jpg',
    alt: 'Greg looks at his phone.'
  },
  {
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.L, left: .03, top: .06, height: .4, width: .45}}],
    src: 'images/greg--laughing.jpg',
    alt: 'Greg smiles.'
  },
  {
    setting: data.settings.WORK,
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.L, left: .06, top: .05, width: .41, height: .46}}],
    src: 'images/greg--typing_01.jpg',
    alt: 'Greg types at his desk, a Red Bull and coffee cup to his right.'
  },
  {
    setting: data.settings.WORK,
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.S, left: .45, top: .05, height: .3, width: .5}}],
    src: 'images/greg--typing_02.jpg',
    alt: 'Greg types at his desk, a Red Bull and coffee cup to his right.'
  },
  {
    setting: data.settings.WORK,
    characters: [{name: data.dudes.GREG}],
    src: 'images/greg--typing_03.jpg',
    gifSrc: 'images/greg--typing_03.gif',
    alt: 'Hands typing on laptop keyboard.'
  },
  {
    characters: [
      {name: data.dudes.GREG, action: data.actions.COFFEE},
      {name: data.dudes.SOMEONE, balloon: {size: data.sizes.S, left: .43, top: .05, height: .35}}],
    src: 'images/greg--close-up-coffee.jpg',
    alt: 'Close-up on Greg, so we only see half his face. He holds a coffee cup.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.GREG, balloon: {size: data.sizes.L, left: .4, top: .1, height: .3}},
    ],
      src: 'images/greg--pointing.jpg',
      gifSrc: 'images/greg--pointing.gif',
      alt: 'Greg holds a coffee coffee cup and points to himself with his thumb.'
  },

  // Milo
  {
    characters: [{name: data.dudes.MILO}],
    src: 'images/milo.jpg',
    alt: 'Milo staring at viewer.'
  },
  {
    setting: data.settings.HOME,
    characters: [
      {name: data.dudes.MILO}
    ],
    src: 'images/milo--waking_01.jpg',
    gifSrc: 'images/milo--waking_01.gif',
    alt: 'A bed with a sock hanging off the side, a hairy bare leg poking out from under a blanket. A phone on the table reads "11:00".'
  },
  {
    setting: data.settings.HOME,
    characters: [{name: data.dudes.MILO}],
    src: 'images/milo--waking_02.jpg',
    alt: 'Milo squints his eyes and runs his hands through his messy hair.'
  },
  {
    setting: data.settings.TRANSIT,
    characters: [
      {name: data.dudes.MILO}
    ],
    src: 'images/milo--bart.jpg',
    gifSrc: 'images/milo--bart.gif',
    alt: 'Milo looks at his phone on BART. Strangers behind him also look at their phones.'
  },
  {
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.L, left: .47, top: .03, width: .5, height: .3}}
    ],
    src: 'images/milo--confused.jpg',
    alt: 'Milo looks either concerned or confused.'
  },
  {
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.L, left: .03, top: .05, width: .45, height: .55}}
    ],
    src: 'images/milo--talking.jpg',
    alt: 'Milo is talking.'
  },
  {
    setting: data.settings.WORK,
    characters: [{name: data.dudes.MILO}],
    src: 'images/milo--typing_01.jpg',
    alt: 'Milo types at his standing desk, his right foot on a soccer ball.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.L, left: .4, top: .08, width: .53, height: .3}},
    ],
    src: 'images/milo--typing_02.jpg',
    alt: 'Milo looks at his laptop.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.L, left: .53, top: .06, width: .4, height: .35}}
    ],
    src: 'images/milo--skeptical.jpg',
    gifSrc: 'images/milo--skeptical.gif',
    alt: 'Milo stands in front of some computers with his arms crossed, one eyebrow raised slightly.'
  },
  // Multiple
  {
    characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.S, left: .44, top: .06, width: .5, height: .28}}, {name: data.dudes.SOMEONE}],
    src: 'images/m__greg-someone.jpg',
    alt: 'Greg talks to someone who\'s walking through a door.'
  },
  {
    characters: [{name: data.dudes.EVAN, balloon: {size: data.sizes.L, left: .03, top: .04, width: .41, height: .29}}, {name: data.dudes.GREG}],
    src: 'images/m__evan-greg--coffee.jpg',
    gifSrc: 'images/m__evan-greg--coffee.gif',
    alt: 'Greg looks over his shoulder and smiles at Evan, who\'s standing a little bit behind him drinking coffee.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.GREG},
      {name: data.dudes.EVAN},
      {name: 'Greg and Evan', balloon: {size: data.sizes.XS, left: .35, top: .45, width: .30, height: .2}}
    ],
    src: 'images/m__greg-evan--hackathon.jpg',
    alt: 'Greg and Evan sit typing furiously below a sign that says \'Hackathon(g)\'.'
  },
  {
    characters: [
      {name: data.dudes.EVAN, balloon: {size: data.sizes.S, left: .37, top: .05, width: .56, height: .18}},
      {name: data.dudes.GREG, balloon: {size: data.sizes.S, left: .34, top: .76, width: .44, height: .19}}
    ],
    src: 'images/m__greg-evan--talking.jpg',
    alt: 'Evan, in foreground, smiles as Greg gesticulates.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.GREG, balloon: {size: data.sizes.XS, left: .05, top: .05, width: .3, height: .1}},
      {name: data.dudes.MILO, balloon: {size: data.sizes.L, left: .43, top: .05, width: .47, height: .3}}
    ],
    src: 'images/m__greg-milo--beanbag.jpg',
    alt: 'Greg, holding his laptop, smiles at Milo, who\'s sitting in a beanbag chair wearing five-finger shoes.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.S, left: .04, top: .02, width: .6, height: .2}},
      {name: data.dudes.GREG}
    ],
    src: 'images/m__greg-milo--talking.jpg',
    alt: 'Milo and Greg smiling at one another, Milo about to put hand on Greg\'s arm.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.MILO, balloon: {size: data.sizes.S, left: .08, top: .08, width: .48, height: .25}},
      {name: data.dudes.EVAN, balloon: {size: data.sizes.S, left: .45, top: .75, width: .5, height: .2}}],
    src: 'images/m__milo-evan--talking.jpg',
    alt: 'Milo sits at his laptop while Evan stands by with arms crossed.'
  },
  {
    setting: data.settings.WORK,
    characters: [
      {name: data.dudes.MILO},
      {name: data.dudes.EVAN},
      {name: data.dudes.GREG}
    ],
    src: 'images/m__video-games.jpg',
    alt: 'Milo, Evan, and Greg play video games on the couch with intense focus and determination.'
  },
  // Temp
  // {
  //   setting: data.settings.WORK,
  //   characters: [{name: data.dudes.SOMEONE}],
  //   src: 'images/temp/04.jpg',
  //   alt: 'A dude hovers over a laptop.'
  // },
  // {
  //   setting: data.settings.CAFE,
  //   characters: [
  //     {name: data.dudes.GREG, action: data.actions.COFFEE, balloon: {size: data.sizes.S, left: .3, top: .1}},
  //     {name: data.dudes.EVAN, action: data.actions.COFFEE, balloon: {size: data.sizes.S, left: .5, top: .7}}
  //   ],
  //   src: 'images/temp/07.jpg',
  //   alt: 'Greg waves to a dude getting coffee.'
  // }
];

data.startPanels = {
  'Evan': [
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.EVAN}],
      src: 'images/evan--waking_01.jpg',
      gifSrc: 'images/evan--waking_01.gif',
      alt: 'Evan asleep in bed with a partner. His watch is glowing.'
    },
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.EVAN}],
      src: 'images/evan--waking_02.jpg',
      gifSrc: 'images/evan--waking_02.gif',
      alt: 'Evan looks at his glowing watch in the dark.'
    },
    {
      setting: data.settings.TRANSIT,
      characters: [{name: data.dudes.EVAN}],
      src: 'images/evan--transit_01.jpg',
      gifSrc: 'images/evan--transit_01.gif',
      alt: 'Evan rides his bike down hill.'
    }
  ],
  'Greg': [
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.GREG}],
      src: 'images/greg--waking_01.jpg',
      gifSrc: 'images/greg--waking_01.gif',
      alt: 'Greg is asleep in bed.'
    },
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.GREG}],
      src: 'images/greg--waking_02.jpg',
      alt: 'Hand reaches for phone alarm.'
    },
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.GREG}],
      src: 'images/greg--waking_03.jpg',
      alt: 'Man puts on a t-shirt with a power on symbol on it.'
    },
    {
      setting: data.settings.TRANSIT,
      characters: [{name: data.dudes.GREG}],
      src: 'images/greg--hoodie.jpg',
      gifSrc: 'images/greg--hoodie.gif',
      alt: 'Greg zips up his hoodie while riding hoverboard.'
    },
    {
      setting: data.settings.TRANSIT,
      characters: [{name: data.dudes.GREG, balloon: {size: data.sizes.L, left: .4, top: .1, height: .4}}],
      src: 'images/greg--hoverboard.jpg',
      gifSrc: 'images/greg--hoverboard.gif',
      alt: 'Greg rides a hoverboard down the sidewalk.'
    }
  ],
  'Milo': [
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.MILO}],
      src: 'images/milo--waking_01.jpg',
      gifSrc: 'images/milo--waking_01.gif',
      alt: 'A bed with a sock hanging off the side, a hairy bare leg poking out from under a blanket. A phone on the table reads "11:00".'
    },
    {
      setting: data.settings.HOME,
      characters: [{name: data.dudes.MILO}],
      src: 'images/milo--waking_02.jpg',
      alt: 'Milo squints his eyes and runs his hands through his messy hair.'
    },
    {
      setting: data.settings.TRANSIT,
      characters: [
        {name: data.dudes.MILO}
      ],
      src: 'images/milo--bart.jpg',
      gifSrc: 'images/milo--bart.gif',
      alt: 'Milo looks at his phone on BART. Strangers behind him also look at their phones.'
    }
  ] 
};
 
data.dialog = [
  {type: data.d.DEVICE, text: "You have no new email."},
  {type: data.d.DEVICE, text: "You have no new friends."},
  {type: data.d.DEVICE, text: "You have no friends."},
  {type: data.d.DEVICE, text: "No one liked that tweet."},
  {type: data.d.DEVICE, text: "Someone 'Liked' something you did. Woohoo."},
  {type: data.d.DEVICE, text: "Someone poked you. Is that still a thing?"},
  {type: data.d.GREETING, text: "Hey bro!"},
  {type: data.d.GREETING, text: "What's up?"},
  {type: data.d.GREETING, text: "How's it hanging?"},
  {type: data.d.GREETING, text: "How you doin'?"},
  {type: data.d.GREETING, text: "Yo!"},
  {type: data.d.GREETING, text: "Good morning!"},
  {type: data.d.GREETING, text: "Hey there!"},
  {type: data.d.GREETING, text: "Hey folks!"},
  {type: data.d.GREETING, text: "Hey guys!"},
  {type: data.d.GREETING, text: "SUP."},
  {type: data.d.GREETING, text: "Jolly good day, sir!"},
  {type: data.d.GREETING, text: "My MAN!"},
  {type: data.d.GREETING, text: "Hey browski."},
  {type: data.d.GREETING, text: "Hey bud!"},
  {type: data.d.GREETING, text: "Sup duder?"},
  {type: data.d.GREETING, text: "Ayyyyyyyyy..."},
  {type: data.d.GREETING, text: "So...."},
  {type: data.d.BOOLEAN_QUESTION, text: "Do you want to get some coffee?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Did you see that tweet?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Have you done any QA?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Thinking of joining the company a capella group?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Dude, want to see what I've been working on?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Did you notice that they switched out the kiwi kombucha for another flavor?"},
  {type: data.d.BOOLEAN, text: "That's rad!"},
  {type: data.d.BOOLEAN, text: "I guess so."},
  {type: data.d.BOOLEAN, text: "Probably."},
  {type: data.d.BOOLEAN, text: "I could ask Siri?"},
  {type: data.d.BOOLEAN, text: "Um..."},
  {type: data.d.BOOLEAN, text: "Er..."},
  {type: data.d.BOOLEAN, text: "Well..."},
  {type: data.d.BOOLEAN, text: "I haven't thought about it."},
  {type: data.d.BOOLEAN, text: "I'm not sure."},
  {type: data.d.BOOLEAN, text: "Totally."},
  {type: data.d.BOOLEAN, text: "No way."},
  {type: data.d.BOOLEAN, text: "Eh."},
  {type: data.d.BOOLEAN, text: "No idea."},
  {type: data.d.BOOLEAN, text: "Yep."},
  {type: data.d.BOOLEAN, text: "Yuppers."},
  {type: data.d.BOOLEAN, text: "No clue."},
  {type: data.d.BOOLEAN, text: "For sure."},
  {type: data.d.BOOLEAN, text: "Oh man, I have a story about that..."},
  {type: data.d.BOOLEAN, text: "Not gonna lie, I have no idea."},
  {type: data.d.BOOLEAN, text: "Oh, I'm not really sure. I can ask Siri."},
  {type: data.d.BOOLEAN, text: "Well, the answer to your question is complex. Let's start with an equation..."},
  {type: data.d.BOOLEAN, text: "Listen, if I had an investor for every time someone asked me that question...",  reusable: true},
  {type: data.d.CONVERSATION, text: "First world problems."},
  {type: data.d.CONVERSATION, text: "I got pretty wasted last night."},
  {type: data.d.CONVERSATION, text: "At this other Harvard-Yale tech party..."},
  {type: data.d.CONVERSATION, text: "I couldn't find a place to park my Prius."},
  {type: data.d.CONVERSATION, text: "The brunch line was way too long."},
  {type: data.d.CONVERSATION, text: "I'm still catching up on the tweets."},
  {type: data.d.CONVERSATION, text: "It was the semicolon all along!"},
  {type: data.d.CONVERSATION, text: "I mean, they don't even GO here."},
  {type: data.d.CONVERSATION, text: "I'm going to Tahoe this weekend."},
  {type: data.d.CONVERSATION, text: "We should totally go to Dolores this weekend."},
  {type: data.d.CONVERSATION, text: "I spent most of the weekend watching Game of Thrones."},
  {type: data.d.CONVERSATION, text: "I still haven't watched the latest episode of Game of Thrones. No spoilers!"},
  {type: data.d.CONVERSATION, text: "I sent this girl a SUPER witty Tinder message... She never replied."},
  {type: data.d.CONVERSATION, text: "I spent, like, 3 hours tracking down a bug. It was a missing semicolon."},
  {type: data.d.CONVERSATION, text: "Well, I spent, like, 2 hours debugging. It was a missing comma."},
  {type: data.d.CONVERSATION, text: "I've been collecting free tech shirts. I have, like, 98."},
  {type: data.d.CONVERSATION, text: "I got 99 tech shirts, but your startup's isn't one of them."},
  {type: data.d.CONVERSATION, text: "*sigh* I got to work today after they finished serving breakfast."},
  {type: data.d.CONVERSATION, text: "We can just ship the prototype. No one will care."},
  {type: data.d.CONVERSATION, text: "I'm crowd-sourcing text for my comic."},
  {type: data.d.CONVERSATION, text: "I'm crowdsourcing ideas for my Burning Man camp."},
  {type: data.d.CONVERSATION, text: "...But actually, technically, it's a marsupial."},
  {type: data.d.CONVERSATION, text: "My favorite character in OverWatch is Junkrat."},
  {type: data.d.CONVERSATION, text: "Dude, I've got some Steam cheat codes."},
  {type: data.d.CONVERSATION, text: "We interviewed this girl today. Pretty good at coding, but meh on culture fit."},
  {type: data.d.CONVERSATION, text: "What if I'm having a quarter-life crisis?"},
  {type: data.d.CONVERSATION, text: "How are we going to synergize the monitization?"},
  {type: data.d.BOOLEAN_QUESTION, text: "Are you speaking of vertical integration?"},
  {type: data.d.CONVERSATION, text: "They say 'income stratification' like it's a bad thing."},
  {type: data.d.CONVERSATION, text: "... and they said that *I'm* in the wrong?"},
  {type: data.d.CONVERSATION, text: "Pics or it didn't happen."},
  {type: data.d.CONVERSATION, text: "Yeah, I Kickstarted it."},
  {type: data.d.BOOLEAN_QUESTION, text: "IDK, is it organic?"},
  {type: data.d.CONVERSATION, text: "I have those shoes with the individual toes."},
  {type: data.d.CONVERSATION, text: "It was on sale, only $500."},
  {type: data.d.CONVERSATION, text: "I'm allergic to organic molecules."},
  {type: data.d.CONVERSATION, text: "Man, I really want some kale."},
  {type: data.d.BOOLEAN_QUESTION, text: "Is it gluten-free?"},
  {type: data.d.CONVERSATION, text: "That's what she said."},
  {type: data.d.CONVERSATION, text: "That's what he said."},
  {type: data.d.CONVERSATION, text: "That's what she said!"},
  {type: data.d.BOOLEAN, text: "That's a little column A, a little column B."},
  {type: data.d.CONVERSATION, text: "MAN, I WANT SOME GUAC."},
  {type: data.d.CONVERSATION, text: "I've decided to pursue other opportunities."},
  {type: data.d.CONVERSATION, text: "My Burning Man camp is gonna be tight."},
  {type: data.d.CONVERSATION, text: "They have an app for that."},
  {type: data.d.CONVERSATION, text: "Do they have an app for that?"},
  {type: data.d.CONVERSATION, text: "I should invent an app for that..."},
  {type: data.d.CONVERSATION, text: "Let's quit our jobs and do something *really* lucrative. Like make comics."},
  {type: data.d.CONVERSATION, text: "Let's all buy ponies!"},
  {type: data.d.CONVERSATION, text: "Let's quit our jobs and do something *inspiring*. Like Nose-Picking as a Service."},
  {type: data.d.CONVERSATION, text: "I wouldn't really identify as a 'bro.' More like a 'dude' or a 'guy.'"},
  {type: data.d.CONVERSATION, text: "I'm still gonna vote for Bernie."},
  {type: data.d.CONVERSATION, text: "You're harshing my vertical integration."},
  {type: data.d.CONVERSATION, text: "She was just too *quirky*, you know?"},
  {type: data.d.CONVERSATION, text: "I asked if she was dating anyone. It was awkward, so I started talking about carbon dating."},
  {type: data.d.CONVERSATION, text: "In summary: it's new, important, and obsolete."},
  {type: data.d.CONVERSATION, text: "Not cool, bro."},
  {type: data.d.CONVERSATION, text: "Awktown."},
  {type: data.d.CONVERSATION, text: "Yeah, I read about that on Reddit."},
  {type: data.d.CONVERSATION, text: "I got banned from Reddit once."},
  {type: data.d.CONVERSATION, text: "I'm having a quarter-life crisis. BRING ME LA CROIX."},
  {type: data.d.OPEN_QUESTION, text: "Where does this fall on the Brotem Pole?"},
  {type: data.d.CONVERSATION, text: "Where are all the female engineers?"},
  {type: data.d.CONVERSATION, text: "She's a web developer, does basic stuff like CSS."},
  {type: data.d.CONVERSATION, text: "Dude, it's just CSS."},
  {type: data.d.CONVERSATION, text: "It's just Javascript. I could do that in my sleep."},
  {type: data.d.BOOLEAN_QUESTION, text: "Don't you think there should be more vegan options at lunch?"},
  {type: data.d.CONVERSATION, text: "They wouldn't let me vape at this poetry reading. What's the deal?"},
  {type: data.d.CONVERSATION, text: "I was vaping at the doctor's office and they asked me to stop. Seriously?"},
  {type: data.d.CONVERSATION, text: "What does that even mean?"},
  {type: data.d.CONVERSATION, text: "I'm not eating the catering this week. I'm on a Soylent kick."},
  {type: data.d.CONVERSATION, text: "You wouldn't believe what my Uber driver told me."},
  {type: data.d.CONVERSATION, text: "Let's touch base about it in the All Hands meeting."},
  {type: data.d.BOOLEAN, text: "Let's touch base about it in the All Hands."},
  {type: data.d.BOOLEAN_QUESTION, text: "Want to join our Burning Man camp?"},
  {type: data.d.CONVERSATION, text: "BRB"},
  {type: data.d.CONVERSATION, text: "That's weird AF."},
  {type: data.d.CONVERSATION, text: "I saw the coolest thing on imgur last night."},
  {type: data.d.CONVERSATION, text: "Um, it's pronounced JIFF."},
  {type: data.d.CONVERSATION, text: "Um, it's pronounced Poe-KAY-mon."},
  {type: data.d.CONVERSATION, text: "Um, it's pronounced GIF."},
  {type: data.d.BOOLEAN_QUESTION, text: "Catch any good Pokémon lately?"},
  {type: data.d.CONVERSATION, text: "There's no rare Pokémon in this neighborhood!"},
  {type: data.d.CONVERSATION, text: "Ugh, my Uber driver is seven minutes away."},
  {type: data.d.CONVERSATION, text: "I want a burrito."},
  {type: data.d.CONVERSATION, text: "That's rad."},
  {type: data.d.CONVERSATION, text: "Hurrah!"},
  {type: data.d.CONVERSATION, text: "Yay!"}
];
