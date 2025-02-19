import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // Vérification du token au chargement
  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    setToken(savedToken); // Initialise le token

    // Ne redirige qu'à la première charge
    if (window.location.pathname === "/login" && savedToken) {
      navigate("/dashboardLayout");
    }
  }, [navigate]);

  const login = (token: string) => {
    setToken(token);
    sessionStorage.setItem("token", token);
    navigate("/dashboardLayout"); // Redirige vers /home après connexion
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem("token"); // Supprime le token
    navigate("/login"); // Redirige vers /login après déconnexion
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};