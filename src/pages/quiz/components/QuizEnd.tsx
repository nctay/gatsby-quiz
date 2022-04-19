import React from 'react'
import { useName, useScore, useTimer } from '../../../hooks/LSHooks'
import { formatTime } from '../../../utils/formatToTime'
import { Spacer } from '../../../components/Spacer'
import { Typography } from '../../../components/Typography'
import { Button } from '../../../components/Button'
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const QuizEnd: React.FC = () => {
  const [score] = useScore()
  const [timer] = useTimer()
  const [name] = useName()
  return (
    <div>
      <Typography fontSize={14} lineHeight={17} fontWeight={700} display="block" textAlign={'center'}>
        {name}, поздравляем
      </Typography>
      <Spacer height={19} />
      <Typography fontSize={14} lineHeight={17} fontWeight={500} display="block" textAlign={'center'}>
        У тебя:
      </Typography>
      <Spacer height={5} />
      <Typography fontSize={64} lineHeight={77} fontWeight={700} display="block" textAlign={'center'}>
        {score}
      </Typography>
      <Spacer height={5} />
      <Typography fontSize={14} lineHeight={17} fontWeight={500} display="block" textAlign={'center'}>
        Баллов
      </Typography>
      <Spacer height={19} />
      <Typography fontSize={14} lineHeight={17} fontWeight={500} display="block" textAlign={'center'}>
        Твое время
      </Typography>
      <Spacer height={5} />
      <Typography fontSize={64} lineHeight={77} fontWeight={700} display="block" textAlign={'center'}>
        {formatTime(timer as number)}
      </Typography>
      <Spacer height={5} />
      <Typography fontSize={10} lineHeight={12} fontWeight={500} display="block" textAlign={'center'}>
        Первые 5 мест мы наградим на подведении итогов конференции, не пропусти!
      </Typography>
      <Spacer height={24} />
      <AniLink fade to="/#scores">
        <Button>К результатам</Button>
      </AniLink>
      <Spacer height={29} />
      <Typography fontSize={14} lineHeight={17} fontWeight={500} display="block" textAlign={'center'}>
        А если хочешь попасть в нашу крутую команду, то заполняй анкету ниже
      </Typography>
      <Spacer height={40} />
      <Button> Стать частью команды</Button>
    </div>
  )
}

export default QuizEnd
