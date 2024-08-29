import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-bar">
          <div className="app-title">
          <Link to="/" className="nav-link">FreedomWalk</Link></div>
          <nav className="app-nav">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to FreedomWalk!</h1>
      <p>Please login or register to continue.</p>
    </div>
  );
};

export default App;