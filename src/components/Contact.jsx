import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {

        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: ""
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);

      } else {
        alert("Failed to send message");
      }

    } catch (error) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    //<section id="contact" className="contact">
    <section id="contact" data-aos="zoom-in-up">

      {success && (
        <div className="toast">
          Message sent successfully ✅
        </div>
      )}

      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-left">
          <p>📍 Address: CG Road, Ahmedabad</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: info@brewhaven.com</p>
          <p>🕒 Hours: 9:00 AM – 10:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;