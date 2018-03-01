var novelFrames = [
  {
    speaker: "Random Person A",
    text:
      "This song plays pretty often. I wonder why the creator never changes it. He always complains about it.",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    speaker: "shizuku",
    text: "jaaaafjfaaaajfaaaajfaaaa",
    sprite: "sprites/shizuku-laughing.png",
    choicesExist: true
  },
  // Sprinter Route First Index: 2
  {
    speaker: "shizuku",
    text: "I just began the 'Sprinter' route",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "It's not that fun, but you know...",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Just gotta do test.",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Let's end now.",
    sprite: "sprites/shizuku-laughing.png",
    testRoutesCompleted: true
  },
  // Sprinter Route Last Index: 5 above; Alternate route First Index 6 below
  {
    text: "I began the 'Alternate' Route",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Now I end that route",
    sprite: "sprites/shizuku-laughing.png",
    testRoutesCompleted: true
  },
  // Alternate Route Last Index: 7 above; Third route First Index 8 below

  {
    text: "Third Route",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Third end",
    sprite: "sprites/shizuku-laughing.png",
    testRoutesCompleted: true
  },
  // Third route Last Index 9; Return to main route below index 10
  {
    text: "Back to main route",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Some text after 2",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Some text after 3",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "jaaaaf",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "jfaaaa",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "jfaaaaa",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Some text after",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Some text after 2",
    sprite: "sprites/shizuku-laughing.png"
  },
  {
    text: "Some text after 3",
    sprite: "sprites/shizuku-laughing.png"
  }
];

for (let i = 0; i < novelFrames.length; i++) {
  if (novelFrames[i].choicesExist !== true) {
    novelFrames[i].choicesExist = false;
  }
}

for (let i = 0; i < novelFrames.length; i++) {
  novelFrames[i].bg = "bg/rainy_class.png";
}

for (let i = 0; i < novelFrames.length; i++) {
  novelFrames[i].bgm = "bgm/Orange.mp3";
}

export default novelFrames;
