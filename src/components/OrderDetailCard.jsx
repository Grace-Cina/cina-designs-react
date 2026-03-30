function OrderDetailCard({ title, text }) {
  return (
    <div className="info-box">
      <strong>{title}</strong>
      <br />
      {text}
    </div>
  );
}

export default OrderDetailCard;