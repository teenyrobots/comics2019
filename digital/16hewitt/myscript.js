
var grammar = {}
grammar["[ANNOUNCE]"] = [ "up next, [TRACK]","[TRACK]",
        "after the break we'll hear [TRACK]","[NEWS]",
        ];
grammar["[NEWS]"] = [ "[ARTIST] has just released a new album",
        "[BAND] have released their new album, [ALBUM]",
        "[BAND] is getting back together, with [ARTIST] replacing [ARTIST]",
        "[ALBUM] may be the best album [ARTIST] has released in years"
        ];
grammar["[ALBUM]"] = [ "[ADJECTIVE] [NOUN]", "Don't [VERB] my [NOUN]",
        "[ADJECTIVE] [VERB]", "[NOUN] of [GENRE]"
        ];
grammar["[ADJECTIVE]"] = [ "[STYLE]","Blue","Big","Small","Sexy","Evil",
        "Good","Crazy","Late","Awesome","Untangled","Frozen","Bottom",
        "Every","Dead"
        ];

grammar["[TRACK]"] = ["[SONG] by [ARTIST]","the [ARTIST] cover version of [SONG]",
        "[SONG] as performed by [ARTIST]", "[SONG] recorded by the [BAND] reunion",
        "[SONG] by [BAND]", "[ARTIST] and [BAND] singing [SONG]",
        "[ARTIST] singing [SONG]", "[BAND] singing [SONG]"
        ];
grammar["[SONG]"] = ["Kokomo","Uptown Funk","My Humps","Happy","Royals",
        "Hobo Humpin' Slobo Babe","I Took a Pill in Ibiza","Gangnam Style",
        "Ode to [PUBLICFIGURE]","the [STYLE] [GENRE]","True Survivor",
        "Call me Maybe","Friday","Pretty Fly For A White Guy","Sexy And I Know It",
        "Achy Breaky Heart","Party All The Time","Party With [PUBLICFIGURE]",
        "Love [VEHICLE]","Who Let The [ANIMALS] Out","[VERB] my [NOUN]",
        "the [ADJECTIVE] [NOUN]"
        ];
grammar["[VERB]"] = [ "Shake","Rock","Love","See","Satisfy","Forgive",
        "Speak", "Light","Call","Blame"
        ];
grammar["[NOUN]"] = ["[VEHICLE]","[ANIMAL]","[BODYPART]"
        ];
grammar["[NOUNS]"] = ["[ANIMALS]","[PEOPLE]"
        ];
grammar["[PEOPLE]"] = ["Milkmen","Ladies","Kids","Ghosts"
        ];

grammar["[BODYPART]"] = ["Heart","Mind","Butt","Feet","Body"
        ];
grammar["[ARTIST]"] = ["Kurt Cobain","Elvis","Jimi Hendrix","Michael Jackson",
        "Alex Chilton","Prince","Amy Winehouse","Lou Reed","Tupac Shakur",
        "B.B. King","David Bowie","Lemmy Kilmeister","Merle Haggard",
        "Jeff Healey","Luther Vandross","Rick James","[PUBLICFIGURE]",
        "Frank Zappa","Janis Joplin"];
grammar["[BAND]"] = ["Beatles","Led Zeppelin","Jale","Guns N' Roses","The Smiths",
        "Talking Heads","R.E.M.","Oasis","Genesis","ABBA","My Chemical Romance",
        "Smashing Pumpkins","Jefferson [VEHICLE]","[NEWBAND]"];
grammar["[NEWBAND]"] = ["[ADJECTIVE] [NOUNS]","[GENRE] [PEOPLE]"
        ];

grammar["[VEHICLE]"] = ["Airplane","Starship","Submarine","Segway","Rickshaw"];
grammar["[PUBLICFIGURE]"] = ["Donald Trump","Bernie Saunders","Mom",
        "Kim Kardashian","Matt Silady"
        ];
grammar["[ANIMAL]"] = ["Dog", "Lemur", "Cat", "Monkey","Lizard","Wolf"];
grammar["[ANIMALS]"] = ["Dogs", "Weasels", "Cats", "Monkeys"];
grammar["[GENRE]"] = ["Polka", "Rap", "Rock", "Waltz", "Opera",
        "Blues","Hoedown"];
grammar["[STYLE]"] =[ "Gangsta", "Romantic", "Gangnam", "Yolo","Dubstep","Punk",
        ];


function expandToken( word ) {
    if (grammar.hasOwnProperty( word )) {
        var all_words = "";
        var choices = grammar[word];
        var ex = choices[Math.floor(Math.random()*choices.length)];
        var subwords = ex.split(" ");
        for (var i=0; i < subwords.length; i++){
            all_words += " " + expandToken( subwords[i] );
        }
        return all_words;
    } else {
        return word;
    }
}

var oscilloscopeOn=new Image();
oscilloscopeOn.src="assets/comic_02b.gif";

var radioOn=new Image();
radioOn.src="assets/comic_03b.png";

var nuPanel4 = new Image();
nuPanel4.src="assets/comic_04.png";

var nuPanel5 = new Image();
nuPanel5.src="assets/comic_05.png";

var nuPanel6 = new Image();
nuPanel6.src="assets/comic_06.png";

var nuPanel7 = new Image();
nuPanel7.src="assets/comic_07.gif";

var boomPanel7 = new Image();
boomPanel7.src="assets/comic_07b.gif";

var timerVar;
var myPhase = 0;

function turnOnRadio() {
    document.getElementById('panel2').src = oscilloscopeOn.src;
    document.getElementById('panel3').src = radioOn.src;
    document.getElementById('panel4').src = nuPanel4.src;
    document.getElementById('panel4').className = "responsiveWide";
    document.getElementById('panel5').src = nuPanel5.src;
    document.getElementById('panel5').className = "responsiveNarrow";
    document.getElementById('panel6').src = nuPanel6.src;
    document.getElementById('panel6').className = "responsiveWide";
    document.getElementById('panel7').src = nuPanel7.src;
    document.getElementById('panel7').className = "responsiveNarrow";
    document.getElementById('radio1').className = "radioText";
    document.getElementById('radio2').className = "radioText";
    document.getElementById('radioBox1').className = "radioBox";
    document.getElementById('radioBox2').className = "radioBox";
    window.location.hash = "myTable";
    myPhase = 1;
    myRefresh();
    timerVar = window.setInterval(myRefresh,3000);
    document.getElementById('radioSound').play()
}

function turnOffRadio() {
    if (myPhase == 1) {
        document.getElementById('radioSound').pause()
        document.getElementById('boomSound').play()
        document.getElementById('panel7').src = boomPanel7.src;
        myPhase = 2;
        clearInterval( timerVal );
    }
}

function myRefresh() {
    document.getElementById('radio1').innerHTML = "..."+expandToken("[ANNOUNCE]")+"...";
    document.getElementById('radio2').innerHTML = "..."+expandToken("[ANNOUNCE]")+"...";

}
