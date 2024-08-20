import React from 'react'
import Options from './Options'
import { useQuizes } from '../contexts/QuizContext'

export default function Question() {
  const { questions, index } = useQuizes();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question}/>
    </div>
  )
}
