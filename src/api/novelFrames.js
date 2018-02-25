var novelFrames = [
  {
    speaker: "shizuku",
    bg: "bg/rainy_class.png",
    text: "jf",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    bg: "bg/rainy_class.png",
    text: "jaaaaf",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    bg: "bg/rainy_class.png",
    text: "jfaaaa",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    bg: "bg/rainy_class.png",
    text: "jfaaaaa",
    sprite: "sprites/shizuku-laughing.png",
    choicesExist: true
  },
  {
    bg: "bg/rainy_class.png",
    text: "Some text after",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    bg: "bg/rainy_class.png",
    text: "Some text after 2",
    sprite: "sprites/shizuku-laughing.png",
    choicesExist: true
  },
  {
    bg: "bg/rainy_class.png",
    text: "Some text after 3",
    sprite: "sprites/shizuku-laughing.png"
  }
];

for (let i = 0; i < novelFrames.length; i++) {
  if (novelFrames[i].choicesExist !== true) {
    novelFrames[i].choicesExist = false;
  }
}

export default novelFrames;
