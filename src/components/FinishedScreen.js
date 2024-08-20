import React from 'react'
import { useQuizes } from '../contexts/QuizContext';

export default function FinishedScreen() {
  const { points, highscore, maxPoints } = useQuizes();

  const percentage = (points / maxPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🏅";
  else if (percentage >= 80) emoji = "🥳";
  else if (percentage >= 50) emoji = "😊";
  else if (percentage > 0) emoji = "🤔";
  else emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  )
}
