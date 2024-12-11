import  { useRef } from 'react'

export const usePrev = (newValue , initial) => {
  const ref = useRef({
    value:newValue,
    previous:initial
  });

  if(ref.current.value !== newValue) {
    ref.current.previous = ref.current.value;
    ref.current.value = newValue;
  }

  return ref.current.previous

}
