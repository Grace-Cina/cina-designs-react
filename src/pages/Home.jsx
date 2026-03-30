import { Link } from 'react-router-dom';
import '../styles/Home.css';
import craftBackground from '../images/craft-background.png';
import wreathSash from '../images/wreath-sash.jpg';
import ornaments from '../images/ornaments.jpg';
import monthlyMilestones from '../images/monthly-milestones.jpg';
import cuttingBoards from '../images/cutting-boards.jpg';
import cinaEvent from '../images/cina-event.jpg';
import OurProducts from '../components/OurProducts';

function Home() {
  const homeProducts = [
    {
      id: 1,
      image: wreathSash,
      title: 'Wreath Sashes',
      extraClass: ''
    },
    {
      id: 2,
      image: ornaments,
      title: 'Ornaments',
      extraClass: ''
    },
    {
      id: 3,
      image: monthlyMilestones,
      title: 'Monthly Milestones',
      extraClass: 'milestones'
    },
    {
      id: 4,
      image: cuttingBoards,
      title: 'Engraved Cutting Boards',
      extraClass: ''
    }
  ];

  return (
    <main>
      <section className="hero banner-hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${craftBackground})` }}
        ></div>

        <div className="hero-overlay">
          <div className="card">
            <h1>Handcrafted Designs Made with Love</h1>
            <p>
              Custom décor and keepsakes crafted with care for life’s most special moments.
            </p>

            <div className="btn-row">
              <Link className="btn" to="/contact">Contact Us</Link>
              <Link className="btn" to="/gallery">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>About Cina Designs & Events</h2>

          <p>
            Cina Designs & Events is a mother-and-daughter-run small business dedicated to bringing inspiration
            to its unique, handcrafted, and personalized designs. We specialize in custom décor and keepsakes for
            homes, weddings, and life’s most meaningful moments.
          </p>

          <p>
            Every piece is created with pride, care, and attention to detail, allowing customers to choose finishes
            that match their vision. Our website showcases a gallery of past projects, choose from beautiful pre-made
            items, and offers inspiration for custom pieces designed with creativity, warmth, and family at heart.
          </p>
        </div>
      </section>

      <OurProducts products={homeProducts} />

      <section className="hero" style={{ minHeight: '280px' }}>
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${cinaEvent})` }}
        ></div>
      </section>

      <section className="cta">
        <h2>Let’s Create Something Special</h2>
        <p className="sub">Custom designs made with love for every occasion</p>
        <Link className="btn" to="/contact">Contact Us</Link>

        <div style={{ marginTop: '12px' }}>
          <div>Cina Designs & Events</div>
          <div>
            Handcrafted with
            <br />
            love
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;