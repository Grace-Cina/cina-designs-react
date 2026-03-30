import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import OrderingDetails from '../components/OrderingDetails';
import '../styles/Shop.css';

import craftBackground from '../images/craft-background.png';
import ornament from '../images/ornament.jpg';
import wreathSash from '../images/zoomed-in-wreath-sash.jpg';
import starwarsMilestone from '../images/starwars-milestone.jpg';
import calendar from '../images/calendar.jpg';
import woodenNurserySign from '../images/wooden-nursery-sign.jpg';
import sweater from '../images/sweater.jpg';
import cuttingBoards from '../images/cutting-boards.jpg';
import firstDay from '../images/first-day.jpg';

function Shop() {
  const orderDetails = [
    {
      id: 1,
      title: 'Personalization',
      text: 'Add names, dates, colors, or special messages to most items.'
    },
    {
      id: 2,
      title: 'Processing Time',
      text: 'Most custom orders are completed within 3–5 business days. Rush options may be available upon request.'
    },
    {
      id: 3,
      title: 'Packaging',
      text: 'Gift-ready packaging available upon request for an additional fee.'
    }
  ];

  return (
    <main>
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${craftBackground})` }}
        ></div>

        <div className="hero-overlay">
          <div className="card">
            <h1>Shop Handmade Creations</h1>
            <p>Explore personalized décor, keepsakes, and thoughtful gifts</p>
          </div>
        </div>
      </section>

      <section className="toolbar">
        <div className="toolbar-inner">
          <div>All Products</div>
          <div>Filter ▼</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-4">
            <ProductCard
              image={ornament}
              title="Personalized Ornament"
              price="$15.00"
              category="Holiday Decor"
              material="Wood and ribbon"
              occasion="Christmas"
              description="A custom ornament perfect for celebrating special holiday memories."
            />

            <ProductCard
              image={wreathSash}
              title="Custom Wreath Sash"
              price="$20.00"
              category="Home Decor"
              material="Fabric"
              occasion="Seasonal"
              description="A personalized wreath sash that adds charm to your front door décor."
            />

            <ProductCard
              image={starwarsMilestone}
              title="Monthly Milestone Set"
              price="$40.00"
              category="Baby Keepsakes"
              material="Wood"
              occasion="Baby Milestones"
              description="A themed monthly milestone set to capture each month of baby’s first year."
            />

            <ProductCard
              image={calendar}
              title="Acrylic Calendar"
              price="$100.00"
              category="Organization"
              material="Acrylic"
              occasion="Everyday Use"
              description="A reusable acrylic calendar that keeps your schedule stylish and organized."
            />

            <ProductCard
              image={woodenNurserySign}
              title="Wooden Nursery Sign"
              price="$85.00"
              category="Nursery Decor"
              material="Wood"
              occasion="Baby Shower"
              description="A custom wooden sign that adds a warm and personal touch to any nursery."
            />

            <ProductCard
              image={sweater}
              title="Hand Stitched Sweater"
              price="$50.00"
              category="Apparel"
              material="Cotton blend"
              occasion="Gift Giving"
              description="A cozy hand stitched sweater customized for a thoughtful and unique gift."
            />

            <ProductCard
              image={cuttingBoards}
              title="Personalized Cutting Board"
              price="$40.00"
              category="Kitchen Decor"
              material="Wood"
              occasion="Wedding Gift"
              description="A personalized cutting board that is both practical and beautiful for any kitchen."
            />

            <ProductCard
              image={firstDay}
              title="First Day Milestone Board"
              price="$45.00"
              category="School Keepsakes"
              material="Wood and vinyl"
              occasion="Back to School"
              description="A milestone board made to celebrate and remember each first day of school."
            />
          </div>
        </div>
      </section>

      <OrderingDetails details={orderDetails} />

      <section className="cta">
        <div className="wrap">
          <h2>Let’s Create Something Special</h2>
          <p className="sub">Custom designs made with love for every occasion</p>
          <div className="btn-row">
            <Link className="btn" to="/contact">Start a Custom Order</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;