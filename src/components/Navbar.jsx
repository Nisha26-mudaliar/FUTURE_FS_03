import "./Navbar.css";

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="navbar">
      <div className="logo">Brew Haven Café</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>

        <li>
          <div className="cart" onClick={openCart}>
            🛒 {cartCount}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;