import React from "react";
import Login from "./Login";

var isRegistered = false;
var isLoggedIn = false;

function App() {
  return <div className="container">
    {(isLoggedIn && isRegistered) ? <h1>Hello</h1> 
    : (!isRegistered && !isLoggedIn) ? <Login isRegistered={isRegistered} isLoggedIn={isLoggedIn} /> 
    : (isRegistered && !isLoggedIn) ? <Login isRegistered={isRegistered} isLoggedIn={isLoggedIn} /> 
    : <h1>SomeThing Went Wrong</h1> } 
  </div>;
}

// Above Ternary Operator Explaination
// if(isLoggedIn === true && isRegistered === true) {
//   <h1>Hello</h1>
// } else if(isRegistered === false && isLoggedIn === false) {
//   <Login isRegistered={isRegistered} isLoggedIn={isLoggedIn} />
// } else if(isRegistered === true && isLoggedIn === false) {
//   <Login isRegistered={isRegistered} isLoggedIn={isLoggedIn} />
// } else {
//   <h1>SomeThing Went Wrong</h1>
// }

export default App;
