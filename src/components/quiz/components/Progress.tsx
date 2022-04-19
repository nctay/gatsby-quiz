import React from 'react'

import { Line } from 'rc-progress'
import { useCurrQuestion } from '../../../hooks/LSHooks'
import { Flex } from '../../Flex'
import { Typography } from '../../Typography'
import Timer from './Timer'
import { Spacer } from '../../Spacer'
export const Progress: React.FC<{ questionsLength?: number; currQuestion?: number }> = ({
  questionsLength,
  currQuestion
}) => {
  return (
    <Flex width="100%" flexDirection="column">
      <Flex justifyContent="space-between">
        <Typography
          fontSize={13}
          lineHeight={18}
          display="block"
          color="#606075"
        >{`${currQuestion}/${questionsLength}`}</Typography>
        <Timer />
      </Flex>
      <Spacer height={7} />
      <Line
        // @ts-ignore
        percent={(currQuestion / questionsLength) * 100}
        strokeWidth={1}
        trailWidth={1}
        strokeColor="#113EF5"
        trailColor="#FFFFFF"
      />
    </Flex>
  )
}
