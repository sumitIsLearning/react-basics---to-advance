import React, { useRef } from 'react'

export const usePrev = (newValue , initial) => {
  const ref = useRef({
    value:newValue,
    previousValue: initial
  })

//   now we can either use the useEffect to handle the change or we can do it our self
  if(ref.current.value !== newValue) {
    ref.current.previousValue = ref.current.value;
    ref.current.value = newValue;
  }


  return ref.current.previousValue;

}
