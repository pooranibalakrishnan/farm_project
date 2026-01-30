import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import React from "react";
import products from "../data/products";




export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    "Milk",
    "Yogurt",
    "Cheese",
    "Butter",
    "Ghee",
    "Ice Cream",
  ];


  let filteredProducts =
    activeCategory === "All"
      ? [...products]
      : products.filter(
          (p) => p.category === activeCategory
        );

 
  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      
      <div style={styles.topBar}>
        
        <div style={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...styles.filterBtn,
                ...(activeCategory === cat
                  ? styles.activeBtn
                  : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={styles.select}
        >
          <option value="default">
            Sort by Price
          </option>
          <option value="low-high">
            Price: Low to High
          </option>
          <option value="high-low">
            Price: High to Low
          </option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      {loading ? (
        <p style={{ textAlign: "center" }}>
          Loading products...
        </p>
      ) : filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No products found.
        </p>
      ) : (
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
}

const styles = {
  topBar: {
    paddingTop: "40px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
    gap: "15px",
  },
  filterBar: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: "500",
  },
  activeBtn: {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
  },
  select: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    cursor: "pointer",
    fontWeight: "500",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    justifyItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  },
};
