import React, { useRef, useState } from "react";
import usePrev from "./hooks/usePrev";
import { useAltPrev } from "./hooks/useAltPrev";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [count, setcount] = useState(0);
  // const previousValue = usePrev(count);
  const altPrevValue = useAltPrev(count);
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const {data , loading , error} = useFetch("https://www.google.com/search?q=" + debouncedValue);

  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        Count: {count}
      </button>
      {/* <p>The previous value: {previousValue}</p> */}
      <p>The previous value: {altPrevValue}</p>
      {/*debounced data */}
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Enter your text here"/>  

    </div>
  );
};

export default App;
