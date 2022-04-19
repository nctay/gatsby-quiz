import React, { useEffect } from 'react'
import { useStartTime, useTimer } from '../../../hooks/LSHooks'
import { formatTime } from '../../../utils/formatToTime'
import { Typography } from '../../../components/Typography'

const Timer = () => {
  const [timer, setTimer] = useTimer()
  const [startTime] = useStartTime()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(new Date().getTime() - (startTime ?? 0))
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <Typography fontSize={12} lineHeight={15} fontWeight={700} textAlign="right" display="block">
      {formatTime(timer as number)}
    </Typography>
  )
}

export default Timer
