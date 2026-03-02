import { useState } from "react";
import "./Menu.css";

function Menu({ addToCart }) {

  const [category, setCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      name: "Espresso",
      price: 120,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",
      desc: "Strong and rich espresso made from freshly roasted beans."
    },
    {
      name: "Cappuccino",
      price: 180,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      desc: "Creamy cappuccino with perfect milk foam."
    },
    {
      name: "Latte",
      price: 200,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
      desc: "Smooth latte with steamed milk and espresso."
    },
    {
      name: "Cold Coffee",
      price: 220,
      category: "cold",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
      desc: "Refreshing cold coffee blended with ice cream."
    },
    {
      name: "Mocha",
      price: 210,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      desc: "Chocolate flavored coffee with whipped cream."
    },
    {
      name: "Iced Americano",
      price: 190,
      category: "cold",
      image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
      desc: "Cold and bold Americano served with ice."
    },
    {
      name: "Chocolate Cake",
      price: 150,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      desc: "Soft chocolate cake with rich cocoa flavor."
    },
    {
      name: "Croissant",
      price: 130,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      desc: "Fresh buttery croissant baked every morning."
    }
  ];

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <section className="menu" id="menu">

      <h2>Our Menu</h2>

      {/* Filter Buttons */}
      <div className="menu-filters">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("coffee")}>Coffee</button>
        <button onClick={() => setCategory("cold")}>Cold Drinks</button>
        <button onClick={() => setCategory("snacks")}>Snacks</button>
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <div
            className="menu-card"
            key={index}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h3>{selectedItem.name}</h3>
            <p className="price">{selectedItem.price}</p>
            <p>{selectedItem.desc}</p>
            <button
              onClick={() => {
                addToCart(selectedItem);
                setSelectedItem(null);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Menu;