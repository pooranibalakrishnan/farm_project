import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // ✅ NavLink Style
  const navStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    paddingBottom: "4px",
    color: isActive ? "#ff5722" : "#333",
    borderBottom: isActive ? "2px solid #ff5722" : "none",
    transition: "0.2s",
  });

  return (
    <nav style={styles.navbar}>
      {/* ✅ Left Logo Section */}
      <div style={styles.left}>
        <img src={logo} alt="Park Farms" style={styles.logo} />
        <h2 style={styles.brand}>Park Farms</h2>
      </div>

      {/* ✅ Center Links */}
      <div style={styles.center}>
        <NavLink to="/home" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/products" style={navStyle}>
          Products
        </NavLink>

        <NavLink to="/about" style={navStyle}>
          About
        </NavLink>

        <NavLink to="/cart" style={navStyle}>
          Cart
        </NavLink>
      </div>

      <div style={styles.right}>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}


const styles = {
  navbar: {
    height: "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 50px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  logo: {
    height: "100px",
    width: "100px",
    objectFit: "contain",
  },

  brand: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ff5722",
  },

  center: {
    display: "flex",
    gap: "30px",
  },

  right: {
    display: "flex",
    alignItems: "center",
  },

  logoutBtn: {
    padding: "10px 18px",
    backgroundColor: "#ff5722",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
