function GalleryItem({ image, alt, onClick }) {
  return (
    <button className="gallery-link" type="button" onClick={onClick}>
      <img src={image} alt={alt} />
    </button>
  );
}

export default GalleryItem;