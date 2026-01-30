import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert(" Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button style={styles.button}>Login</button>
      </form>

      <p style={styles.text}>
        New User?{" "}
        <Link to="/register" style={styles.link}>
          Create an Account
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
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#ff5722",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
  text: {
    marginTop: "20px",
    fontSize: "0.95rem",
  },
  link: {
    color: "#ff5722",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
