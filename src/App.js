import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/signup" style={{ marginRight: 10 }}>Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
