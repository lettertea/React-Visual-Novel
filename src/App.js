import React from "react";
import "./App.css";
import Sound from "react-sound";
import quizQuestions from "./api/quizQuestions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import FrameRender from "./components/FrameRender";
import ChoicesMenu from "./components/ChoicesMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      bg: "",
      bgm: "",
      choicesMenu: false,
      sceneChange: false,
      speaker: "",
      sprite: "",
      text: "",
      voice: ""
    };
  }

  setFrame(index) {
    if (index >= quizQuestions.length) {
      index = quizQuestions.length - 1;
    } else if (index <= -1) {
      index = 0;
    }
    this.setState({
      index: index,
      text: quizQuestions[index].text,
      bg: quizQuestions[index].bg,
      bgm: quizQuestions[index].bgm,
      choices: quizQuestions[index].choices,
      choicesMenu: quizQuestions[index].choicesMenu,
      sceneChange: quizQuestions[index].sceneChange,
      speaker: quizQuestions[index].speaker,
      sprite: quizQuestions[index].sprite,
      voice: quizQuestions[index].voice
    });
  }

  componentDidMount() {
    const index = JSON.parse(localStorage.getItem("saved-index"));
    this.setFrame(index);
  }

  setPreviousFrame() {
    const index = this.state.index - 1;
    this.setFrame(index);
  }

  setNextFrame() {
    const index = this.state.index + 1;
    this.setFrame(index);
  }

  frameRender() {
    return (
      <FrameRender
        bg={this.state.bg}
        sceneChange={this.state.sceneChange}
        sprite={this.state.sprite}
        speaker={this.state.speaker}
        text={this.state.text}
      />
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

  choicesMenu() {
    return <ChoicesMenu choices={this.state.choices} />;
  }

  render() {
    return (
      <div onClick={this.setNextFrame.bind(this)} className="container">
        {this.frameRender()}
        {this.state.choicesMenu ? this.choicesMenu() : null}
        {this.playBGM()}
      </div>
    );
  }
}
export default App;
