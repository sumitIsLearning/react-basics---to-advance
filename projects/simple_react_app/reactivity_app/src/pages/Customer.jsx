import React, { useEffect, useState } from "react";
import UserProfileCard from "../components/UserProfileCard";

const Customer = () => {
  const [users, setUsers] = useState([
    {
      name: "Sumit Chakraborty",
      avatar: "/public/profile.png",
      jobTitle: "junior Developer",
      email: "sumit@example.com",
      location: "India, Assam",
      website: "www.sfolio.com",
      facebook: "https://facebook.com/",
      instagram:
        "https://www.instagram.com/sumitxchakraborty/profilecard/?igsh=ZzkydHFxZmNndnpz",
      github: "https://github.com/sumitIsLearning",
      id: 0,
    },
  ]);

  const [isloading, setIsloading] = useState(false);

  async function fetchData() {
    const response = await fetch(
      "https://67516a96d1983b9597b2ad0d.mockapi.io/api/v1/users"
    );
    const data = await response.json();

    setUsers([...users, ...data]);
  }

  useEffect(() => {
    fetchData();
    setIsloading(true);
    return () => {
      console.log("unmounted");
      setIsloading(false);
    };
  }, []);

  return (
    <div>
      {isloading ? (
        <div className="m-10 grid sm:grid-cols-1 md:grid-cols-4 gap-y-3 w-auto">
          {users.map((user) => (
            <UserProfileCard user={user} key={user.id} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-xl mt-10">Loading...</h2>
      )}
    </div>
  );
};

export default Customer;
