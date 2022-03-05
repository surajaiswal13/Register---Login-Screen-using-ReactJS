import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {props.isRegistered === false && <Input type="password" placeholder="Confirm Password" />}
 
      <button type="submit">{props.isRegistered === true ? "Login" : "Registered"}</button>
    </form>
  );
}

export default Login;
