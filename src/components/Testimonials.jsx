import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Aarav Patel",
      text: "Best coffee in Ahmedabad! The ambiance is so cozy and relaxing."
    },
    {
      name: "Riya Shah",
      text: "Loved the cappuccino and brownie. Definitely coming again!"
    },
    {
      name: "Mehul Desai",
      text: "Perfect place for meetings and casual hangouts."
    }
  ];

  return (
    //<section id="testimonials" className="testimonials">
    <section id="testimonials" data-aos="fade-left">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;