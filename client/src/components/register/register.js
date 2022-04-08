import React, { useState } from "react";
import "./register.css";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  return (
    <div className="register">
      <h1>REGISTER</h1>
      <input type="text" placeholder="your name" />
      <input type="text" placeholder="your email" />
      <input type="password" placeholder="your Password" />
      <input type="password" placeholder="Confirm Password" />
      <div className="button">REGISTER</div>
      <div>or</div>
      <div className="button">LOGIN</div>
    </div>
  );
}
