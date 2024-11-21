import React, { useState } from 'react';
import { User } from 'lucide-react'; // Mengimpor ikon dari Lucide
import { useNavigate } from 'react-router-dom'; // Impor useNavigate untuk navigasi

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook untuk navigasi ke halaman lain

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cek kredensial login (contoh sederhana)
    if (username === 'user' && password === 'password') {
      // Jika login berhasil, navigasi ke halaman home
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="icon" style={{ cursor: 'pointer' }}>
        {/* Ikon User */}
        <User size={32} color="#333" />
      </div>

      <div className="login-form">
        <div className="login-header">
          <h1 className="login-title">CineFatima</h1>
          <p className="login-subtitle">Selamat datang, silakan login!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
