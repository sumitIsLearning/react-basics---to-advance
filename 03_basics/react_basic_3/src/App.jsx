import React, { useState } from 'react'

const App = () => {

  const [username , setUsername] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    setUsername('');
  }

  return (
    <div >
      {/* form handling in react */}
      <form onSubmit={(e) => submitHandler(e)}>
        {/* two way binding refers to a pattern where the component's state is automatically updated whenever the user interacts with the form*/}
        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" style={inputBoxStyle} placeholder='Enter your Username' />
        <button>Submit</button>
      </form>

      <div>state is updating: {username}</div>
    </div>
  )
}

const inputBoxStyle = {
  padding: 20,
  fontSize: 20,
  margin: 10
}


export default App