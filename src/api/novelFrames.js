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
    effect: require("./sounds/unlock.mp3"),
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
// Algorithm to set values to keys from most recent value

let bgCache = "";
let bgmCache = "";
let spriteCache = "";
let spriteLeftCache = "";
let spriteRightCache = "";

for (let e of novelFrames) {
  // sprite
  if (e.sprite && e.sprite !== "") {
    spriteCache = e.sprite;
  }
  if (e.sprite === "") {
    spriteCache = "";
  }
  if (!e.sprite && e.sprite !== "") {
    e.sprite = spriteCache;
  }
  // spriteLeft
  if (e.spriteLeft && e.spriteLeft !== "") {
    spriteLeftCache = e.spriteLeft;
  }
  if (e.spriteLeft === "") {
    spriteLeftCache = "";
  }
  if (!e.spriteLeft && e.spriteLeft !== "") {
    e.spriteLeft = spriteLeftCache;
  }
  // spriteRight
  if (e.spriteRight && e.spriteRight !== "") {
    spriteRightCache = e.spriteRight;
  }
  if (e.spriteRight === "") {
    spriteRightCache = "";
  }
  if (!e.spriteRight && e.spriteRight !== "") {
    e.spriteRight = spriteRightCache;
  }
  // bg
  if (e.bg && e.bg !== "") {
    bgCache = e.bg;
  }
  if (e.bg === "") {
    bgCache = "";
  }
  if (!e.bg && e.bg !== "") {
    e.bg = bgCache;
  }
  // bgm
  if (e.bgm && e.bgm !== "") {
    bgmCache = e.bgm;
  }
  if (e.bgm === "") {
    bgmCache = "";
  }
  if (!e.bgm && e.bgm !== "") {
    e.bgm = bgmCache;
  }
}

export default novelFrames;
