import * as React from 'react'
import { Link } from 'gatsby'
import QuizStart from './components/QuizStart'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Quiz from './components/Quiz'
import QuizEnd from './components/QuizEnd'
import { Spacer } from '../../components/Spacer'

const QuizPage = () => {
  const [quizStatus, setQuizStatus] = useLocalStorage<'start' | 'going' | 'finished'>('quiz_status', 'start')

  const onStart = () => {
    setQuizStatus('going')
  }
  const onEnd = () => {
    setQuizStatus('finished')
  }
  return (
    <>
      <Spacer height={32} />
      {quizStatus === 'start' && <QuizStart onStart={onStart} />}
      {quizStatus === 'going' && <Quiz onEnd={onEnd} />}
      {quizStatus === 'finished' && <QuizEnd />}
      <Spacer height={32} />
    </>
  )
}

export default QuizPage
