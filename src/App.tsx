import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Auth/SignUpPage";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/HomePage";
import Dashboard from "./pages/Dashboard";
import CommandesPage from "./pages/CommandesPages";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commande" element={<CommandesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
