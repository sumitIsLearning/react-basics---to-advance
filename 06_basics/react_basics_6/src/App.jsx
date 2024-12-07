import React, { useEffect, useRef, useState } from "react";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";

function InputForm() {
  const inputRef = useRef(null);
  function focusElement() {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
    } else {
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <h2>signUp</h2>
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={focusElement}>Submit</button>
    </div>
  );
}
// useState approach
function Stopwatch() {
  const [currentCount, setCurrentCount] = useState(0);
  const [isActive , setIsActive] = useState(false);

  useEffect(() => {
    if(isActive) {
      const intervalId = setInterval(() => {
        setCurrentCount(currentCount => currentCount + 1);
      }, 1000)
      return () => {
        console.log("clock stopped")
        clearInterval(intervalId);
      }
    }
  },[isActive]);

  return (
    <div>
      <h2>{currentCount}</h2>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Stop</button>
    </div>
  )
}

// experiment // global raw variable approach
/*Key Differences in Your Code:

Global Variable Approach (Clock):
The global timer might conflict with other timers if reused or referenced elsewhere.
It doesn’t benefit from React’s lifecycle management; you must handle cleanup manually.

useEffect Approach (Stopwatch):
The timer logic is encapsulated within the component.
React automatically manages cleanup on dependency changes ([isActive]) or component unmount.
It’s resilient to re-renders due to closures or stale state values. */
// let timer = 0;
// function Clock() {
//   const [currentCount, setCurrentCount] = useState(0);

//   function startClock() {
//     timer = setInterval(() => {
//       setCurrentCount(currentCount => currentCount + 1);
//     }, 1000)
//   }

//   function stopClock() {
//     clearInterval(timer);
//   }

//   return (
//     <div>
//       <h2>{currentCount}</h2>
//       <button onClick={startClock}>start</button>
//       <button onClick={stopClock}>stop</button>

//     </div>
//   )

// }

// useRef approach
function SecondStopWatch() {
  // why use useRef
  /* using useRef hook has several advantages"
  1.It persists across re-renders, meaning the value that is stored in ref does not get reset when the component re-renders , unlike raw variables
  2.No re-render on change, meaning when the value of the ref(ref.current) is changed , it does not cause component to re-render*/
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);

  function startCount() {
    intervalIdRef.current = setInterval(() => {
      setCount(currentCount => currentCount + 1);
    }, 1000);
  }

  function stopCount() {
    console.log("component unmounted");
    clearInterval(intervalIdRef.current);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startCount}>start</button>
      <button onClick={stopCount}>stop</button>
    </div>
  )
}


// There are three ways to declare variables in react
// - raw variable (eg. let or const value = 2)
//-using useState hook (eg. const [first , setFirst] = useState(argument))
//- using useRef hook (eg. const ref = useRef()) (if you dont give any agrument the current key of the ref will be undefined).
const App = () => {
  const [currentPostNumber, setCurrentPostNumber] = useState(1);
  const [isVisible , setIsvisible] = useState(false);
  const {count , increaseCount} = useCounter();
  const {data , loading , error} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPostNumber);


  return (
    <div>
      {/* <InputForm /> */}
      {/* <Clock /> */}
      {/* {isVisible && <SecondStopWatch />}
      {isVisible && <Stopwatch />}
      <button onClick={() => setIsvisible(isVisible => !isVisible)}>ToggleVisibility</button> */}

      {/* <button onClick={increaseCount}>count:{count}</button> */}
        <div>
         {error ? error :
         loading ? "loading..." : (<div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>)}
        </div>

        {/* trying to dynamically fetch data */}
        <button onClick={() => setCurrentPostNumber(1)}>1</button>
        <button onClick={() => setCurrentPostNumber(2)}>2</button>
        <button onClick={() => setCurrentPostNumber(3)}>3</button>
        <button onClick={() => setCurrentPostNumber(4)}>4</button>
    </div>
  );
};

export default App;
