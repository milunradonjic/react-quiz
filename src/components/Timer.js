import React, { useEffect } from 'react'
import { useQuizes } from '../contexts/QuizContext';

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuizes();
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(function() {
    const id = setInterval(() => {
      dispatch({ type: "tick" })
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch])

  return (
    <div className="timer">{String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}</div>
  )
}
