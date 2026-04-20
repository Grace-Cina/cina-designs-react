import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({
  id,
  image,
  title,
  price,
  category,
  material,
  occasion,
  description,
  onDelete,
  onEdit
}) {
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

          <div className="btn-group">
            <button
              onClick={(e) => {
                e.preventDefault(); // 🚨 prevents link navigation
                onEdit(id);
              }}
              className="edit-btn"
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.preventDefault(); // 🚨 prevents link navigation
                onDelete(id);
              }}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;