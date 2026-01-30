import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import farm from "../assets/farm.jpg";
import React from "react";


export default function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }
    
useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);

    setShowPopup(true);
    setEmail("");

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
 
      <section
        className="hero"
        style={{ backgroundImage: `url(${farm})` }}
      >
        <div className="hero-overlay">
          <h1>Freshness from Our Farm to Your Table</h1>
          <button onClick={() => navigate("/products")}>
            Shop Our Products →
          </button>
        </div>
      </section>

    
      <section className="section">
        <h2 className="section-title">Our Featured Dairy Delights</h2>
        <div className="grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>


      <section className="section story-layout">
        <div className="story-text">
          <h2>Our Story: From Pasture to Plate</h2>
          <p>
            At Park Farms, our journey began with a simple belief: the freshest
            dairy products come from happy cows and healthy land. We practice
            sustainable farming methods, ensuring ethical care for our animals
            and exceptional quality in every product.
          </p>
        </div>

        <div className="story-image">
          <img src={farm} alt="Park Farms" />
        </div>
      </section>


      <section className="section testimonials">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Park Farms milk is the freshest and most delicious I’ve ever
              tasted. My family loves it.”
            </p>
            <span>— Sarah M.</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Their artisanal cheddar cheese is a game-changer. Rich flavor and
              excellent quality every time.”
            </p>
            <span>— David P.</span>
          </div>
        </div>
      </section>

   
      <section className="section newsletter">
        <h2>Stay Fresh with Park Farms News</h2>
        <p>
          Sign up for our newsletter to get the latest updates on new products,
          farm stories, and exclusive offers.
        </p>

        <div style={styles.subscribeBox}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSubscribe} style={styles.button}>
            Subscribe
          </button>
        </div>
      </section>

   
      {showPopup && (
        <div style={styles.popup}>
          You are subscribed!
        </div>
      )}
    </>
  );
}

const styles = {
  subscribeBox: {
    marginTop: "20px",
    textAlign: "center",
  },
  input: {
    padding: "12px",
    width: "260px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
  popup: {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "15px 25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    fontWeight: "500",
    zIndex: 1000,
  },
};
