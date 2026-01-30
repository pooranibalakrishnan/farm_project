import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // ✅ Address State
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  // ✅ Total Calculation
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ Handle Form Input
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // ✅ Place Order (Demo)
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !address.name ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {
      alert("⚠ Please fill all delivery address fields!");
      return;
    }

    alert("✅ Order Placed Successfully!");

    console.log("Delivery Address:", address);
    console.log("Cart Items:", cart);

    // ✅ Navigate back to home (later can go to Success Page)
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Checkout 🏠</h1>

      <div style={styles.layout}>
        {/* ✅ Address Form */}
        <div style={styles.box}>
          <h2 style={styles.title}>Delivery Address</h2>

          <form onSubmit={handlePlaceOrder}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              style={styles.input}
            />

            <button type="submit" style={styles.orderBtn}>
              Place Order ✅
            </button>
          </form>
        </div>

        {/* ✅ Order Summary */}
        <div style={styles.box}>
          <h2 style={styles.title}>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.summaryItem}>
                <p>
                  {item.name} × {item.quantity}
                </p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))
          )}

          <hr style={{ margin: "15px 0" }} />

          <h3 style={styles.total}>Total: ₹{total}</h3>
        </div>
      </div>
    </div>
  );
}

/* ✅ Styling */
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "50px auto",
    padding: "20px",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
  },

  box: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  title: {
    marginBottom: "20px",
    fontSize: "22px",
    color: "#ff5722",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  orderBtn: {
    width: "100%",
    padding: "12px",
    background: "#ff5722",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },

  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  total: {
    textAlign: "right",
    fontSize: "20px",
    fontWeight: "700",
  },
};
