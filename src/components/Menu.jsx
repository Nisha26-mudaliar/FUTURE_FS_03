import "./Menu.css";

function Menu() {
  const menuItems = [
    { name: "Espresso", price: "₹120" },
    { name: "Cappuccino", price: "₹180" },
    { name: "Latte", price: "₹200" },
    { name: "Cold Coffee", price: "₹220" },
    { name: "Chocolate Brownie", price: "₹150" },
    { name: "Veg Sandwich", price: "₹160" },
  ];

  return (
    //<section id="menu" className="menu">
    <section id="menu" data-aos="zoom-in">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;