import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";

const Nav = () => {
  const { authed, handleLogout } = useContext(userContext);
  return (
    <div>
      <div style={{ color: authed ? "green" : "red", margin: "2rem" }}>
        {authed ? "Welcome back" : "Go home!!!"}
      </div>
      <Link to={"/"}>Home</Link>
      <Link to={"/gifs"}>Gifs</Link>

      {authed ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default Nav;
