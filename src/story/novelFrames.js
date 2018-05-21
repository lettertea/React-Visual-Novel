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
