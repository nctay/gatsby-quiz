import React, { useCallback, useMemo } from 'react'
import { quizList } from '../../../mocks/quiz'
import Question from './Question'
import { useCurrQuestion, useQuestionsLength, useQuizNum, useScore } from '../../../hooks/LSHooks'
import { Spacer } from '../../Spacer'
import { Progress } from './Progress'

const Quiz: React.FC<{ onEnd: () => void }> = ({ onEnd }) => {
  const [quizNumber] = useQuizNum()
  const [score, setScore] = useScore()
  const [currQuestion, setCurrQuestion] = useCurrQuestion()
  const questions = useMemo(() => quizList[quizNumber as number], [])
  const [questionsLength] = useQuestionsLength(questions?.length)

  const onNextQuestion = useCallback(() => {
    setTimeout(() => setCurrQuestion(currQuestion ? currQuestion + 1 : 1), 100)
  }, [currQuestion, setCurrQuestion])

  const onAnswer = (answerNum: number) => {
    const isCorrect = questions[currQuestion as number].answer === answerNum
    if (isCorrect) {
      setScore(score ? score + 1 : 1)
    }
    setTimeout(() => {
      if ((questionsLength as number) - 1 === currQuestion) {
        onEnd()
        return
      }
      onNextQuestion()
    }, 100)
  }

  return (
    <div>
      <Spacer height={15} />
      <Spacer height={11} />
      <Progress questionsLength={questionsLength} currQuestion={currQuestion} />
      <Spacer height={14} />
      <Question question={questions[currQuestion as number]} onAnswer={onAnswer} onSkip={onNextQuestion} />
      <Spacer height={60} />
    </div>
  )
}

export default Quiz
