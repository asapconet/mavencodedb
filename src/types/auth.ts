import { AuthUser } from "src/modules/auth/types";

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
