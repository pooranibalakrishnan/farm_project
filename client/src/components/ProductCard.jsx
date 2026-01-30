import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <div style={styles.card}>
        <img
          src={`/src/assets/${product.image}`}
          alt={product.name}
          style={ {height: '200px'}}
       
        />

        <h3>{product.name}</h3>
        <p>₹{product.price}</p>

        <button style={styles.button} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {showToast && (
        <div style={styles.toast}>
          ✅ {product.name} added to cart
        </div>
      )}
    </>
  );
};

const styles = {
  card: {
    padding: "20px",
    width: "250px",
    background: "white",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#ff5722",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "12px 18px",
    color: "white",
    borderRadius: "8px",
  },
};

export default ProductCard;
