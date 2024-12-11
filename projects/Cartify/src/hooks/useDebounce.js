import { useEffect, useState } from 'react'

export const useDebounce = (newValue , delay = 650) => {
  const [debouncedValue, setDebouncedValue] = useState(newValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setDebouncedValue(newValue)
    }, delay)
  
    return () => {
      clearTimeout(timeoutId)
    }
  }, [newValue , delay]);
  

  return debouncedValue
}
