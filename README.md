# React-Visual-Novel

The application runs on the web browser and renders sounds and images to provide gameplay via React. The user may also see previous texts through the backlog (scrolling up), hide the text box (space), hit next (left click or enter), or skip (hold control).

![preview](https://i.imgur.com/kwYCvkD.png)

[Live Demo](https://rvn.netlify.com)

- [Installation](https://github.com/nashkenazy/React-Visual-Novel#installation)
- [Running the Application](https://github.com/nashkenazy/React-Visual-Novel#running-the-application)
- [Usage](https://github.com/nashkenazy/React-Visual-Novel#usage)
  - [`story.js` Properties](https://github.com/nashkenazy/React-Visual-Novel#storyjs-properties)
    - [Effect Properties](https://github.com/nashkenazy/React-Visual-Novel#effect-properties)
    - [Transition Properties](https://github.com/nashkenazy/React-Visual-Novel#transition-properties)
  - [`choices.js` Properties](https://github.com/nashkenazy/React-Visual-Novel#choicesjs-properties)
  - [Streamlining the Writing Process](https://github.com/nashkenazy/React-Visual-Novel#streamlining-the-writing-process)
    - [Variables](https://github.com/nashkenazy/React-Visual-Novel#variables)
    - [Setting Future Properties](https://github.com/nashkenazy/React-Visual-Novel#setting-future-properties)
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
## `story.js` Properties
From the root directory, navigate to `./src/story/story.js`. There should be an array called `story`. Each index represents a frame, and its properties are written in an object. All the available properties are listed below. Assume default value is undefined.


| Key | Value Type | Description |
|:---|:---|:---|
| bg | `Function` | Displays a 1280x720 background image by accepting `require('path/to/image')`. |
| bgm | `Function` | Loops through an audio file by accepting `require('path/to/audio')`. |
| bgTransition | `String` | Uses the value for transition animations for [ReactCSSTransitionGroup](https://reactjs.org/docs/animation.html) for `bg`. Currently has no options. |
| choicesExist | `Boolean` | If true, choices from `choices.js` will be presented to the user. |
| jumpTo | `String` | Jumps the user to the index where the `receiveJump` property is if the `jumpTo` and `receiveJump` properties are same value. Often used to return to the common route. |
| jumpToBecauseStore | `String` | Jumps the user to the index where the `receiveJumpBecauseStore` property is if the `jumpToBecauseStore` and `receiveJumpBecauseStore` properties are same value. Often used to show scenes from making a particular choice(s). |
| receiveJump | `String` | The receiving point of `jumpTo`'s index jump if they share the same value. |
| receiveJumpBecauseStore | `Array` | The receiving point of `jumpToBecauseStore`'s index jumps under two conditions: 1. the first index of 'receiveJumpBecauseStore' is the same value as `jumpToBecauseStore` and `choices.js`'s `store`. 2. The second index of 'receiveJumpBecauseStore' is the same value of the choice's store. |
| routeBegins | `String` | The end point of a jump immediately following making a choice. Must equal to the `routeBegins` property in `choices.js`. |
| soundEffect | `Function` | Plays an audio file once by accepting `require('path/to/audio')`.  |
| speaker | `String` | Presents the string in a bubble on top of the textbox. Also wraps text in quotes. |
| sprite | `Function` | Displays a sprite in the center of the screen by accepting 'require('path/to/image'). |
| spriteEffect | `String` | Uses the value as a class for `sprite`. Currently has `"shake"`, `"bounce"`, `"grow"`, `"shrink-back"`, `"shrink"`, `"grow-back"`, `"grown"`, and `"shrunk"`. |
| spriteTransition | `String` | Uses the value for transition animations for ReactCSSTransitionGroup for `sprite`. |
| spriteLeft | `Function` | Displays a sprite in the left of the screen by accepting `require('path/to/image')`. |
| spriteLeftEffect | `String` | Uses the value as a class for `spriteLeft`. |
| spriteLeftTransition | `String` | Uses the value for transition animations for ReactCSSTransitionGroup for `spriteLeft`. |
| spriteRight | `Function` | Displays a sprite in the right of the frame by accepting `require('path/to/image')`. |
| spriteRightEffect | `String` | Uses the value as a class for `spriteRight`. |
| spriteRightTransition | `String` | Uses the value for transition animations for ReactCSSTransitionGroup for `spriteRight`. |
| text | `String` | Presents string in the textbox on bottom of screen. |
| voice | `Function` | Plays an audio file once by accepting `require('path/to/audio')`. |

### Effect Properties
Values for `spriteEffect`, `spriteLeftEffect`, and `spriteRightEffect` include the following:
- `"shake"`
- `"bounce"`
- `"grow"`
- `"grown"`
- `"shrink-back"`
- `"shrink"`
- `"shrunk"`
- `"grow-back"`

### Transition Properties
Values for `spriteTransition`, `spriteLeftTransition`, and `spriteRightTransition` include the following:

- `"from-right-leave-left"`
- `"from-left-leave-right"`
- `"move-right"`
- `"move-left"`
- `"move-right-far"`
- `"move-left-far"`

## `choices.js` Properties
From the root directory, navigate to `./src/story/choices.js`. There should be an array called `choices`. Each index contains an object that contains a single property of `choices`. The `choices` property (different from the `choices` array) accepts a value of an array where each element is an object that represents a single choice. All of the properties of that object follows below:

| Key | Value Type | Necessary | Description |
|:---|:---|:---|:---|
| content | `String` | Yes | Presents the string as a button that user can choose. |
| nextIndex | `Integer` | No | Determines what index will be presented the next time a choice appears to the user. |
| routeBegins | `String` | Yes | Jumps to the index where `routeBegins` is in `story.js` if both properties (one from `choices.js` and one from `story.js`) are the same value. |
| resetStore | `String` | No | If a value is detected (doesn't have to be `"true"`), then choicesStore will be set to a clean object. |
| store | `String` | No | The value becomes a property of `choiceStore` in `App.js` and increments it by one. |



## Streamlining the Writing Process

### Variables
Creating variables for properties that reuse values tend to be more consistent, accurate and faster.
```
const b = "Block";
const bn = require("./sprites/block-neutral.png");
// ...
  {
    speaker: b,
    text: "I like turtles.",
    sprite: bn
  },
  // ...
```

### Setting Future Properties
On the bottom of `story.js`, there are function calls to the function `setFutureProperties()`. The function takes in a key as an argument and sets all the future undefined properties to the last defined property for the argument. Thus, choosing the correct keys your project is important to speeding up the writing process. It is very much a case-by-case type of decision.

For example, the sample site calls `setFutureProperties()` for `speaker` as well as some other properties. It is advantageous to call the function for `speaker` because the story is set up so that a sprite is talking most of the time. In some visual novels, it would be very awkward if a character talks that long. It would be best to remove the function call for `speaker` in that case.

## Creating Choices
When you want the user to make a choice, set `choicesExist: true` in novelFrames.js. The app will go through the array of objects in Choices.js and present the current choice. For example, if it is your third time setting `choicesExist: true`, then the second index in choices will be used.

See the sample site, which aligns with the repository's [story.js](https://github.com/nashkenazy/React-Visual-Novel/blob/master/src/story/story.js) and [choices.js](https://github.com/nashkenazy/React-Visual-Novel/blob/master/src/story/choices.js) files, for a working application of these concepts.

# License

[MIT](./LICENSE)
