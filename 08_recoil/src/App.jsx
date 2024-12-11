import React, { createContext, memo, useContext, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counterAtom";
import { evenSelector } from "./store/selector/evenSelector";
import { countSelector } from "./store/selector/countSelector";
import { userNameSelector } from "./store/selector/userNameSelector";
import { userAtom } from "./store/atoms/userAtom";

// const countContext = createContext();
function Counter() {
  return (
    <div>
      <CurrentCount />
      <Buttons />
      <IsEven />
      <UserName />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(countSelector);
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
      <button onClick={() => setCount((currCount) => currCount + 2)}>
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

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return (
    <div style={{ marginTop: 10 }}>
      <h2> It is a {isEven ? "Even" : "Odd"} Number</h2>
    </div>
  );
}

function UserName() {
  const names = useRecoilValue(userNameSelector);
  const setName = useSetRecoilState(userAtom);
  const [index, setIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleEditDone() {
    setName((users) =>
      users.map((user, idx) =>
        idx == index ? { ...user, name: inputValue } : user
      )
    ); // Updates the atom with the new name
    setIndex(-1); // Exits edit mode
  }

  return (
    <div>
      {names.map((name, idx) => (
        <div key={idx} style={{ display: "flex", gap: 20, marginTop: 10 }}>
          {index === idx ? (
            <>
              <input
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your name"
              />
              <button onClick={handleEditDone}>Done</button>
            </>
          ) : (
            <>
              <h3>{name}</h3>
              <button
                onClick={() => {
                  setIndex(idx);
                  setInputValue(name); // Prefill input with the current name
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
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
