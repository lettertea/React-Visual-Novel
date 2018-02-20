import React, { Component } from "react";
import update from "react-addons-update";
import quizQuestions from "./api/quizQuestions";
import routePath from "./api/routePath";
import Quiz from "./components/Quiz";
import RenderFrame from "./components/RenderFrame";
import Choices from "./api/Choices";
import MenuButtons from "./components/MenuButtons";
import "./App.css";

const initialState = {
  counter: 0,
  answersCount: {
    Sprinter: 0,
    "Mid-distance runner": 0,
    "Long-distance runner": 0
  },
  index: 0,
  choicesExist: false,
  showMenu: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
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
      choicesExist: quizQuestions[index].choicesExist,
      speaker: quizQuestions[index].speaker,
      sprite: quizQuestions[index].sprite,
      voice: quizQuestions[index].voice
    });
  }

  setRouteFrame(routeIndex) {
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

  componentWillMount() {
    const index = 0;
    this.setFrame(index);
    const routeIndex = 0;
    this.setRouteFrame(routeIndex);

    this.setState({
      saveOne: JSON.parse(localStorage.getItem("saved-index")),
      question: Choices[0].question,
      answerOptions: Choices[0].answers
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
    if (this.state.answersCount.Sprinter === 1) {
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

  handleAnswerSelected(event) {
    this.state.choicesExist;
    this.setUserAnswer(event.currentTarget.name);
    this.setNextFrame();
    this.setState({
      routeIndex: 0,
      choicesExist: false
    });
    this.setNextQuestion();
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: Choices[counter].question,
      answerOptions: Choices[counter].answers,
      answer: ""
    });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }
  saveOne() {
    localStorage.setItem("saved-index", this.state.index);
  }
  loadOne() {
    const index = JSON.parse(localStorage.getItem("saved-index"));
    this.setFrame(index);
  }

  renderMenuButtons() {
    return (
      <MenuButtons
        saveOne={this.saveOne.bind(this)}
        saveOneIndex={this.state.saveOne}
        loadOne={this.loadOne.bind(this)}
        setPreviousFrame={this.setPreviousFrame.bind(this)}
        toggleMenu={this.toggleMenu.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderFrame()}
        {this.state.choicesExist ? this.renderQuiz() : null}
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
