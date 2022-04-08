import React, { useState } from "react";
import "./register.css";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="register">
      {console.log(user)}
      <h1>REGISTER</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="your name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <div className="button">REGISTER</div>
      <div>or</div>
      <div className="button">LOGIN</div>
    </div>
  );
}
