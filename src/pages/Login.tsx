import React, { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import useForm from "../hooks/useForm";

const Login = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const { handleLogin } = useContext(userContext);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { email, password } = values;
    handleLogin(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
