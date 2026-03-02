import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">

      <div className="hero-content">
        <h1>Welcome to Brew Haven Café</h1>

        <p>
          Freshly brewed coffee, cozy ambiance, and the perfect
          place to relax or work.
        </p>

        <a href="#menu" className="hero-btn">Explore Menu</a>
      </div>

    </section>
  );
}

export default Home;