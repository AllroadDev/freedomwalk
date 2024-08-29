import React, { useState } from 'react';
import axios from 'axios'; 
import './../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('https://your-api-endpoint/login', {
    //     email: email,
    //     password: password
    //   });
    //     //   замінити url 

    //   if (response.data.success) {
    //     console.log('Login successful');
    //     // Дії після успішного логіну, перенаправлення
    //   } else {
    //     console.error('Login failed:', response.data.message);
    //   }
    // } catch (error) {
    //   console.error('Error logging in:', error);
    // }
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="login-input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="forgot-password">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="separator">or</div>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Icon" className="google-icon" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
