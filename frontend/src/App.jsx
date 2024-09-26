import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import "./App.css";
import AppBar from "./components/AppBar";
import MapPage from "./components/MapPage";
import ForgotPassPage from "./components/ForgotPassPage";
import AccountConfirmation from "./components/AccountConfirmation";
import SurveyPage from "./components/FormPageOne";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider>
      <Router>
        <AppBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="app-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<MapPage />} />
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route path="/forgot-password" element={<ForgotPassPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/account-confirmation"
                element={<AccountConfirmation />}
              />
              <Route
                path="/form-page-one"
                element={<SurveyPage onLogin={handleLogin} />}
              />
              <Route
                path="/map"
                element={<MapPage isLoggedIn={isLoggedIn} />}
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
