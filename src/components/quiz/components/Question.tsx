import React from 'react'
import styled from 'styled-components'
import { Typography } from '../../Typography'
import { Spacer } from '../../Spacer'
import QuizAnswer from './QuizAnswer'
import { Button } from '../../Button'
import { Flex } from '../../Flex'

const Question: React.FC<{
  question: { question: string; answers: string[]; answer: number }
  onAnswer: (num: number) => void
  onSkip: () => void
}> = React.memo(({ question, onAnswer, onSkip }) => {
  const { question: questionText, answers } = question ?? {}
  return (
    <Flex flexDirection="column">
      <Spacer height={40} />
      <Typography fontSize={20} lineHeight={28} display="block" textAlign={'center'}>
        {questionText}
      </Typography>
      <Spacer height={25} />
      {answers?.map((item, index) => (
        <QuizAnswer
          key={item}
          onClick={() => onAnswer(index)}
          style={
            index === 0
              ? { borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }
              : index === answers.length - 1
              ? { borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }
              : {}
          }
        >
          {item}
        </QuizAnswer>
      ))}
      <Spacer height={12} />
      <Skip
        fontSize={16}
        lineHeight={40}
        display="block"
        color="#606075"
        textAlign="center"
        onClick={() => onSkip()}
      >
        Пропустить вопрос
      </Skip>
    </Flex>
  )
})

const Skip = styled(Typography)`
  cursor: pointer;
  :hover {
    color: ;
  }
`
export default Question
