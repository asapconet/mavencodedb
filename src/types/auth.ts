export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user?: { username: string } | null;
}

export type LoginFormValues = {
  email: string;
  password: string;
};