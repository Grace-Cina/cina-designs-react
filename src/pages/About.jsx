import { Link } from 'react-router-dom';
import '../styles/About.css';
import aboutHero from '../images/about-hero.png';
import makingOrnaments from '../images/making-ornaments.png';
import homeDecor from '../images/home-decor.png';
import milestoneMemories from '../images/milestone-memories.png';
import weddingDecor from '../images/wedding-decor.png';

function About() {
  return (
    <main>
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${aboutHero})` }}
        ></div>

        <div className="hero-overlay">
          <div className="card">
            <h1>About Cina Designs & Events</h1>
            <p>Handcrafted with love by a mother-daughter team.</p>
            <div className="btn-row">
              <Link to="/contact" className="btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-story">
          <div>
            <h2>Our Story</h2>
            <p>
              Cina Designs & Events began as a shared passion between a mother and daughter who love creating meaningful, handmade pieces for the people they care about.
            </p>
            <p>
              What started as a small hobby quickly grew into a small business dedicated to turning heartfelt ideas into beautiful designs.
            </p>
            <p>
              Each piece is thoughtfully designed and carefully crafted with attention to detail, quality materials, and lots of love.
            </p>
          </div>

          <div>
            <img
              className="story-img"
              src={makingOrnaments}
              alt="Making ornaments"
            />
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="wrap">
          <h2>What We Offer</h2>

          <div className="grid-3">
            <div className="card-item">
              <div
                className="card-img"
                style={{ backgroundImage: `url(${homeDecor})` }}
              ></div>
              <div className="card-bottom">
                <h3>Custom Home Décor</h3>
                <p>Personalized pieces designed to add warmth and character to your space.</p>
              </div>
            </div>

            <div className="card-item">
              <div
                className="card-img"
                style={{ backgroundImage: `url(${milestoneMemories})` }}
              ></div>
              <div className="card-bottom">
                <h3>Keepsakes & Gifts</h3>
                <p>Meaningful creations perfect for weddings, babies, anniversaries, and holidays.</p>
              </div>
            </div>

            <div className="card-item">
              <div
                className="card-img"
                style={{ backgroundImage: `url(${weddingDecor})` }}
              ></div>
              <div className="card-bottom">
                <h3>Event Details</h3>
                <p>Thoughtful touches that make your special occasions unforgettable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="wrap">
          <h2>Where We’re Located</h2>
          <p className="sub">Cina Designs & Events is proudly based in York, South Carolina.</p>

          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps?q=York,South+Carolina&output=embed"
              loading="lazy"
              title="Map of York, South Carolina"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Let’s Create Something Special</h2>
        <p className="sub">Custom designs made with love for every occasion</p>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </main>
  );
}

export default About;