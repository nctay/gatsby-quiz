import React, { useEffect } from 'react'
import { useStartTime, useTimer } from '../../../hooks/LSHooks'
import { formatTime } from '../../../utils/formatToTime'
import { Typography } from '../../Typography'

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
    <Typography fontSize={13} lineHeight={18} display="block" color="#606075">
      {formatTime(timer as number)}
    </Typography>
  )
}

export default Timer
