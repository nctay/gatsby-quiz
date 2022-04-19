import React, { useCallback, useMemo } from 'react'
import { quizList } from '../../../mocks/quiz'
import Question from './Question'
import { useCurrQuestion, useQuizNum, useScore } from '../../../hooks/LSHooks'
import { Spacer } from '../../../components/Spacer'
import { Typography } from '../../../components/Typography'

const Quiz: React.FC<{ onEnd: () => void }> = ({ onEnd }) => {
  const [quizNumber, setQuizNumber] = useQuizNum()
  const [score, setScore] = useScore()
  const [currQuestion, setCurrQuestion] = useCurrQuestion()

  const questions = useMemo(() => quizList[quizNumber as number], [])
  const questionsLength = questions?.length

  const onNextQuestion = useCallback(() => {
    setCurrQuestion(currQuestion ? currQuestion + 1 : 1)
  }, [currQuestion, setCurrQuestion])

  const onAnswer = (answerNum: number) => {
    const isCorrect = questions[currQuestion as number].answer === answerNum
    if (isCorrect) {
      setScore(score ? score + 1 : 1)
    }
    setTimeout(() => {
      if (questionsLength - 1 === currQuestion) {
        onEnd()
        return
      }
      onNextQuestion()
    }, 200)
  }

  return (
    <div>
      <Spacer height={15} />
      <Spacer height={11} />
      <Typography fontSize={12} lineHeight={15} fontWeight={700} display="block" textAlign="center">
        Вопрос {currQuestion ? currQuestion + 1 : 1} из {questionsLength}
      </Typography>
      <Spacer height={14} />
      <Question question={questions[currQuestion as number]} onAnswer={onAnswer} onSkip={onNextQuestion} />
      <Spacer height={60} />
    </div>
  )
}

export default Quiz
