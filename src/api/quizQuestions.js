// Global constants

// Sprites
const sa = "sprites/shizuku-angry.png";
const sl = "sprites/shizuku-laughing.png";
const s = "Someverylongname";
const p = "my dude";

var quizQuestions = [
  {
    speaker: "Shizuku",
    sprite: "sprites/sz1105bb1_l.png",
    text: "Baka.",
    voice: "voices/asuka_sample.ogg"
  },
  {
    choicesMenu: true,
    choices: "hey",
    sprite: "sprites/sz1112bb1_l.png"
  },
  {
    speaker: p,
    sprite: "sprites/sz1113bb1_l.png",
    text: "It's a bit strange, I don't go here very often, but I enjoy it."
  },
  {
    speaker: p,
    sprite: "sprites/sz1015bc1_l.png",
    text: "I need more tests"
  },
  {
    sceneChange: true,
    bg: "bg/black.png"
  },
  {
    sprite: sl,
    text: "Hai"
  },
  {
    sprite: sl,
    text: "man"
  },
  {
    sprite: "",
    text: ""
  },
  {
    sprite: "",
    text: ""
  },
  {
    sprite: "",
    text: ""
  },
  {
    sprite: "",
    text: ""
  }
];

// A for loop for every new bg
for (var i = 0; i < 4; i++) {
  quizQuestions[i].bg = "bg/rainy_class.png";
}

for (var i = 5; i < 10; i++) {
  quizQuestions[i].bg = "bg/692056.jpg";
}

// A for loop for every new bgm

export default quizQuestions;
