import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
  setCart((prevCart) => {
    const existing = prevCart.find((cartItem) => cartItem.name === item.name);

    if (existing) {
      return prevCart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...prevCart, { ...item, quantity: 1 }];
  });
};
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120
    });
  }, []);

  return (
    <div>

      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      <Home />

      <About />

      <Menu addToCart={addToCart} />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />

    </div>
  );
}

export default App;