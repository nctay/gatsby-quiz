import { useRef, useEffect, useCallback } from 'react'

export function usePrevious<T>(value: T): [T, (value: T) => void] {
  const previousRef = useRef<T>(value)
  const implicitlyUpdateValue = useCallback((implicitValue: T) => {
    previousRef.current = implicitValue
  }, [])
  useEffect(() => {
    previousRef.current = value
  })
  return [previousRef.current, implicitlyUpdateValue]
}
