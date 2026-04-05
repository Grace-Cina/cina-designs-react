import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://cina-designs-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log('Error loading product:', err));
  }, [id]);

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="wrap">
          <p className="loading">Loading product...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <section className="product-details-section">
        <div className="wrap">
          <div className="product-details-card">
            <div className="product-details-image-box">
              <img
                src={`https://cina-designs-server.onrender.com${product.image}`}
                alt={product.name}
                className="product-details-image"
              />
            </div>

            <div className="product-details-content">
              <p className="product-tag">Cina Designs & Events</p>
              <h1>{product.name}</h1>
              <p className="product-details-price">{product.price}</p>

              <div className="product-meta">
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Material:</strong> {product.material}</p>
                <p><strong>Occasion:</strong> {product.occasion}</p>
              </div>

              <p className="product-description">{product.description}</p>

              <div className="btn-row left">
                <Link to="/shop" className="btn">Back to Shop</Link>
                <Link to="/contact" className="btn">Order This Item</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
