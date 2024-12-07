import { useState } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count => count + 1);
  }
  return {
    count,
    increaseCount
  }
};

export default useCounter;
