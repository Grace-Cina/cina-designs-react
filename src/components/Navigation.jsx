import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/shop">Shop</Link> |{' '}
      <Link to="/gallery">Gallery</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;