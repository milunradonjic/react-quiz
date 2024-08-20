import React from 'react'
import { useQuizes } from '../contexts/QuizContext'

export default function RestartButton() {
  const {dispatch} = useQuizes();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart quiz
    </button>
  )
}
