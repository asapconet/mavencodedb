import React, { createContext, useContext, useEffect } from "react";
import { AuthContextType } from "../types/auth";
import { useRecoilState } from "recoil";
import { authState, AuthUser } from "components/atoms/recoil/login";

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

  useEffect(() => {
    const storedAuth = localStorage.getItem("authState");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, [setAuth]);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(auth));
  }, [auth]);

  
  const login = ({ username, password }: AuthUser) => {
    const userData = {
      isAuthenticated: true,
      user: { username, password },
    };
    setAuth(userData);
    localStorage.setItem("authState", JSON.stringify(userData));
  };

  const logout = () => {
    const logoutData = {
      isAuthenticated: false,
      user: null,
    };
    setAuth(logoutData);
    localStorage.removeItem("authState");
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
