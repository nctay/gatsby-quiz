import React from 'react'
import { Typography } from '../../../components/Typography'
import { Spacer } from '../../../components/Spacer'
import QuizAnswer from './QuizAnswer'
import { Button } from '../../../components/Button'

const Question: React.FC<{
  question: { question: string; answers: string[]; answer: number }
  onAnswer: (num: number) => void
  onSkip: () => void
}> = React.memo(({ question, onAnswer, onSkip }) => {
  const { question: questionText, answers } = question ?? {}
  return (
    <div>
      <Typography fontSize={14} lineHeight={17} display="block" textAlign={'center'}>
        {questionText}
      </Typography>
      <Spacer height={25} />
      {answers?.map((item, index) => (
        <QuizAnswer key={item} onClick={() => onAnswer(index)}>
          {item}
        </QuizAnswer>
      ))}
      <Spacer height={24} />
      <Button onClick={() => onSkip()}>Пропустить вопрос</Button>
    </div>
  )
})

export default Question
