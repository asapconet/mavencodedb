import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, logoutRequest } from "./actions";
import { selectIsAuthenticated } from "./selectors";
import { AuthUser } from "./types";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
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
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const login = (user: AuthUser) => dispatch(loginRequest(user));
  const logout = () => dispatch(logoutRequest());

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
