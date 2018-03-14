// speaker value
const t = "Thomas";
const b = "Block";
// block sprites
const bh = "sprites/block-happy.png";
const bp = "sprites/block-pout.png";
const bn = "sprites/block-neutral.png";

var novelFrames = [
  {
    speaker: t,
    text: "The production quality is so bad. (Click on the frame to proceed.)"
  },
  {
    speaker: t,
    text:
      "This guy probably went on Google Images and took whatever he could find."
  },
  {
    speaker: "Random Voice",
    text: "That's not true."
  },
  {
    text: "Oh, it's a talking block.",
    sprite: bp
  },
  {
    speaker: b,
    text: "I went on Pexels and took whatever I could.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "If I had a large budget, I'd probably use Google Images and take the copyright strike.",
    sprite: bp
  },
  {
    speaker: t,
    text: "Don't you already do that?",
    sprite: bp
  },
  {
    speaker: b,
    text: "...",
    sprite: bn
  },
  {
    speaker: b,
    text: "I made this project because I enjoy playing visual novels.",
    sprite: bn
  },
  {
    text: "You've been ignored. (Save before choosing?)",
    sprite: bn,
    choicesExist: true
  },
  // Index is 10 above. Main Route divergence point. throwRock route below.
  {
    text: "There were no rocks in the room."
  },
  {
    text: "I stood up--"
  },
  {
    speaker: b,
    text:
      "Wait--I wanted to talk about why state mutations are actually very good practices.",
    sprite: bn
  },
  {
    speaker: t,
    text: "Wait, it's actually not recommended because it can cause bugs.",
    sprite: bn
  },

  {
    speaker: b,
    text: "...",
    sprite: bn
  },
  {
    speaker: b,
    text: "Teh heh!",
    sprite: bh
  },
  {
    text: "I summon a rock in my hands and hurl it to Block.",
    sprite: bn
  },
  {
    speaker: b,
    text: "Uoghh.",
    sprite: bh,
    sound: "sound/thump.mp3" // source http://soundbible.com/993-Upper-Cut.html
  },
  // index 18 below, bgm change
  {
    text: "..."
  },
  {
    text: "I don't think he's moving."
  },
  {
    text: "I walk onto the stage and wave my hands over his figure."
  },
  {
    speaker: b,
    text: "Thomas... I have one thing I need to tell you."
  },
  {
    text: "Block does his same old grin."
  },
  {
    speaker: b,
    text: "My name is not Block."
  },
  { text: "His face relaxes." },
  {
    speaker: t,
    text: "I'll remember that, Not Block."
  },
  {
    sceneChange: true,
    testRoutesCompleted: true
  },

  // Sprinter noRock: index 27 below
  {
    speaker: b,
    text: "Wait, why am I explaining it? Didn't you write it, Thomas?",
    sprite: bn
  },
  {
    speaker: t,
    text: "Shhh. I didn't want to use a sprite of myself, so I drew you.",
    sprite: bp
  },
  {
    speaker: b,
    text: "...",
    sprite: bp
  },
  {
    speaker: t,
    text: "Talk about how cool I was when I doing the CSS.",
    sprite: bp
  },
  {
    speaker: b,
    text: "Yes, Thomas is a super cool CSS programmer.",
    sprite: bn
  },
  {
    speaker: b,
    text: "He hacked so many strips of solutions together.",
    sprite: bh
  },
  {
    speaker: t,
    text: "I'm not sure if I should feel good about that descirption.",
    sprite: bp
  },
  {
    speaker: b,
    text: "Yeah, it's cause you ain't cool.",
    sprite: bp
  },
  {
    speaker: t,
    text: "(*ﾟﾛﾟ)",
    sprite: bp
  },
  {
    speaker: b,
    text:
      "So after hacking a bunch of CSS together, he managed to center a bunch of things and make it work on mobile.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "We tested it only on a limited amount of phones, so it might not work for everyone.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "As for the React portion, one of the main problems was adding multiple routes following a choice.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "The backlog would either get text it shouldn't record or wouldn't get text it should record.",
    sprite: bn
  },
  {
    speaker: b,
    text: "We ended up having to change the way how we handled the choices.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "Instead of having multiple files to contain each independent route, we made it all into one.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "It functions, and surprisingly, it's a lot less code in terms of scalability.",
    sprite: bh
  },
  {
    speaker: b,
    text:
      'But depending on your goals, I might not recommend using this as your "engine"',
    sprite: bn
  },
  {
    speaker: b,
    text:
      "Out of the box, this doesn't come with a lot of animations, effects, or other functionalities many engines come with.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      "But if you like the flexibility to write them yourself or just want to build a simple visual novel on the web, go for it.",
    sprite: bn
  },
  {
    speaker: b,
    text:
      'I\'d be happy that you find my visual novel "engine" useful in any way.',
    sprite: bh
  },
  {
    speaker: b,
    text:
      "There are great alternatives out there, which I'm not ashamed to say is far superior than mine.",
    sprite: bn
  },
  {
    speaker: b,
    text: "If you have any questions or comments, you can message me.",
    sprite: bn,
    testRoutesCompleted: true
  }
];

// BG
for (let i = 0; i < novelFrames.length; i++) {
  if (novelFrames[i].choicesExist !== true) {
    novelFrames[i].choicesExist = false;
  }
}

for (let i = 0; i < 26; i++) {
  novelFrames[i].bg = "bg/microphone.jpeg"; // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

novelFrames[26].bg = "bg/notBlockEnd.png";

for (let i = 27; i < novelFrames.length; i++) {
  novelFrames[i].bg = "bg/microphone.jpeg"; // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

// BGM
for (let i = 0; i < 17; i++) {
  novelFrames[i].bgm = "bgm/city.mp3"; // source http://freemusicarchive.org/music/David_Szesztay/20170730112627440/Throughout_The_City
}

for (let i = 21; i < 27; i++) {
  novelFrames[i].bgm = "bgm/silence.mp3"; // source http://freemusicarchive.org/music/Silence_Is_Sexy/Modern_Antiques_Vol_1__2/Silence_is_Sexy_-_Modern_Antiques_Vol_2_-_01_Holiday
}

for (let i = 27; i < novelFrames.length; i++) {
  novelFrames[i].bgm = "bgm/take.mp3"; // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}
export default novelFrames;
