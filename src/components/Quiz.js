import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import AnswerOption from "../components/AnswerOption";
import PropTypes from "prop-types";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="choice-buttons">
      {props.answerOptions.map(renderAnswerOptions)}
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
