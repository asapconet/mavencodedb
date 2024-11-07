import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, logoutRequest } from "./authSlice";
import { RootState } from "./store";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: { username: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const login = (user: { username: string; password: string }) => {
    dispatch(loginRequest(user));
  };

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
