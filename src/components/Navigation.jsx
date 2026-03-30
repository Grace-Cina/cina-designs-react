import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        id="toggle-nav"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;