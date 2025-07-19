import React, { useState } from 'react';
import '../styles/App.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm(prev => ({ ...prev, password }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Store login info in localStorage
    const loginEntry = {
      name: "Main Login",
      username: form.email,
      password: form.password
    };

    localStorage.setItem("loginEntry", JSON.stringify(loginEntry));

    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        /><br />
        <button type="button" onClick={generatePassword}>Generate Password</button>
        <button type="submit" style={{ marginLeft: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
