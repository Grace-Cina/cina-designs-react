import OrderDetailCard from './OrderDetailCard';

function OrderingDetails({ details }) {
  return (
    <section className="section">
      <div className="wrap center">
        <h2>Ordering Details</h2>

        <div className="info-3">
          {details.map((detail) => (
            <OrderDetailCard
              key={detail.id}
              title={detail.title}
              text={detail.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrderingDetails;