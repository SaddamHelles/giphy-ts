import React, { createContext, PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IContextType {
  authed: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
}
const UserContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthed(false);
    navigate("/login");
  };
  return (
    <userContext.Provider value={{ authed, handleLogin, handleLogout }}>
      {children}
    </userContext.Provider>
  );
};

export const userContext = createContext<IContextType>({} as any);
export default UserContext;
