import OfferCard from './OfferCard';

function WhatWeOffer({ offers }) {
  return (
    <section className="section center">
      <div className="wrap">
        <h2>What We Offer</h2>

        <div className="grid-3">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              image={offer.image}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;