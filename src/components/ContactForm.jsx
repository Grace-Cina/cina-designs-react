import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      occasion: '',
      message: ''
    });
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Send Us a Message</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="label-pill">Full Name</div>
          <input
            className="inp"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="label-pill">Email</div>
          <input
            className="inp"
            type="email"
            name="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="label-pill">Occasion</div>
          <select
            className="inp"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select an Option</option>
            <option value="Wedding">Wedding</option>
            <option value="Baby">Baby</option>
            <option value="Birthday">Birthday</option>
            <option value="Holiday">Holiday</option>
          </select>

          <div className="label-pill message-label">Message</div>
          <textarea
            className="inp textarea"
            name="message"
            placeholder="Tell us a little about what you're looking for…"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-footer">
          <button className="btn" type="submit">Send Message</button>
        </div>

        {submitted && (
          <p className="small-note">Thank you! Your message has been received.</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;