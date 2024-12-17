import React, { useState } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { postFamilyAtom } from "./store/atoms/postFamilyAtom";
import { idAtom } from "./store/atoms/idAtom";

const App = () => {
  return (
    <div>
      <PostCard />
      <Buttons />
    </div>
  );
};

function PostCard() {
  const id = useRecoilValue(idAtom);
  const postLoadable = useRecoilValueLoadable(postFamilyAtom(id));
  switch (postLoadable.state) {
    case "hasValue":
      return (<div>
      <h2>title: {postLoadable.contents.title}</h2>
      <p>
        <b>description:</b> {postLoadable.contents.body}
      </p>
    </div>)
    case "loading" :
      return <div><h2>Loading...</h2></div>
    case "hasError":
      return postLoadable.contents
  }
}

function Buttons() {
  const setId = useSetRecoilState(idAtom);
  return (
    <div>
      <button onClick={() => setId(1)}>post 1</button>
      <button onClick={() => setId(2)}>post 2</button>
      <button onClick={() => setId(3)}>post 3</button>
      <button onClick={() => setId(4)}>post 4</button>
      <button onClick={() => setId(5)}>post 5</button>
    </div>
  );
}

export default App;
