let novelFrames = [
  {
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
    text: "I walk ahead the dungeon and see a door ahead."
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
    text: "No key end.",
    jumpTo: "titleScreen"
  },
  // Jumps to below if the user picks up the key
  {
    receiveJumpBecauseStore: "haveKey",
    text: "I take out the key from my pocket and insert it into the lock."
  },
  {
    text: "The door opens."
  },
  {
    text: "Key unlocked end.",
    jumpTo: "titleScreen"
  }
];

// BG
for (let i = 0; i < novelFrames.length; i++) {
  novelFrames[i].bg = require("./bg/microphone.jpeg"); // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

for (let i = 0; i < novelFrames.length; i++) {
  novelFrames[i].bgm = require("./bgm/take.mp3"); // source https://www.pexels.com/photo/blur-close-up-dark-focus-302655/
}

export default novelFrames;
