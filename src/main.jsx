import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Film from './pages/Film.jsx';
// import Favorites from './pages/Favorites.jsx';
// import Login from './pages/Login.jsx'; // Import login page


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Rute untuk Login */}
        <Route path="/" element={<Login />} /> {/* Login page sebagai root */}
        
        {/* Rute untuk halaman setelah login
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/film" element={<Film />} />
        <Route path="/favorites" element={<Favorites />} />
         */}
        {/* Rute utama (App) */}
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
