import { useEffect, useState, useCallback, useMemo } from 'react'

import { usePrevious } from './usePrevious'
import { EncryptStorage } from 'encrypt-storage'

const encryptStorage = new EncryptStorage('JSON.stringify(data)')

export type useLocalStorageReturn<D> = [D | undefined, (value: D) => void, () => void]
export function useLocalStorage<D>(key: string, initialValue: D | undefined): useLocalStorageReturn<D> {
  const [previousKey] = usePrevious(key)
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const getValueFromLS = useCallback(
    (lsKey: string): D | undefined => {
      try {
        // Get from local storage by key
        if (typeof window !== 'undefined') {
          const item = encryptStorage.getItem(lsKey)
          // Parse stored json or if none return initialValue
          if (!item && initialValue !== undefined) {
            encryptStorage.setItem(lsKey, JSON.stringify(initialValue))
          }
          return item ? item : initialValue
        }
        return initialValue
      } catch (error) {
        // If error also return initialValue
        console.log('initial value', error, initialValue)
        if (initialValue !== undefined) {
          if (typeof window !== 'undefined') {
            encryptStorage.setItem(lsKey, JSON.stringify(initialValue))
          }
        }
        return initialValue
      }
    },
    [initialValue]
  )

  const [storedValue, setStoredValue] = useState<D | undefined>(getValueFromLS(key))
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: D): void => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value
        // Save state
        setStoredValue(valueToStore)
        // Save to local storage
        if (typeof window !== 'undefined') {
          encryptStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.error(error)
      }
    },
    [key, storedValue]
  )

  const removeValue = useCallback((): void => {
    try {
      if (typeof window !== 'undefined') {
        encryptStorage.removeItem(key)
      }
      setStoredValue(undefined)
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }, [key])

  useEffect(() => {
    if (key !== previousKey) {
      setStoredValue(getValueFromLS(key))
    }
  }, [getValueFromLS, key, previousKey])

  return useMemo(() => [storedValue, setValue, removeValue], [removeValue, setValue, storedValue])
}
