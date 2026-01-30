import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.message) {
      alert(" Registration Successful!");
      navigate("/"); 
    } else {
      alert(" Registration Failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>

      <form onSubmit={handleRegister} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          style={styles.input}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button style={styles.button}>Register</button>
      </form>

      
      <p style={styles.text}>
        Already have an account?{" "}
        <Link to="/" style={styles.link}>
          Login
        </Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    background: "#f9fafb",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "25px",
    fontWeight: "bold",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px",
    background: "#fff",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#ff5722",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },

  text: {
    marginTop: "18px",
    fontSize: "0.95rem",
  },

  link: {
    color: "#ff5722",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

