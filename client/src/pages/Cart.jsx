import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // ✅ Calculate Total Amount
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Cart </h1>

      {/* ✅ Empty Cart */}
      {cart.length === 0 ? (
        <p style={styles.empty}>
          Your cart is empty. Add some products!
        </p>
      ) : (
        <>
          {/* ✅ Cart Items */}
          <div style={styles.cartList}>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img
                 src={`/src/assets/${item.image}`}
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  {/* ✅ Quantity Controls */}
                  <div style={styles.qty}>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      style={styles.qtyBtn}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      style={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>

                  {/* ✅ Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeBtn}
                  >
                    Remove ❌
                  </button>
                </div>

                {/* ✅ Item Total */}
                <h3 style={styles.itemTotal}>
                  ₹{item.price * item.quantity}
                </h3>
              </div>
            ))}
          </div>

          {/* ✅ Cart Summary */}
          <div style={styles.summary}>
            <h2>Total: ₹{total}</h2>

            <button
              style={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ✅ Styles */
const styles = {
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  empty: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "50px",
  },

  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  image: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  details: {
    flex: 1,
    marginLeft: "20px",
  },

  qty: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },

  qtyBtn: {
    width: "30px",
    height: "30px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "18px",
  },

  removeBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  itemTotal: {
    minWidth: "80px",
    textAlign: "right",
    color: "#ff5722",
  },

  summary: {
    marginTop: "30px",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  checkoutBtn: {
    marginTop: "15px",
    padding: "12px 25px",
    background: "#ff5722",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
