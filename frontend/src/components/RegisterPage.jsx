import React, { useState } from 'react';
import axios from 'axios'; 
import './../styles/RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // try {
    //   const response = await axios.post('url', {
    //     email: email,
    //     password: password
    //   });
    //     //   замінити url 

    //   if (response.data.success) {
    //     console.log('Registration successful');
    //     // зробити перенаправлення або інші дії після успішної реєстрації
    //   } else {
    //     console.error('Registration failed:', response.data.message);
    //   }
    // } catch (error) {
    //   console.error('Error registering:', error);
    // }
  };

  const handleGoogleRegister = () => {
    console.log('Registering with Google...');
    // додати Google OAuth
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-box">
          <h2>Create an Account</h2>
          <form onSubmit={handleRegister} className="register-form">
            <div className="register-input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="register-input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="register-input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-btn">Register</button>
          </form>
          <div className="login-redirect">
            <span>Already have an account?</span> <a href="/login">Login</a>
          </div>
          <div className="separator">or</div>
          <div className="google-btn" onClick={handleGoogleRegister}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Icon" className="google-icon" />
            Sign up with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
