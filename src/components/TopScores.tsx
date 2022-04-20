import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'
import { Spacer } from './Spacer'
import { Flex } from './Flex'
import { Hide } from './Hide'
import useAxios from 'axios-hooks'

const Row = styled(Flex)`
  height: 0.42rem;
  width: 100%;
  border-bottom: 0.01rem solid #d6d6dc;
`

const Participant = styled(Flex)`
  flex: 1 1 0;
  align-items: center;
`
const Score = styled(Flex)`
  align-items: center;
  width: 0.6rem;
`
const Time = styled(Flex)`
  align-items: center;
  width: 0.58rem;
`

const Badge = styled.div<{ borderColor: string; backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  margin-right: 0.1rem;
  font-weight: 700;
  font-size: 0.1rem;
  line-height: 0.1rem;
  text-align: center;
  letter-spacing: -0.02em;
  border: 1px solid ${({ borderColor }) => borderColor};
  background: ${({ backgroundColor }) => backgroundColor};
`

const ParticipantRow: React.FC<{ data: { name: string; points: number; time: string }; index: number }> = ({
  data,
  index
}) => {
  const badgeBorderColor = index === 0 ? '#D8AF00' : index === 1 || index === 2 ? '#929292' : '#D6D6DC'
  const badgeBackgroundColor =
    index === 0 ? '#D8AF00' : index === 1 || index === 2 ? '#929292' : 'transparent'
  return (
    <Row>
      <Participant>
        <Badge borderColor={badgeBorderColor} backgroundColor={badgeBackgroundColor}>
          {index + 1}
        </Badge>
        <Typography display="block" fontSize={13} lineHeight={18} fontWeight={700}>
          {data?.name}
        </Typography>
      </Participant>
      <Score>
        <Typography display="block" fontSize={13} lineHeight={18}>
          {data?.points}
        </Typography>
      </Score>
      <Time>
        <Typography display="block" fontSize={13} lineHeight={18}>
          {data?.time}
        </Typography>
      </Time>
    </Row>
  )
}

const LoadMore = styled.button`
  border: 1px solid #113ef5;
  box-sizing: border-box;
  border-radius: 60px;
  background: transparent;
  color: #113ef5;
  line-height: 20px;
  font-size: 16px;
  padding: 14px 25px;
`

const mockScores = new Array(25).fill({
  name: 'Оппапапапп Ghbdfnt',
  points: 10,
  time: '00:10:00'
})

export const TopScores = () => {
  const [isHiding, setIsHiding] = useState(true)
  const [{ data: scores, loading: scoresLoading }] = useAxios({
    url: 'https://reqres.in/api/users/1',
    method: 'GET'
  })
  return scores && !scoresLoading ? (
    <Flex flexDirection="column" id="scores" width="100%" alignItems="center">
      <Typography fontSize={28} lineHeight={30} fontWeight={700} display="block" textAlign="center">
        Турнирная таблица
      </Typography>
      <Spacer height={20} width="100%" />
      <Row>
        <Participant>
          <Typography display="block" fontSize={12} lineHeight={18} color="#606075">
            УЧАСТНИК
          </Typography>
        </Participant>
        <Score>
          <Typography display="block" fontSize={12} lineHeight={18} color="#606075">
            БАЛЛЫ
          </Typography>
        </Score>
        <Time>
          <Typography display="block" fontSize={12} lineHeight={18} color="#606075">
            ВРЕМЯ
          </Typography>
        </Time>
      </Row>
      {mockScores.slice(0, 10).map((item: { name: string; points: number; time: string }, index: number) => {
        return <ParticipantRow data={item} index={index} />
      })}
      {mockScores.length > 10 && (
        <>
          <Hide isHiding={!isHiding}>
            <Flex flexDirection="column" alignItems="center">
              <Spacer height={20} width="100%" />
              <LoadMore onClick={() => setIsHiding(false)}>Загрузить ещё результаты</LoadMore>
            </Flex>
          </Hide>
          <Hide isHiding={isHiding}>
            {mockScores
              .slice(10, 25)
              .map((item: { name: string; points: number; time: string }, index: number) => {
                return <ParticipantRow data={item} index={index + 10} />
              })}
          </Hide>
        </>
      )}
    </Flex>
  ) : null
}
