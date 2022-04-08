import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <input type="text" placeholder="Enter your email" />
      <input type="password" placeholder="Enter password" />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
}
