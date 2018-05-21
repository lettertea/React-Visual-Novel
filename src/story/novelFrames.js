const b = "Block";
const bn = require("./sprites/lynn-angry.png");
const bh = require("./sprites/lynn-down.png");
const ba = require("./sprites/block-happy.png");

let novelFrames = [
  {
    bg: require("./bg/microphone.jpeg"),
    sprite: bn,
    speaker: "brother man",
    text: "hi"
  },
  {
    choicesExist: true,
    spriteRight: ba,
    spriteLeft: bh,
    spriteLeftTransition: "slide-left",
    spriteTransition: "slide-left"
  },
  {
    text: "Nice to meet you."
  },
  {
    spriteLeft: "",
    bg: require("./bg/entrance.jpeg"),
    transition: "scene-change"
  }
];

// Algorithm to set values to keys from most recent value

let bgCache = "";
let bgmCache = "";
let spriteCache = "";
let spriteLeftCache = "";
let spriteRightCache = "";

for (let key of novelFrames) {
  // sprite
  if (key.sprite && key.sprite !== "") {
    spriteCache = key.sprite;
  }
  if (key.sprite === "") {
    spriteCache = "";
  }
  if (!key.sprite && key.sprite !== "") {
    key.sprite = spriteCache;
  }
  // spriteLeft
  if (key.spriteLeft && key.spriteLeft !== "") {
    spriteLeftCache = key.spriteLeft;
  }
  if (key.spriteLeft === "") {
    spriteLeftCache = "";
  }
  if (!key.spriteLeft && key.spriteLeft !== "") {
    key.spriteLeft = spriteLeftCache;
  }
  // spriteRight
  if (key.spriteRight && key.spriteRight !== "") {
    spriteRightCache = key.spriteRight;
  }
  if (key.spriteRight === "") {
    spriteRightCache = "";
  }
  if (!key.spriteRight && key.spriteRight !== "") {
    key.spriteRight = spriteRightCache;
  }
  // bg
  if (key.bg && key.bg !== "") {
    bgCache = key.bg;
  }
  if (key.bg === "") {
    bgCache = "";
  }
  if (!key.bg && key.bg !== "") {
    key.bg = bgCache;
  }
  // bgm
  if (key.bgm && key.bgm !== "") {
    bgmCache = key.bgm;
  }
  if (key.bgm === "") {
    bgmCache = "";
  }
  if (!key.bgm && key.bgm !== "") {
    key.bgm = bgmCache;
  }
}

export default novelFrames;
