import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  useEmail,
  useName,
  useQuestionsLength,
  useQuizDataSent,
  useQuizNum,
  useScore,
  useTimer,
  useWork
} from '../../../hooks/LSHooks'
import { formatTime } from '../../../utils/formatToTime'
import { Spacer } from '../../Spacer'
import { Typography } from '../../Typography'
import { Button } from '../../Button'
import { Flex } from '../../Flex'
import { Circle } from 'rc-progress'
import useAxios from 'axios-hooks'

const Progress = styled(Circle)`
  height: 145px;
  width: 145px;
  position: absolute;
  top: 0;
  left: 0;
`
const ProgressWrapper = styled.div`
  position: relative;
  height: 145px;
  width: 145px;
`
const Score = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
`
const QuizEnd: React.FC<{ onGoToJoinForm: () => void; onGoToScoresForm: () => void }> = ({
  onGoToJoinForm,
  onGoToScoresForm
}) => {
  const [score] = useScore()
  const [timer] = useTimer()
  const [name] = useName()
  const [email] = useEmail()
  const [work] = useWork()
  const [quizNum] = useQuizNum()
  const [questionsLength] = useQuestionsLength()
  const [quizDataSent, setQuizDataSent] = useQuizDataSent()

  const [{ data: postData, loading: postLoading, error: postError, response }, executePost] = useAxios(
    {
      url: 'https://reqres.in/api/users/1',
      method: 'POST'
    },
    { manual: true }
  )
  useEffect(() => {
    if (!quizDataSent) {
      setQuizDataSent(true)
      executePost({
        data: {
          name,
          email,
          work,
          answers: score,
          questionList: quizNum,
          time: timer
        }
      })
    }
  }, [])

  return (
    <Flex flexDirection="column" justifyContent="space-between" alignItems="center" flex="1 1 0" width="100%">
      <Flex flexDirection="column" alignItems="center" width="100%">
        <Spacer height={20} width="100%" />
        <Typography fontSize={16} lineHeight={22} display="block" textAlign={'center'}>
          {name}, поздравляем!
        </Typography>
        <Spacer height={4} />
        <Typography fontSize={16} lineHeight={22} display="block" textAlign={'center'}>
          Ты набрал:
        </Typography>
        <Spacer height={30} />
        <ProgressWrapper>
          <Progress
            // @ts-ignore
            percent={(score / questionsLength) * 100}
            strokeWidth={4}
            trailWidth={4}
            strokeColor="#113EF5"
            trailColor="#FFFFFF"
          />
          <Score>
            <Typography
              lineHeight={77}
              fontSize={64}
              fontWeight={700}
              display="block"
              textAlign="center"
              color="#113EF5"
            >
              {score}
            </Typography>
            <Typography lineHeight={13} fontSize={18} display="block" textAlign="center" color="#113EF5">
              баллов
            </Typography>
          </Score>
        </ProgressWrapper>
        <Spacer height={30} />
        <Typography fontSize={13} lineHeight={18} color="#606075" display="block" textAlign="center">
          Время прохождения: {formatTime(timer as number)}
        </Typography>
        <Spacer height={25} />
        <Typography fontSize={13} lineHeight={18} color="#606075" display="block" textAlign="center">
          Первые 5 мест мы наградим на подведении итогов конференции.Не пропусти!
        </Typography>
        <Spacer height={25} />
        <Typography
          onClick={onGoToScoresForm}
          fontSize={13}
          lineHeight={18}
          color="#606075"
          display="block"
          textAlign="center"
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          Посмотреть результаты
        </Typography>
        <Spacer height={20} width="100%" />
      </Flex>
      <Flex flexDirection="column" width="100%">
        <Typography fontSize={16} lineHeight={22} display="block" textAlign="center">
          А если хочешь попасть в нашу крутую команду, то заполняй анкету
        </Typography>
        <Spacer height={15} />
        <Button onClick={onGoToJoinForm} style={{ width: '100%' }}>
          Стать частью команды
        </Button>
        <Spacer height={30} />
      </Flex>
    </Flex>
  )
}

export default QuizEnd
