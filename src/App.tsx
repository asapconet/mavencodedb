import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/redux/authProvider";
import { ProtectedRoute } from "./routes";
import Login from "./pages/login";
import Home from "./pages/home";

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
