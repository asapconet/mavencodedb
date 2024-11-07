import { AuthUser } from "src/modules/auth/authSlice";

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  user?: { username: string } | null;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
