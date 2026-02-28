import "./About.css";

function About() {
  return (
    //<section id="about" className="about">
   <section id="about" className="about">
  <div className="about-content" data-aos="fade-right">
    <h2>About Us</h2>
    <p>Best coffee experience in town.</p>
  </div>


      <div className="about-container">
        <div className="about-text">
          <h2>About Brew Haven</h2>
          <p>
            At Brew Haven Café, we believe coffee is more than just a drink —
            it's an experience. Located in the heart of Ahmedabad, our café
            offers a cozy atmosphere where friends meet, ideas grow, and
            moments become memories.
          </p>
          <p>
            From freshly roasted beans to handcrafted beverages and delightful
            snacks, every cup we serve is made with passion and care.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe Interior"
          />
        </div>
      </div>
    </section>
  );
}

export default About;