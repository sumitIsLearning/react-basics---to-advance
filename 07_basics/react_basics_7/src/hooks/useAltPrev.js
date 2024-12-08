import { useRef } from "react"

export const useAltPrev = (CurrStateValue , initial) => {
    const ref = useRef({
        value: CurrStateValue,
        previous: initial
    });

    if(ref.current.value !== CurrStateValue) {
        ref.current.previous = ref.current.value;
        ref.current.value = CurrStateValue;
    }

    return ref.current.previous;
}