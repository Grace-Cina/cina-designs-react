import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import OrderingDetails from '../components/OrderingDetails';
import '../styles/Shop.css';

import craftBackground from '../images/craft-background.png';

function Shop() {
  const [products, setProducts] = useState([]);

  const orderDetails = [
    {
      id: 1,
      title: 'Personalization',
      text: 'Add names, dates, colors, or special messages to most items.'
    },
    {
      id: 2,
      title: 'Processing Time',
      text: 'Most custom orders are completed within 3–5 business days. Rush options may be available upon request.'
    },
    {
      id: 3,
      title: 'Packaging',
      text: 'Gift-ready packaging available upon request for an additional fee.'
    }
  ];

  useEffect(() => {
    fetch('https://cina-designs-server.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Error loading products:', err));
  }, []);

  return (
    <main>
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

      <section className="toolbar">
        <div className="toolbar-inner">
          <div>All Products</div>
          <div>Filter ▼</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-4">
            {products.map((item) => (
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
              />
            ))}
          </div>
        </div>
      </section>

      <OrderingDetails details={orderDetails} />

      <section className="cta">
        <div className="wrap">
          <h2>Let’s Create Something Special</h2>
          <p className="sub">Custom designs made with love for every occasion</p>
          <div className="btn-row">
            <Link className="btn" to="/contact">Start a Custom Order</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;