import React from "react";
import farmImage from "../assets/farm.jpg";

const About = () => {
  return (
    <div className="about-page" style={styles.container}>
      <h1 style={styles.heading}>About Park Farms</h1>

      <img
        src={farmImage}
        alt="Park Farms"
        style={styles.image}
      />

      <p style={styles.text}>
        Park Farms is committed to delivering fresh, healthy, and high-quality
        dairy products straight from our farms to your home. We believe that
        pure milk and natural dairy are the foundation of a healthy lifestyle.
      </p>

      <p style={styles.text}>
        Our farms follow ethical farming practices, ensuring the well-being of
        our animals and maintaining the highest standards of hygiene and
        sustainability. Every product is carefully processed to preserve
        freshness and nutrition.
      </p>

      <p style={styles.text}>
        From farm-fresh milk to creamy butter, yogurt, and cheese — Park Farms
        stands for trust, quality, and taste you can rely on every day.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#2e7d32",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    marginBottom: "25px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    marginBottom: "15px",
    color: "#444",
  },
};

export default About;
