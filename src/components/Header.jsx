import { NavLink, Link } from 'react-router-dom';
import logo from '../images/designs&events-logo.png';
import '../styles/Header.css';
import '../styles/Navigation.css';


function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="Cina Designs & Events Logo" />
        </Link>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;