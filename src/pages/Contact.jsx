import '../styles/Contact.css';

function Contact() {
  return (
    <main>
      <section className="contact-wrap">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="sub">Tell us about your idea and we’ll bring it to life.</p>

        <div className="contact-grid">
          <div className="form-card">
            <h2 className="form-title">Send Us a Message</h2>

            <form>
              <div className="form-grid">
                <div className="label-pill">Full Name</div>
                <input
                  className="inp"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />

                <div className="label-pill">Email</div>
                <input
                  className="inp"
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                />

                <div className="label-pill">Occasion</div>
                <select className="inp" name="occasion">
                  <option value="">Select an Option</option>
                  <option>Wedding</option>
                  <option>Baby</option>
                  <option>Birthday</option>
                  <option>Holiday</option>
                </select>

                <div className="label-pill message-label">Message</div>
                <textarea
                  className="inp textarea"
                  name="message"
                  placeholder="Tell us a little about what you're looking for…"
                ></textarea>
              </div>

              <div className="form-footer">
                <button className="btn" type="button">Send Message</button>
              </div>

              <p className="small-note">Form functionality will be added later.</p>
            </form>

            <div className="small-note">We typically respond within 1–2 business days.</div>
          </div>

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