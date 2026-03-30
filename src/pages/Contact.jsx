import '../styles/Contact.css';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <main>
      <section className="contact-wrap">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="sub">Tell us about your idea and we’ll bring it to life.</p>

        <div className="contact-grid">
          <ContactForm />

          <div className="touch-card">
            <h2 className="touch-title">Get in Touch</h2>
            <p><b>Location</b><br />York, SC 29745</p>
            <p><b>Phone</b><br />(803) 627-7837</p>
            <p><b>Email</b><br />cinadesignsandevents@gmail.com</p>
            <p><b>Business Name</b><br />Cina Designs &amp; Events</p>
          </div>
        </div>

        <div className="contact-brand">Cina Designs &amp; Events</div>
        <div className="contact-tagline">
          Handcrafted with
          <br />
          love
        </div>
      </section>
    </main>
  );
}

export default Contact;