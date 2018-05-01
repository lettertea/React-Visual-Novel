# React-Visual-Novel

The application runs on the web browser and renders sounds and images to provide gameplay via React. It uses the Web Storage API to save and load the user's progress. The user may also see previous texts through the backlog or skip ahead using the buttons below.

![preview](https://u.imageresize.org/b5417b85-66e4-49ca-b167-f3ec5342bee5.png)

[Live Demo](https://rvn.netlify.com)

- [Installation](https://github.com/nashkenazy/React-Visual-Novel#installation)
- [Running the Application](https://github.com/nashkenazy/React-Visual-Novel#running-the-application)
- [Usage](https://github.com/nashkenazy/React-Visual-Novel#usage)
  - [Writing a "Frame"](https://github.com/nashkenazy/React-Visual-Novel#writing-a-frame)
  - [Example of a Typical Frame](https://github.com/nashkenazy/React-Visual-Novel#example-of-a-typical-frame)
  - [Streamlining the Writing Process](https://github.com/nashkenazy/React-Visual-Novel#streamlining-the-writing-process)
  - [Creating Choices](https://github.com/nashkenazy/React-Visual-Novel#creating-choices)
- [License](https://github.com/nashkenazy/React-Visual-Novel#license)

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

There are a couple of methods to start the application.

1.  Run `start-site.bat` from the root directory.

Or

2.  Open the command line in the root directory and run `$ yarn start` or `$ npm start`.

# Usage

## Writing a "Frame"
From the root directory, navigate to ./src/api/novelFrames.js. There should be an array of objects called "novelFrames." Each index represents a frame, and its properties are written in an object. All the available properties are listed below.

- `bg`: Displays a 1280x720 background image. Requires a path to an image file.
- `bgm`: Loops through an audio file. Uses the [react-sound](https://github.com/leoasis/react-sound) component. Requires a path to an audio file.
- `choicesExist`: Accepts a boolean. If set to true, the choices from the Choices.js api will be presented to the user.
- `logIndex`: Accepts a boolean. If set to true, the object's index will be logged into the console.
- `sceneChange`: Accepts a boolean. If set to true, background and sprite will leave and enter with a fade time of 1700 and 2000 miliseconds respectively. Uses the [ReactCSSTransitionGroup](https://reactjs.org/docs/animation.html) component. Otherwise, fast animation will be used for usual sprite transitions.
- `sound`: Plays an audio file once. Requires a path to an audio file.
- `speaker`: Accepts a string and shows the name of the character in a bubble on top of textbox. Also wraps text in quotes as a side effect.
- `sprite`: Displays a sprite in the center of the frame. Can also accept an array of two sprites like the following: `sprite: [require("./sprites/block-happy.png"), require("./sprites/block-pout.png")]`
- `testRoutesCompleted`: Accepts a boolean. 
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

1. Use for loops for the background and background music. They tend to be the same for consecutive frames. You can use a for loop to prevent excessive copying and pasting the values. Here's an example.
```
for (let i = 21; i < 97; i++) {
  novelFrames[i].bgm = require("./bgm/rain.mp3");
}
```
You may also set `logIndex: true` in an object to find its index in the console.

2. Create variables for speaker and sprite values. Writing the variable name instead of the string or path tends to be quicker and more consistent.
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

When you want the user to make a choice, set `choicesExist: true` in novelFrames.js. The app will go through the array of objects in Choices.js and present the current choice. For example, if it is your third time setting `choicesExist: true`, then the second index in Choices.js will be used.

The Choices.js array of objects accepts choices, also an array of object (example below). It accepts two properties in its object: `type` and `content`. The `type` property is purely for functionality and must match the state in the constructor of App.js. The `content` property is like the front-end as it shows the user what the choice will do and has no effect on functionality.

Once the choice has been made, you can choose to make the user jump to an index in novelFrames.js. Thus, the user will only see the route affected by the choice, skipping the other, irrelevant route. Once the route is completed, you can make the user jump back to the main route at a certain index or end the game. To do so. In my example below, I use the state, `testRoutesCompleted`. The novelFrames.js property must have that property set to true. You are free to create your own state and name it whatever you want in App.js.

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


App.js
```
  setNextFrame() {
    // Resume to title screen after testRoutes detours
    // Property does not have to be called testRoutesCompleted
    if (novelFrames[this.state.index].testRoutesCompleted) {
      this.setState(INITIAL_STATE); // Or jump to index. this.setFrame(number);
    } // ...
  }
  // ...
    
```

## License

[MIT](./LICENSE)
