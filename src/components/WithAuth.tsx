import React, { PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/UserContext";

const WithAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const { authed } = useContext(userContext);
  if (authed) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"} />;
};

export default WithAuth;
