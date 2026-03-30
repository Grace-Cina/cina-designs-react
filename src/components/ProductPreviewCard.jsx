function ProductPreviewCard({ image, title, extraClass = '' }) {
  return (
    <div className="card-item">
      <div
        className={`card-img ${extraClass}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-bottom">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ProductPreviewCard;