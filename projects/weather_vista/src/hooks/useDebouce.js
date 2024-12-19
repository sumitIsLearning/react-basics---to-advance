import { useEffect, useState } from 'react'

const useDebouce = (value , delay=650) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      let timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay)
    
      return () => {
        clearTimeout(timeoutId)
      }
    }, [value , delay])
    

  return debouncedValue;
}

export default useDebouce