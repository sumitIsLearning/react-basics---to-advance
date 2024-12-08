import React, { useState } from "react";
import usePrev from "./hooks/usePrev";
import { useAltPrev } from "./hooks/useAltPrev";

const App = () => {
  const [count, setcount] = useState(0);
  // const previousValue = usePrev(count);
  const altPrevValue = useAltPrev(count);
  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        Count: {count}
      </button>
      {/* <p>The previous value: {previousValue}</p> */}
      <p>The previous value: {altPrevValue}</p>
    </div>
  );
};

export default App;
