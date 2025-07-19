import React, { useState } from 'react';
import PasswordGenerator from '../components/PasswordGenerator';
import PasswordManager from '../components/PasswordManager';
import '../styles/App.css';

function Dashboard() {
  const [generatedPassword, setGeneratedPassword] = useState('');

  return (
    <div className="app">
      <div className="nav">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <></><></>
      <h2>Password Manager & Generator</h2>
      <PasswordGenerator onGenerate={setGeneratedPassword} />
      <PasswordManager generatedPassword={generatedPassword} />
    </div>
  );
}

export default Dashboard;
