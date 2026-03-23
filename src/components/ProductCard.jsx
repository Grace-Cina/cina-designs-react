import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ image, title, price, category, material, occasion, description }) {
  return (
    <article className="card-item">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="card-bottom">
        <h3>{title}</h3>
        <div className="price">{price}</div>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Material:</strong> {material}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
        <p>{description}</p>
        <Link className="btn mini" to="/contact">View Details</Link>
      </div>
    </article>
  );
}

export default ProductCard;