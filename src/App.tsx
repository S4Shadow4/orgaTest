import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Auth/SignUpPage";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/HomePage";
import Dashboard from "./pages/Dashboard";
import CommandesPage from "./pages/CommandesPages";

import { AuthProvider } from "./components/contexts/AuthContext";
import { PrivateRoute, PublicRoute } from "./components/RouteGuards";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/commande" element={<CommandesPage />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
  );
};

export default App;
