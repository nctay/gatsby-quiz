export const formatTime = (seconds: number): string => {
  // 2- Extract hours:
  if (!seconds) {
    return '00:00'
  }
  const hours = parseInt(String(seconds / 3600)) // 3,600 seconds in 1 hour
  seconds = seconds % 3600 // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = parseInt(String(seconds / 60)) + hours * 60 // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  seconds = Math.floor(seconds % 60)
  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
