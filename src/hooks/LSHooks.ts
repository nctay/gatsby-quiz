import { useLocalStorage, useLocalStorageReturn } from './useLocalStorage'

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const useName = (): useLocalStorageReturn<string> => {
  return useLocalStorage('_token', '')
}

export const useEmail = (): useLocalStorageReturn<string> => {
  return useLocalStorage('_id', '')
}

export const useWork = (): useLocalStorageReturn<string> => {
  return useLocalStorage('_ip', '')
}
export const useQuizNum = (): useLocalStorageReturn<number> => {
  return useLocalStorage('_args', randomIntFromInterval(0, 2))
}

export const useScore = (): useLocalStorageReturn<number> => {
  return useLocalStorage('_const', 0)
}

export const useCurrQuestion = (): useLocalStorageReturn<number> => {
  return useLocalStorage('_link', 0)
}

export const useQuestionsLength = (initialValue?: number): useLocalStorageReturn<number> => {
  return useLocalStorage('_nav', initialValue)
}
export const useTimer = (): useLocalStorageReturn<number> => {
  return useLocalStorage('_idToken', 0)
}

export const useStartTime = (): useLocalStorageReturn<number> => {
  return useLocalStorage('_exp', Math.floor(new Date().getTime() / 1000))
}

export const useQuizDataSent = (): useLocalStorageReturn<boolean> => {
  // @ts-ignore
  return useLocalStorage('_refresh', false)
}

export const useQuizStatus = (): useLocalStorageReturn<'start' | 'going' | 'finished'> => {
  return useLocalStorage<'start' | 'going' | 'finished'>('_date', 'start')
}
