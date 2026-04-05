
import ProductPreviewCard from './ProductPreviewCard';


function OurProducts({ products }) {
  
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="center">Our Products</h2>

        <div className="grid-4">
          {products.map((product) => (
            <ProductPreviewCard
              key={product.id}
              image={product.image}
              title={product.title}
              extraClass={product.extraClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;