import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Auth/SignUpPage";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/HomePage";
import Dashboard from "./pages/Dashboard";
import CommandesPage from "./pages/CommandesPages";

import { AuthProvider } from "./components/contexts/AuthContext";
import { PrivateRoute, PublicRoute } from "./components/RouteGuards";
import ArticlesPage from "./pages/ArticlesPage";
import MenuPage from "./pages/MenuPage";
import DashboardLayout from "./components/Layout/DashboardLayout";
import FinancePage from "./pages/FinancePage";
import HistoriquePage from "./pages/HistoriquePage";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          
{/*           <Route path="/dashboardLayout" element={<DashboardLayout/>}> */}
 
{/*           </Route> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
              path="/dashboardLayout"
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              <Route path="historique" element={<HistoriquePage/>}/>
              <Route path="finance" element={<FinancePage/>}/>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="menu" element={<MenuPage/>}/>
              <Route path="articles" element={<ArticlesPage/>}/>
              <Route path="commandes" element={<CommandesPage />} /> 
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
  );
};

export default App;
