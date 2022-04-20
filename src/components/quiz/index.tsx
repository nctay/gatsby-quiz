import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import QuizStart from './components/QuizStart'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Quiz from './components/Quiz'
import QuizEnd from './components/QuizEnd'
import { Spacer } from '../Spacer'
import { Typography } from '../Typography'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex } from '../Flex'
import { useCallback } from 'react'
import { useQuizStatus } from '../../hooks/LSHooks'

export const QuizBlock: React.FC<{
  shown?: boolean
  onGoToJoinForm: () => void
  onGoToScoresForm: () => void
  onCloseQuiz: () => void
}> = ({ shown, onGoToJoinForm, onGoToScoresForm, onCloseQuiz }) => {
  const [quizStatus, setQuizStatus] = useQuizStatus()

  const onStart = useCallback(() => {
    setQuizStatus('going')
  }, [])

  const onEnd = useCallback(() => {
    setQuizStatus('finished')
  }, [])

  return (
    <Flex flexDirection="column" width="100%">
      <Background shown={shown} />
      <Flex flexDirection="column" height="100%" width="100%">
        <Wrapper shown={shown}>
          <CloseIcon width="100%" onClick={onCloseQuiz}>
            <StaticImage src={'../../images/close.svg'} alt={'x'} height={18} width={18} />
          </CloseIcon>
          {/*<Spacer height={20} width="100%" />*/}
          <Typography fontSize={38} lineHeight={38} fontWeight={700} display="block" textAlign="center">
            Innoquiz
          </Typography>
          {quizStatus === 'start' && <QuizStart onStart={onStart} />}
          {quizStatus === 'going' && <Quiz onEnd={onEnd} />}
          {quizStatus === 'finished' && (
            <QuizEnd onGoToJoinForm={onGoToJoinForm} onGoToScoresForm={onGoToScoresForm} />
          )}
        </Wrapper>
      </Flex>
    </Flex>
  )
}

const CloseIcon = styled(Flex)`
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 20px;
  width: 18px;
  @media (min-width: 800px) {
    right: 30px;
    top: 30px;
  }
`

const Background = styled.div<{ shown?: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000;
  opacity: ${({ shown }) => (shown ? '0.2' : 0)};
  transition: opacity 0.25s ease-in-out;
  z-index: 1;
  backdrop-filter: blur(4px);
  pointer-events: ${({ shown }) => (shown ? 'all' : 'none')};
`
const Wrapper = styled.div<{ shown?: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: ${({ shown }) => (shown ? 0 : '150vh')};
  left: 0;
  background: #eeeef1;
  transition: top 0.25s ease-in-out;
  padding: 20px;
  z-index: 2;
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ shown }) => (shown ? 1 : 0)};
    pointer-events: ${({ shown }) => (shown ? 'all' : 'none')};
    transition: opacity 0.25s ease-in-out;
    width: 587px;
    min-height: 552px;
    border-radius: 30px;
    height: auto;
    padding: 40px 126px;

    .select-search:not(.select-search--multiple) .select-search__select {
      position: absolute;
      z-index: 100;
      bottom: 50px;
      top: initial;
      right: 0;
      left: 0;
      border-radius: 10px;
      overflow: auto;
    }
  }
`
