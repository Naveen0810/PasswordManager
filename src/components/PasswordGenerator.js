import React, { useState } from 'react';

function PasswordGenerator({ onGenerate }) {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;':,./<>?";

    let chars = letters + numbers;
    if (includeSymbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    onGenerate(password);
  };

  return (
    <div>
      <h3>Password Generator</h3>
      <label>
        Length:
        <input
          type="number"
          value={length}
          min={4}
          max={64}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>
      <label style={{ marginLeft: 10 }}>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Include Symbols
      </label>
      <button onClick={generatePassword}>Generate</button>
    </div>
  );
}

export default PasswordGenerator;
