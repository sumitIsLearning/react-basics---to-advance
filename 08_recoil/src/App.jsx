import React, { createContext, memo, useContext, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counterAtom";

// const countContext = createContext();
function Counter() {
  return (
    <div>
      <CurrentCount />
      <Buttons />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Increment />
      <Decrement />
    </div>
  );
}

function Increment() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((currCount) => currCount + 1)}>
        Increment
      </button>
    </div>
  );
}

function Decrement() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
};
export default App;
