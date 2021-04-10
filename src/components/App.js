import React from "react";
import Login from "./Login";

let isLoggedIn = false;

console.log(currentTime);

function App() {
  return <div className="container">{
  /* { isLoggedIn === true? <h1>Hello</h1> : <Login />} */
    currentTime > 12 ? <h1>Why are you still working?</h1> : null

  }
    </div>
}

export default App;
