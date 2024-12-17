import { useEffect, useState } from 'react'

export const useDebounce = (value , delay=650) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // console.log("effect start")
    let timeoutId = setTimeout(() => {
        setDebouncedValue(value);
    }, delay)

    return () => {
        // console.log("effect end");
        
        clearTimeout(timeoutId)
    }
  },[value , delay])

  return debouncedValue;
}
