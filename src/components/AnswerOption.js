import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  return (
    <input
      type="button"
      name={props.answerType}
      checked={props.answerType === props.answer}
      id={props.answerType}
      value={props.answerContent}
      disabled={props.answer}
      onClick={props.onAnswerSelected}
    />
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
