import React, { useState } from "react";
import "./login.css";
export default function Login() {
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
    <div className="login">
      <h1>LOGIN</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter password"
        onChange={handleChange}
      />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
}
