import React, { useEffect, useState } from 'react'

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
      : false

  useEffect(() => {
    if (observer) {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return isIntersecting
}
