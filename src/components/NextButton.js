import React from 'react'
import { useQuizes } from '../contexts/QuizContext';

export default function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuizes();
  if (answer === null) return;

  if (index < numQuestions - 1) {
    return (
      <button 
        className="btn btn-ui" 
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    )
  }
}
