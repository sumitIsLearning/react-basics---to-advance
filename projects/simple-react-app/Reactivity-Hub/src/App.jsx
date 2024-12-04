import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserProfileCard from "./components/UserProfileCard";

const App = () => {
  const [users, setUsers] = useState([
    {
      "id": "102",
      "author": "Ben Moore",
      "width": 4320,
      "height": 3240,
      "url": "https://unsplash.com/photos/pJILiyPdrXI",
      "download_url": "https://picsum.photos/id/102/4320/3240"
    },
  ]);

  useEffect(async ()=> {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=20")
    const data = await response.json();
    setUsers(data);
  },[])

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="m-10 grid sm:grid-cols-1 md:grid-cols-4 gap-y-3 w-auto">
        {users.map((user) => <UserProfileCard user={user} key={user.id} />)}
      </div>
    </>
  );
};

export default App;
