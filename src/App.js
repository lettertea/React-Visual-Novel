// Dependencies
import React, { Component } from "react";
import update from "react-addons-update";
import Sound from "react-sound";
// API
import novelFrames from "./api/novelFrames";
import routePath from "./api/routePath";
import Choices from "./api/Choices";
// Components
import ChoiceMenu from "./components/ChoiceMenu";
import RenderFrame from "./components/RenderFrame";
import MenuButtons from "./components/MenuButtons";
// css
import "./App.css";

// States that don't need to mount or rely on api data
const initialState = {
  choicesIndex: 0,
  choicesCount: {
    Sprinter: 0,
    "Mid-distance runner": 0,
    "Long-distance": 0
  },
  index: 0,
  choicesExist: false,
  showMenu: true,
  textLogShown: false,
  textBoxShown: true
};

class App extends Component {
  constructor() {
    super(); //constructor init

    this.state = initialState;
  }

  setFrame(index) {
    // Makes sure the user's index is within the novelFrames array
    if (index >= novelFrames.length) {
      index = novelFrames.length - 1;
    } else if (index <= -1) {
      index = 0;
    }
    // Updates novelFrames with new index
    this.setState({
      index: index,
      text: novelFrames[index].text,
      bg: novelFrames[index].bg,
      bgm: novelFrames[index].bgm,
      choicesExist: novelFrames[index].choicesExist,
      speaker: novelFrames[index].speaker,
      sprite: novelFrames[index].sprite,
      voice: novelFrames[index].voice
    });
  }

  setRouteFrame(routeIndex) {
    // Updates 'detour' route path with new index
    this.setState({
      routeIndex: routeIndex,
      routeText: routePath[routeIndex].text,
      routeBG: routePath[routeIndex].bg,
      routeBGM: routePath[routeIndex].bgm,
      routeChoicesExist: routePath[routeIndex].choicesExist,
      routeSpeaker: routePath[routeIndex].speaker,
      routeSprite: routePath[routeIndex].sprite,
      routeVoice: routePath[routeIndex].voice
    });
  }

  setChoiceNumber(choicesIndex) {
    this.setState({
      choicesIndex: choicesIndex,
      question: Choices[choicesIndex].question,
      choiceOptions: Choices[choicesIndex].choices
    });
  }

  componentDidMount() {
    // For main game
    const index = 0;
    this.setFrame(index);
    // For detour path
    const routeIndex = 0;
    this.setRouteFrame(routeIndex);
    // For Choice number
    const choicesIndex = 0;
    this.setChoiceNumber(choicesIndex);
  }

  setPreviousFrame() {
    const index = this.state.index - 1;
    this.setFrame(index);
  }

  setNextFrame() {
    const index = this.state.index + 1;
    this.setFrame(index);
  }

  setNextRouteFrame() {
    const routeIndex = this.state.routeIndex + 1;
    this.setRouteFrame(routeIndex);
  }

  renderFrame() {
    if (
      this.state.choicesCount.Sprinter === 1 &&
      this.state.routeIndex < routePath.length - 1
    ) {
      // For 'routePath.js' choice
      return (
        <RenderFrame
          setNextFrame={this.setNextRouteFrame.bind(this)}
          bg={this.state.routeBG}
          sceneChange={this.state.routeSceneChange}
          sprite={this.state.routeSprite}
          speaker={this.state.routeSpeaker}
          text={this.state.routeText}
          textBoxShown={this.state.textBoxShown}
        />
      );
    } else {
      // Main route: 'novelFrames.js'
      return (
        <RenderFrame
          setNextFrame={this.setNextFrame.bind(this)}
          bg={this.state.bg}
          sceneChange={this.state.sceneChange}
          sprite={this.state.sprite}
          speaker={this.state.speaker}
          text={this.state.text}
          textBoxShown={this.state.textBoxShown}
        />
      );
    }
  }

  setNextChoice() {
    const choicesIndex = this.state.choicesIndex + 1;
    this.setState({
      choicesIndex: choicesIndex,
      choiceOptions: Choices[choicesIndex].choices
    });
  }

  handleChoiceSelected(event) {
    this.setUserChoice(event.currentTarget.name);
    this.setNextFrame();
    this.setState({
      routeIndex: 0
    });
    this.setNextChoice();
  }

  setUserChoice(choice) {
    const updatedChoicesCount = update(this.state.choicesCount, {
      [choice]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState({
      choicesCount: updatedChoicesCount
    });
  }

  renderChoiceMenu() {
    return (
      <ChoiceMenu
        choiceOptions={this.state.choiceOptions}
        onChoiceSelected={this.handleChoiceSelected.bind(this)}
      />
    );
  }

  // Allows users to show or hide menu buttons
  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  toggleTextLog() {
    this.setState(prevState => ({
      textLogShown: !prevState.textLogShown
    }));
  }

  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }

  // Saves and sets current state to local storage
  saveSlot(number) {
    localStorage.setItem(number, JSON.stringify(this.state));
    this.setState(JSON.parse(localStorage.getItem(number)));
  }

  // Loads and sets state from local storage
  loadSlot(number) {
    this.setState(JSON.parse(localStorage.getItem(number)));
  }

  // Menu on bottom of screen
  renderMenuButtons() {
    // Shows menu buttons
    if (this.state.showMenu) {
      return (
        <MenuButtons
          saveSlot={this.saveSlot.bind(this)}
          loadSlot={this.loadSlot.bind(this)}
          toggleMenu={this.toggleMenu.bind(this)}
          toggleTextLog={this.toggleTextLog.bind(this)}
          toggleTextBox={this.toggleTextBox.bind(this)}
          textBoxShown={this.state.textBoxShown}
          textLogShown={this.state.textLogShown}
        />
      );
    } else {
      // Shows "Show Buttons" on hover
      return (
        <div className="menu-buttons hidden">
          <button onClick={this.toggleMenu.bind(this)}>Show Buttons</button>
        </div>
      );
    }
  }

  textLog() {
    let loggedText = [];
    let routeText = [];
    for (var i = 0; i <= this.state.index; i++) {
      loggedText.unshift(
        <div className="text-log">
          <div className="text-log-speaker">{novelFrames[i].speaker}</div>
          {novelFrames[i].text}
        </div>
      );
    }

    if (
      this.state.choicesCount.Sprinter === 1 &&
      this.state.routeIndex < routePath.length - 1
    ) {
      for (let j = 0; j <= this.state.routeIndex; j++) {
        routeText.unshift(
          <div className="text-log">
            <div className="text-log-speaker">{routePath[j].speaker}</div>
            {routePath[j].text}
          </div>
        );
      }
    }

    return (
      <div className="overlay text-log-overlay">
        {routeText}
        {loggedText}
      </div>
    );
  }
  playBGM() {
    return (
      <Sound
        url={this.state.bgm}
        playStatus={Sound.status.PLAYING}
        loop="true"
      />
    );
  }

  render() {
    return (
      <div className="container">
        {this.state.textLogShown ? this.textLog() : null}
        {this.renderFrame()}
        {this.state.choicesExist ? this.renderChoiceMenu() : null}
        {this.renderMenuButtons()}
        {this.playBGM()}
      </div>
    );
  }
}

export default App;
