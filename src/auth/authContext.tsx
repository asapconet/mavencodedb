import React, { createContext, useContext } from "react";
import { AuthContextType } from "../types/auth";
import { useRecoilState } from "recoil";
import { authState } from "components/atoms/recoil/login";

interface IProps {
  children: React.ReactNode;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [auth, setAuth] = useRecoilState(authState);

  const login = () => {
    setAuth({
      isAuthenticated: true,
      user: { username: "aaronrickymeek@gmail.com" },
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: auth.isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
