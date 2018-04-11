// Dependencies
import React, { Component } from "react";
import update from "immutability-helper";
import Sound from "react-sound";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// API
import novelFrames from "./api/novelFrames";
import Choices from "./api/Choices";
// Components
import TitleScreen from "./components/TitleScreen";
import ChoiceMenu from "./components/ChoiceMenu";
import RenderFrame from "./components/RenderFrame";
import MenuButtons from "./components/MenuButtons";
import SaveLoadMenu from "./components/SaveLoadMenu";
// CSS
import "./styles/App.css";
import "./styles/TitleScreen.css";
import "./styles/saveLoadMenu.css";

class App extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      testRoutesCompleted: false,
      choicesCount: {
        throwRock: 0,
        noRock: 0
      },
      index: 0,
      buttonsDeleted: false,
      choicesExist: false,
      titleScreenShown: true,
      frameIsRendering: false,
      menuButtonsShown: true,
      backlogShown: false,
      textBoxShown: true,
      saveMenuShown: false,
      loadMenuShown: false,
      isSkipping: false,
      indexHistory: []
    };
  }

  /* ============================================================================================
       Diverges to different index depending on user's choice. Important function for VN writers
    ============================================================================================ */

  setFrameFromChoice(choice) {
    const updatedChoicesCount = update(this.state.choicesCount, {
      [choice]: { $apply: currentValue => currentValue + 1 }
    });
    // Routes depending on choice
    if (updatedChoicesCount.throwRock === 1) {
      this.setFrame(10);
    } else if (updatedChoicesCount.noRock === 1) {
      this.setFrame(27);
    }
    this.setState({
      choicesCount: updatedChoicesCount
    });
  }

  setNextFrame() {
    // Resume to title screen after testRoutes detours
    if (novelFrames[this.state.index].testRoutesCompleted) {
      this.setState({
        titleScreenShown: true,
        frameIsRendering: false,
        choicesCount: {
          throwRock: 0,
          noRock: 0
        }
      });
    } else {
      this.setFrame(this.state.index + 1); // Normal functionality; goes to the next frame via index
    }
  }

  /* ===========================================================
       The rest are functionalities. VN writers can ignore rest
    =========================================================== */

  setFrame(index) {
    // Makes sure the index is within the novelFrames array
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
      sceneChange: novelFrames[index].sceneChange,
      sound: novelFrames[index].sound,
      speaker: novelFrames[index].speaker,
      sprite: novelFrames[index].sprite,
      voice: novelFrames[index].voice
    });
  }

  // For developers to see what index they're editing. To request, set logIndex to true in novelFrames.js.
  componentDidMount() {
    for (var i = 0; i < novelFrames.length; i++) {
      if (novelFrames[i].logIndex) {
        console.log([i]);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Update indexHistory if index changed
    if (prevState.index !== this.state.index) {
      this.setState({
        indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  renderFrame() {
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

  setNextChoice() {
    let choicesIndex = this.state.choicesIndex + 1;

    // Makes sure the index is within the Choices array
    if (choicesIndex >= Choices.length) {
      choicesIndex = Choices.length - 1;
    } else if (choicesIndex <= -1) {
      choicesIndex = 0;
    }

    this.setState({
      choicesIndex: choicesIndex,
      choiceOptions: Choices[choicesIndex].choices
    });
  }

  handleChoiceSelected(event) {
    this.stopSkip();
    this.setFrameFromChoice(event.currentTarget.name);
    this.setNextChoice();
  }

  renderChoiceMenu() {
    return (
      <ChoiceMenu
        choiceOptions={this.state.choiceOptions}
        onChoiceSelected={this.handleChoiceSelected.bind(this)}
      />
    );
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuButtonsShown: !prevState.menuButtonsShown
    }));
  }

  toggleBacklog() {
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    this.setState(prevState => ({
      backlogShown: !prevState.backlogShown
    }));
  }

  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }

  toggleSaveMenu() {
    if (this.state.loadMenuShown) {
      this.setState({ loadMenuShown: false });
    }
    if (this.state.backlogShown) {
      this.setState({ backlogShown: false });
    }
    this.setState(prevState => ({
      saveMenuShown: !prevState.saveMenuShown
    }));
  }

  toggleLoadMenu() {
    if (this.state.saveMenuShown) {
      this.setState({ saveMenuShown: false });
    }
    if (this.state.backlogShown) {
      this.setState({ backlogShown: false });
    }
    this.setState(prevState => ({
      loadMenuShown: !prevState.loadMenuShown
    }));
  }

  startSkip() {
    const intervalTime = prompt(
      "How many milliseconds per frame would you like?",
      "75"
    );
    if (intervalTime > 0) {
      this.setState({
        intervalTime: intervalTime,
        isSkipping: true
      });
    }
  }

  stopSkip() {
    this.setState({
      isSkipping: false
    });
  }

  skipText() {
    if (
      this.state.isSkipping &&
      !this.state.choicesExist &&
      !this.state.loadMenuShown &&
      !this.state.saveMenuShown &&
      !this.state.titleScreenShown &&
      !this.state.backlogShown
    ) {
      clearInterval(this.textSkipper);
      this.textSkipper = setInterval(
        this.setNextFrame.bind(this),
        this.state.intervalTime
      );
    } else {
      clearInterval(this.textSkipper);
    }
  }

  // Saves and sets current state to local storage
  saveSlot(number) {
    localStorage.setItem("time" + number, new Date().toString()); // saves the current time to the save slot
    localStorage.setItem(number, JSON.stringify(this.state));
    this.setState(JSON.parse(localStorage.getItem(number)));
  }

  // Loads and sets state from local storage
  loadSlot(number) {
    this.setState(JSON.parse(localStorage.getItem(number)));
    this.setState({
      saveMenuShown: false
    }); // save menu to false and not load because save is true when saving
  }

  // "Begin" Button for title page.
  beginStory() {
    this.setState({
      isSkipping: false,
      titleScreenShown: false,
      frameIsRendering: true
    });
    this.setFrame(0);
    this.setState({
      choicesIndex: 0,
      choiceOptions: Choices[0].choices
    });
  }

  titleScreen() {
    return (
      <TitleScreen
        beginStory={this.beginStory.bind(this)}
        toggleLoadMenu={this.toggleLoadMenu.bind(this)}
      />
    );
  }

  saveMenu() {
    return (
      <SaveLoadMenu
        currentTime={this.state.currentTime}
        menuType="Save Menu"
        executeSlot={this.saveSlot.bind(this)}
        toggleMenu={this.toggleSaveMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
      />
    );
  }

  loadMenu() {
    return (
      <SaveLoadMenu
        currentTime={this.state.currentTime}
        menuType="Load Menu"
        executeSlot={this.loadSlot.bind(this)}
        toggleMenu={this.toggleLoadMenu.bind(this)}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
      />
    );
  }

  // the GUI interface on the bottom
  renderMenuButtons() {
    if (!this.state.buttonsDeleted) {
      return (
        <MenuButtons
          deleteButtons={() => this.setState({ buttonsDeleted: true })}
          menuButtonsShown={this.state.menuButtonsShown}
          toggleSaveMenu={this.toggleSaveMenu.bind(this)}
          toggleLoadMenu={this.toggleLoadMenu.bind(this)}
          saveSlot={this.saveSlot.bind(this)}
          loadSlot={this.loadSlot.bind(this)}
          saveMenuShown={this.state.saveMenuShown}
          loadMenuShown={this.state.loadMenuShown}
          toggleMenu={this.toggleMenu.bind(this)}
          toggleBacklog={this.toggleBacklog.bind(this)}
          toggleTextBox={this.toggleTextBox.bind(this)}
          startSkip={this.startSkip.bind(this)}
          stopSkip={this.stopSkip.bind(this)}
          isSkipping={this.state.isSkipping}
          textBoxShown={this.state.textBoxShown}
          backlogShown={this.state.backlogShown}
        />
      );
    }
  }

  backlog() {
    let loggedText = [];
    for (var i = 0; i < this.state.indexHistory.length; i++) {
      loggedText.unshift(
        <div className="backlog" key={loggedText.toString()}>
          <div className="backlog-speaker">
            {novelFrames[this.state.indexHistory[i]].speaker}
          </div>
          {novelFrames[this.state.indexHistory[i]].text}
        </div>
      );
    }

    return <div className="overlay backlog-overlay">{loggedText}</div>;
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
  playSound() {
    return <Sound url={this.state.sound} playStatus={Sound.status.PLAYING} />;
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          component="div"
          className="container"
          transitionName="menu"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.titleScreenShown ? this.titleScreen() : null}
          {this.state.frameIsRendering ? this.renderFrame() : null}
          {/* GUI menu buttons */}
          {this.state.saveMenuShown ? this.saveMenu() : null}
          {this.state.loadMenuShown ? this.loadMenu() : null}
          {this.state.backlogShown ? this.backlog() : null}
          {this.skipText()}
          {this.state.frameIsRendering ? this.renderFrame() : null}
          {this.state.choicesExist ? this.renderChoiceMenu() : null}
        </ReactCSSTransitionGroup>
        {!this.state.titleScreenShown ? this.renderMenuButtons() : null}
        {this.playBGM()}
        {this.playSound()}
      </div>
    );
  }
}

export default App;
