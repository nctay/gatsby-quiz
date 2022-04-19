import { useLocalStorage, useLocalStorageReturn } from './useLocalStorage'

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const useName = (): useLocalStorageReturn<string> => {
  return useLocalStorage('name', '')
}

export const useEmail = (): useLocalStorageReturn<string> => {
  return useLocalStorage('email', '')
}

export const useWork = (): useLocalStorageReturn<string> => {
  return useLocalStorage('work', '')
}
export const useQuizNum = (): useLocalStorageReturn<number> => {
  return useLocalStorage('quiz_num', randomIntFromInterval(0, 2))
}

export const useScore = (): useLocalStorageReturn<number> => {
  return useLocalStorage('score', 0)
}

export const useCurrQuestion = (): useLocalStorageReturn<number> => {
  return useLocalStorage('curr_question', 0)
}

export const useQuestionsLength = (initialValue?: number): useLocalStorageReturn<number> => {
  return useLocalStorage('questions_length', initialValue)
}
export const useTimer = (): useLocalStorageReturn<number> => {
  return useLocalStorage('curr_timer', 0)
}

export const useStartTime = (): useLocalStorageReturn<number> => {
  return useLocalStorage('startTime', new Date().getTime())
}

export const useQuizDataSent = (): useLocalStorageReturn<boolean> => {
  // @ts-ignore
  return useLocalStorage('dataSent', false)
}
