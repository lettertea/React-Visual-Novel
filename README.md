# React-Visual-Novel
![preview](https://u.imageresize.org/b5417b85-66e4-49ca-b167-f3ec5342bee5.png)

Live demo [here](https://visualnovel.surge.sh).

An interactive story game with functionalities such as save, load, backlog, hide menu, and choices.

# Installation

*   Clone the Repository

```
$ git clone https://github.com/nashkenazy/React-Visual-Novel.git
```

*   Navigate to the root directory in the command line

```
$ cd React-Visual-Novel
```

*   Run one of the following commands to install the package.json dependencies:
    `$ yarn` or `$ npm install`

# Running the Application

There are a couple of methods to start the application. Both should work fine.

1.  Run `start-site.bat` from the root directory.
2.  Open the command line in the root directory and run `$ yarn start` or `$ npm start`.

# Usage

## Writing a "Frame"
From the root directory, navigate to ./src/api/novelFrames.js. There should be an array of objects called "novelFrames," which is the default export. Each index represents a frame, where its properties are written in an object. Here is a list of the relevant properties.

- `bg`: Displays a 1280x720 background image.
- `bgm`: Loops through an audio file. Uses the [react-sound](https://github.com/leoasis/react-sound) component.
- `sceneChange`: Accepts a boolean. If set to true, background and sprite will leave and enter with a fade time of 1700 and 2000 miliseconds respectively. Uses the [ReactCSSTransitionGroup](https://reactjs.org/docs/animation.html) component. Otherwise, fast animation will be used for usual sprite transitions.
- `sound`: Plays an audio file once.
- `speaker`: Accepts a string and shows the name of the character in a bubble on top of textbox. Also wraps text in quotes as a side effect.
- `sprite`: Displays a sprite in the center of the frame. Can also accept an array of two sprites like the following: `sprite: [require("./sprites/block-happy.png"), require("./sprites/block-pout.png")]`
- `text`: Accepts a string and shows text for story.
- `voice`: Plays an audio file once. Identical to the sound property.

## Example of a Typical Frame

```
// ...
  {
    bg: require("./bg/microphone.jpeg"),
    bgm: require("./bgm/city.mp3"),
    speaker: "Block",
    text: "I made this project because I enjoy playing visual novels.",
    sprite: require("./sprites/block-neutral.png")
  },
// ... 
```

## Streamlining the Writing Process

1. Using for loops for the background and background music. They tend to be the same for consecutive frames. You can use a for loop to prevent excessive copying and pasting the values. Here's an example.
```
for (let i = 21; i < 97; i++) {
  novelFrames[i].bgm = require("./bgm/rain.mp3");
}
```
You may also set `logIndex: true` in an object to find its index in the console.

2. Creating variables for speakers and sprites. These properties tend to be reused, and they can be written as variables.
```
const b = "Block";
const bn = require("./sprites/block-neutral.png");
// ...
  {
    speaker: b,
    text: "I made this project because I enjoy playing visual novels.",
    sprite: bn
  },
  // ...
```

## Creating Choices
This process will involve Choices.js and novelFrames.js in the ./src/api directory as well as App.js from the /.src directory.

When you want the user to make a choice, set `choicesExist: true` in the novelFrames.js file. The app will then go through the array of objects in the Choices.js file and present the choices. For example, if it is your third time setting `choicesExist: true`, then the second index in the Choices.js array of objects will be used.

The Choices.js array of objects accepts an array of object called choices. It accepts two properties in its object: `type` and `content`. The type property is purely for functionality and must match the name in the state (which is located in constructor of the App.js file). The content property is like the front-end as it shows the user what the choice will do.

Once the choice has been made, you can choose to make the user jump to another point to an index. This is so the user will only see the route affected by the choice. Once the route is completed, you can make the user jump back to the main route at a certain index or end the game by using `testRoutesCompleted: true`.

Example (see demo site for execution):

novelFrames.js
```
// ... Index 9 below. Choice frame.
{
    text: "You've been ignored. (Save before choosing?)",
    sprite: require("./sprites/block-neutral.png"),
    choicesExist: true
  },
```

When choicesExist is true, the following is present.

Choices.js
```
var Choices = [
  {
    choices: [
      {
        type: "throwRock",
        content: "Call Block out and throw a rock."
      },
      {
        type: "noRock",
        content: "Let him continue."
      }
    ]
  }
];
// ...
```

Found near top of App.js file in constructor function. `throwRock` and `noRock` states matches the choices type.
```
    this.state = {
      // ...
      choicesCount: {
        throwRock: 0,
        noRock: 0
      // ...
      },
```
setFrameFromChoice() function in App.js
```
// Routes depending on choice
    if (updatedChoicesCount.throwRock === 1) {
      this.setFrame(10);
    } else if (updatedChoicesCount.noRock === 1) {
      this.setFrame(27);
    }
```

Last index of routes are indicated with `testRoutesCompleted: true` (26 for first choice, 48 for second)

Index 26
```
{
    sceneChange: true,
    testRoutesCompleted: true
  },
  // Goes to title screen
  
```
Index 48
```
// ...
{
    speaker: b,
    text: "If you have any questions or comments, you can message me.",
    sprite: bn,
    testRoutesCompleted: true
  }
// goes to title screen
```


setNextFrame() function in App.js
```
// Resume to title screen after testRoutes detours
if (novelFrames[this.state.index].testRoutesCompleted) {
      this.setState(INITIAL_STATE);
      // ...
    }
```

## License

[MIT](./LICENSE)
