import { AuthUser } from "src/utils/recoil/login";

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
