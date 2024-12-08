import { useEffect, useRef } from 'react'

const usePrev = (value) => {
    const prevRef = useRef();

    useEffect(() => {
        prevRef.current = value; // ref does not trigger re-render , and the value also persist across re-render 
    },[value])

    return prevRef.current;
}

export default usePrev

/*Rendering Phase:

When your component re-renders, the usePrev function runs and returns prevRef.current.
At this moment, prevRef.current still holds the previous value because the useEffect has not run yet. This is why you get the "previous" value when you access prevRef.current.

Commit Phase:
After React completes rendering the updated DOM, it enters the commit phase. During this phase, React runs any queued useEffect callbacks.
The useEffect callback updates prevRef.current with the new value of value. However, this happens after the return statement in your hook has already executed and the component's rendering is complete.

Unmounts/Updates:
If the component remains mounted and value changes again, the process repeats:
The new render occurs, returning the previous prevRef.current.
After rendering, the useEffect updates prevRef.current to the latest value.

Key Takeaway:
useEffect runs after the render completes. It does not block or modify the current render cycle. This is why the prevRef.current value you return during the render phase is still the "previous" value, and useEffect updates it only afterward for the next render. */