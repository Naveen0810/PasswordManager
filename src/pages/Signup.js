import React, { useState } from 'react';
import '../styles/Form.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Signed up as: ${form.name}`);
  };

  return (
    <div className="form-container">
      <div className="nav">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
