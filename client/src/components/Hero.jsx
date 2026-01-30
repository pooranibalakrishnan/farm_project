import { useNavigate } from "react-router-dom";
import farm from "../assets/farm.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${farm})` }}
    >
      <div className="hero-overlay">
        <h1>Freshness from Our Farm to Your Table</h1>
        <button onClick={() => navigate("/products")}>
          Shop Our Products
        </button>
      </div>
    </section>
  );
}
