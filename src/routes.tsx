import { Navigate } from "react-router-dom";
import { useAuth } from "./utils/authContext";

interface IProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
