const b = "Block";
const bn = require("./sprites/block-neutral.png");

let novelFrames = [
  {
    speaker: b,
    sprite: bn,
    text: "So we will keep track of the player's choices."
  },
  {
    choicesExist: true
  },
  {
    routeBegins: "pickedUpObject",
    text: "I bend down to pick up the object."
  },
  {
    text: "It's a key.",
    jumpTo: "objectChoice"
  },
  {
    routeBegins: "objectIgnored",
    text: "I shouldn't do that."
  },
  {
    text: "It could be infected or a trap.",
    jumpTo: "objectChoice"
  },
  {
    receiveJump: "objectChoice",
    text: "I walk ahead deeper into the dungeon and see a door ahead."
  },
  {
    text:
      "I grab the handle and pull it, but it doesn't budge. It needs a key.",
    jumpBecauseStoreTo: "haveKey"
  },
  {
    text: "I try picking it, but nothing happens."
  },
  {
    logIndex: true,
    transition: "sceneChange",
    jumpTo: "titleScreen"
  },
  // Jumps to below if the user picks up the key
  {
    receiveJumpBecauseStore: "haveKey",
    sound: require("./sounds/unlock.mp3"),
    text: "I take out the key from my pocket and insert it into the lock."
  },
  {
    text: "The door opens."
  },
  {
    logIndex: true,
    transition: "sceneChange",
    jumpTo: "titleScreen"
  }
];

// BG
for (let i = 0; i < 9; i++) {
  novelFrames[i].bg = require("./bg/microphone.jpeg"); // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

novelFrames[9].bg = require("./bg/lockedIn.png");

for (let i = 10; i < 12; i++) {
  novelFrames[i].bg = require("./bg/microphone.jpeg"); // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

novelFrames[12].bg = require("./bg/entrance.jpeg");

// BGM

for (let i = 0; i < novelFrames.length; i++) {
  novelFrames[i].bgm = require("./bgm/take.mp3"); // source http://freemusicarchive.org/music/David_Szesztay/20170730112627440/Throughout_The_City
}

export default novelFrames;
