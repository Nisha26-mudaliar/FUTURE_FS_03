import "./Cart.css";
import { useState } from "react";

function Cart({ cart, setCart, isOpen, setIsOpen }) {

  const [showConfirm, setShowConfirm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  setShowConfirm(true);
};

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

  return (
    <>
    {showConfirm && (
  <div className="confirm-overlay">
    <div className="confirm-box">
      <h3>Confirm Order</h3>
      <p>Are you sure you want to place this order?</p>

      <div className="confirm-buttons">
        <button 
          className="cancel-btn"
          onClick={() => setShowConfirm(false)}
        >
          Cancel
        </button>

        <button
  className="confirm-btn"
  onClick={() => {
    const id = Math.floor(Math.random() * 90000) + 10000;

    setOrderId(id);
    setShowConfirm(false);
    setOrderSuccess(true);
    setCart([]);

    setTimeout(() => {
      setOrderSuccess(false);
    }, 3000);
  }}
>
  Confirm Order
</button>
      </div>
    </div>
  </div>
)}
  {orderSuccess && (
  <div className="success-overlay">
    <div className="success-box">

      <div className="checkmark-circle">
        <div className="checkmark"></div>
      </div>

      <h2>Order Successful!</h2>

      <p>Order ID: #{orderId}</p>
      <p>Your coffee is being prepared ☕</p>

    </div>
  </div>
)}
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>}

      <div className={`cart-panel ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>

        <div className="cart-items">
  {cart.length === 0 ? (
    <p className="empty-cart">Your cart is empty</p>
  ) : (
    cart.map((item, index) => (
      <div key={index} className="cart-item">

        <div className="item-info">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>

        <div className="qty-controls">
          <button
            onClick={() => {
              const updatedCart = [...cart];
              if (updatedCart[index].quantity > 1) {
                updatedCart[index].quantity -= 1;
                setCart(updatedCart);
              }
            }}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => {
              const updatedCart = [...cart];
              updatedCart[index].quantity += 1;
              setCart(updatedCart);
            }}
          >
            +
          </button>
        </div>

        <button className="remove-btn" onClick={() => removeItem(index)}>
          ✕
        </button>

      </div>
    ))
  )}
</div>

        <div className="cart-footer">
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;