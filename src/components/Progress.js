import React from 'react'
import { useQuizes } from '../contexts/QuizContext';

export default function Progress() {
  const { index, points, maxPoints, answer, numQuestions} = useQuizes();
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPoints}</p>
    </header>
  )
}
