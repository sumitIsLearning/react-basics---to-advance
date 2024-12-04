import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([
    {
      name: "sumit Chakraborty",
      image: "/public/profile.png",
      description:
        "Full-Stack Developer | JavaScript, React, HTML5, CSS, Node.js, MongoDB, Express | Building Scalable and Innovative Web Applications",
    },
    {
      name: "vite",
      image: "/public/vite.svg",
      description:
        "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. ",
    },
  ]);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("yo");
    
    const intervalId = setInterval(() => [
        
        setIsVisible(isVisible => !isVisible)
    ],10000)
    return () => {
      clearInterval(intervalId);
    }
  },[]) //=> this will mount when the App component mounts

  return (
    <div style={{display:"flex",flexDirection:"column" ,justifyContent:'center' , alignItems:"center"}}>
      {/* children are special props that allow you to pass elements or components as props to other components */}

      {/* list and keys : when rendering list, each item of list should  have a unique key prop for react to track changes efficiently
      - it improve performance of the app
      - helps in element identification
      - prevent unintended component recyling
      - ensure correct updates */}
      {user.map((user, index) => {
        return <Card key={index}>
          <div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <img
                src={user.image}
                alt={user.name}
                width={60}
                height={60}
              />
              <h3>{user.name}</h3>
            </div>
            <div>
              <p>
                “{user.description}”
              </p>
            </div>
          </div>
        </Card>;
      })}

       {(isVisible) ? <LifecycleComponent /> : "loading..."}

    </div>
  );
};

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        color: "black",
        padding: 10,
        margin: 10,
        border: "1px solid #ccc",
        boxShadow: "2px 2px 2px rgba(0,0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

/*lifeCycle events refers to the specific points in a components life where you can execute custom logic in response to changes or actions. 
These events helps you manage tasks such as :
- data fetching
- subcriptions 
-cleaning up resources

lifecycle event has three stages - mounting(initial rendering) , updating , unmounting
*/

function LifecycleComponent() {
  const [count , setCount] = useState(0);

  useEffect(() => {
    console.log('component mounted or count updated')
  },[count]) //=> runs on mount and when count changes

  useEffect(() => {
    console.log('component mounted');
    return () => [
      console.log('component will unmount') //=> when the life of the component ends
    ]
  },[]) //=> runs on mount and unmounts when the life of the component ends
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  )
}

export default App;
