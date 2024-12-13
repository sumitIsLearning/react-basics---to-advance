import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoAtomFamily2 } from "./02_todoAtomFamily";
import { Skeleton } from "@mui/material";

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todoAtomFamily2(id));

  if(todo.state === "loading") {
    return (
      <div>
        <Skeleton variant="text" width={300} height={30} animation="wave" />
      </div>
    )
  }else if(todo.state === "hasValue") {
    return (
      <>
        {todo && (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        )}
      </>
    );
  } else {
    return (
      <h3>Error occured</h3>
    )
  }

}

// we can also use suspence but not in this case becaue i am using loadable

const App = () => {
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={3} />
    </div>
  );
};

export default App;
