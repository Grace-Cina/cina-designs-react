import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, image, title, price, category, material, occasion, description }) {
  return (
    <article className="product-card">
      <Link to={`/products/${id}`} className="product-card-link">
        <img src={image} alt={title} className="product-card-image" />

        <div className="product-card-content">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Material:</strong> {material}</p>
          <p><strong>Occasion:</strong> {occasion}</p>
          <p>{description}</p>

          <span className="details-btn">View Details</span>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;