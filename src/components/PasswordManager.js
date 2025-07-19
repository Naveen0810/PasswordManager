import React, { useState, useEffect } from 'react';

function PasswordManager({ generatedPassword }) {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: '', username: '', password: '' });

  // Load login info on mount
  useEffect(() => {
    const loginEntry = localStorage.getItem("loginEntry");
    if (loginEntry) {
      const parsed = JSON.parse(loginEntry);
      setEntries(prev => [...prev, parsed]);

      // Clear so it's not saved again if user reloads
      localStorage.removeItem("loginEntry");
    }
  }, []);

  // Update password field if generator changes
  useEffect(() => {
    if (generatedPassword) {
      setForm(prev => ({ ...prev, password: generatedPassword }));
    }
  }, [generatedPassword]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.username || !form.password) return;
    setEntries([...entries, form]);
    setForm({ name: '', username: '', password: '' });
  };

  return (
    <div>
      <h3>Password Manager</h3>
      <input name="name" placeholder="Site / App Name" value={form.name} onChange={handleChange} /><br />
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} /><br />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
      <button onClick={handleSave}>Save</button>

      <h4>Saved Passwords</h4>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong> — {entry.username} — {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordManager;
