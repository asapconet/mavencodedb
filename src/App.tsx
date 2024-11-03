import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/authContext";
import Login from "./auth/login";
import { ProtectedRoute } from "./routes";
import Home from "app/home";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
