import { Link } from 'react-router-dom';
import logo from '../images/designs&events-logo.png';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="Cina Designs & Events Logo" />
        </Link>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;