import GalleryItem from './GalleryItem';

function FeaturedDesigns({ items, onImageClick }) {
  return (
    <section className="section center gallery-featured">
      <div className="wrap">
        <h2>Featured Designs</h2>
        <p className="sub">A curated look at some of our favorite custom pieces.</p>

        <div className="gallery-grid">
          {items.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              alt={item.alt}
              onClick={() => onImageClick(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDesigns;