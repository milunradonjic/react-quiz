import React from 'react'
import { useQuizes } from '../contexts/QuizContext';

export default function Options() {
  const { questions, index, answer, dispatch } = useQuizes();
  const question = questions.at(index);
  const hasAnswered = answer !== null;
  return (
    <div className="options">
        {question.options.map((option, index) => (
          <button 
            className={
              `btn btn-option 
              ${index === answer ? "answer" : ""} 
              ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`
            } 
            key={index} 
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}>
            {option}
          </button>
        ))}
      </div>
  )
}
