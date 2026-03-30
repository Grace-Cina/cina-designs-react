import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import FeaturedDesigns from '../components/FeaturedDesigns';

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
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, image: space, alt: 'Monthly milestone ornaments' },
    { id: 2, image: ornament, alt: 'Wood milestone ornaments' },
    { id: 3, image: recipe, alt: 'Kitchen measurement cutting board' },
    { id: 4, image: wood, alt: 'Family name wood sign' },
    { id: 5, image: houseDivided, alt: 'House divided decor' },
    { id: 6, image: bunny, alt: 'Wreath sash with bunny' },
    { id: 7, image: hairBrush, alt: 'Personalized hair brush' },
    { id: 8, image: flowerHolder, alt: 'Welcome flower box' },
    { id: 9, image: boo, alt: 'Boo sweatshirt' }
  ];

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

      <FeaturedDesigns items={galleryItems} onImageClick={openLightbox} />

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              type="button"
              onClick={closeLightbox}
            >
              ×
            </button>
            <img
              className="lightbox-img"
              src={selectedImage.image}
              alt={selectedImage.alt}
            />
          </div>
        </div>
      )}

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