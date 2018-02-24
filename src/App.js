// Dependencies
import React, { Component } from "react";
import update from "react-addons-update";
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
    "Long-distance runner": 0
  },
  index: 0,
  choicesExist: false,
  showMenu: true
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
    // Updates game with new index
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
    // Updates game with new index when on a detour path following a choice
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

    this.setState({
      saveOne: JSON.parse(localStorage.getItem("save-one")), //fist save point will appear on load
      saveTwo: JSON.parse(localStorage.getItem("save-two")) //second save point will appear on load
    });
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
      return (
        <RenderFrame
          setNextFrame={this.setNextRouteFrame.bind(this)}
          bg={this.state.routeBG}
          sceneChange={this.state.routeSceneChange}
          sprite={this.state.routeSprite}
          speaker={this.state.routeSpeaker}
          text={this.state.routeText}
        />
      );
    } else {
      return (
        <RenderFrame
          setNextFrame={this.setNextFrame.bind(this)}
          bg={this.state.bg}
          sceneChange={this.state.sceneChange}
          sprite={this.state.sprite}
          speaker={this.state.speaker}
          text={this.state.text}
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
      routeIndex: 0,
      choicesExist: false // Prevents choice menu from running all at once
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

  // First save point from local storage
  saveOne() {
    localStorage.setItem("save-one", JSON.stringify(this.state));
  }

  // Loads saveOne from local storage
  loadOne() {
    this.setState(JSON.parse(localStorage.getItem("save-one")));
  }
  // Second save point from local storage
  saveTwo() {
    localStorage.setItem("save-two", JSON.stringify(this.state));
  }

  // Loads saveTwo from local storage
  loadTwo() {
    this.setState(JSON.parse(localStorage.getItem("save-two")));
  }

  // Menu on bottom of screen
  renderMenuButtons() {
    return (
      <MenuButtons
        saveOne={this.saveOne.bind(this)}
        saveOneIndex={this.state.saveOne}
        loadOne={this.loadOne.bind(this)}
        saveTwo={this.saveTwo.bind(this)}
        saveTwoIndex={this.state.saveTwo}
        loadTwo={this.loadTwo.bind(this)}
        setPreviousFrame={this.setPreviousFrame.bind(this)}
        toggleMenu={this.toggleMenu.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderFrame()}
        {this.state.choicesExist ? this.renderChoiceMenu() : null}
        {this.state.showMenu ? (
          this.renderMenuButtons()
        ) : (
          <div className="menu-buttons hidden">
            <button onClick={this.toggleMenu.bind(this)}>Show Buttons</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
