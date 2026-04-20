import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import OrderingDetails from '../components/OrderingDetails';
import '../styles/Shop.css';

import craftBackground from '../images/craft-background.png';

function Shop() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const orderDetails = [
    {
      id: 1,
      title: 'Personalization',
      text: 'Add names, dates, colors, or special messages to most items.'
    },
    {
      id: 2,
      title: 'Processing Time',
      text: 'Most custom orders are completed within 3–5 business days.'
    },
    {
      id: 3,
      title: 'Packaging',
      text: 'Gift-ready packaging available upon request.'
    }
  ];

  // 🔹 GET PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch('https://cina-designs-server.onrender.com/api/products');

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setMessage("Failed to load products ❌");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 🔹 DELETE PRODUCT (FIXED)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://cina-designs-server.onrender.com/api/products/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Delete failed");

      // ✅ FIX: use functional update
      setProducts(prev => prev.filter((p) => p._id !== id));

      setMessage("Product deleted successfully ✅");

      // optional: auto-clear message
      setTimeout(() => setMessage(""), 2000);

    } catch (err) {
      console.error(err);
      setMessage("Server error while deleting ❌");
    }
  };

  // 🔹 EDIT NAVIGATION
  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${craftBackground})` }}
        ></div>

        <div className="hero-overlay">
          <div className="card">
            <h1>Shop Handmade Creations</h1>
            <p>Explore personalized décor, keepsakes, and thoughtful gifts</p>
          </div>
        </div>
      </section>

      {/* TOOLBAR */}
      <section className="toolbar">
        <div className="toolbar-inner">
          <div>All Products</div>

          <div className="toolbar-actions">
            <div className="filter">Filter ▼</div>

            <Link to="/add-product" className="add-product-btn">
              + Add Product
            </Link>
          </div>
        </div>
      </section>

      {/* STATUS MESSAGE */}
      {message && <p className="status-msg">{message}</p>}

      {/* LOADING STATE */}
      {loading && <p className="status-msg">Loading products...</p>}

      {/* PRODUCT GRID */}
      {!loading && (
        <section className="section">
          <div className="wrap">
            <div className="grid-4">
              {products.length === 0 ? (
                <p>No products found.</p>
              ) : (
                products.map((item) => (
                  <ProductCard
                    key={item._id}
                    id={item._id}
                    image={`https://cina-designs-server.onrender.com${item.image}`}
                    title={item.name}
                    price={item.price}
                    category={item.category}
                    material={item.material}
                    occasion={item.occasion}
                    description={item.description}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* ORDER DETAILS */}
      <OrderingDetails details={orderDetails} />

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2>Let’s Create Something Special</h2>
          <p className="sub">
            Custom designs made with love for every occasion
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">
              Start a Custom Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;