import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

import thread from '../images/thread.jpg';
import space from '../images/space.jpg';
import ornament from '../images/ornament.jpg';
import recipe from '../images/recipe.webp';
import wood from '../images/wood.webp';
import houseDivided from '../images/house-divided.jpg';
import bunny from '../images/bunny.webp';
import hairBrush from '../images/hair-brush.jpg';
import flowerHolder from '../images/flower-holder.jpg';
import boo from '../images/boo.jpg';

function Gallery() {
  return (
    <main>
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${thread})` }}
        ></div>

        <div className="hero-overlay">
          <div className="card">
            <h1>Gallery</h1>
            <p>A collection of custom, handmade designs</p>
          </div>
        </div>
      </section>

      <section className="section center gallery-featured">
        <div className="wrap">
          <h2>Featured Designs</h2>
          <p className="sub">A curated look at some of our favorite custom pieces.</p>

          <div className="gallery-grid">
            <Link to="/contact">
              <img src={space} alt="Monthly milestone ornaments" />
            </Link>

            <a href="/">
              <img src={ornament} alt="Wood milestone ornaments" />
            </a>

            <a href="/">
              <img src={recipe} alt="Kitchen measurement cutting board" />
            </a>

            <a href="/">
              <img src={wood} alt="Family name wood sign" />
            </a>

            <a href="/">
              <img src={houseDivided} alt="House divided decor" />
            </a>

            <a href="/">
              <img src={bunny} alt="Wreath sash with bunny" />
            </a>

            <a href="/">
              <img src={hairBrush} alt="Personalized hair brush" />
            </a>

            <a href="/">
              <img src={flowerHolder} alt="Welcome flower box" />
            </a>

            <a href="/">
              <img src={boo} alt="Boo sweatshirt" />
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Interested in Something Special?</h2>
        <p className="sub">We’d love to create something just for you.</p>

        <div className="btn-row">
          <Link className="btn" to="/contact">Contact Us</Link>
        </div>

        <div className="gallery-brand">Cina Designs &amp; Events</div>
        <div className="gallery-tagline">
          Handcrafted with
          <br />
          love
        </div>
      </section>
    </main>
  );
}

export default Gallery;