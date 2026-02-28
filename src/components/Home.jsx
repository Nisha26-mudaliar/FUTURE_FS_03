import "./Home.css";

function Home() {
  return (
    //<section id="home" className="home">
    <section id="home" className="home">
  <div className="home-content" data-aos="fade-up">
    <h1>Brew Haven</h1>
    <p>Fresh Coffee Everyday</p>
  </div>

    
      <div className="home-content">
        <h1>Welcome to Brew Haven Café</h1>
        <p>
          Freshly brewed coffee, cozy ambiance, and the perfect place to relax
          or work.
        </p>
        <a href="#menu" className="home-btn">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
}

export default Home;