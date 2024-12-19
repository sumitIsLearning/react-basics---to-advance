import React from "react";
import PostCard from "./component/PostCard";
import { Buttons } from "./component/Buttons";

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      {/* PostCard Component */}
      <PostCard />

      {/* Buttons Component */}
      <div className="space-y-4">
        <Buttons />
      </div>
    </div>
  );
};

export default App;


