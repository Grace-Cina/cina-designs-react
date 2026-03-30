function OfferCard({ image, title, description }) {
  return (
    <div className="card-item">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-bottom">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OfferCard;