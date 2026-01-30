import { useState } from "react";

export default function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(product.img);

  return (
    <section className="product-details">
    
      <div className="product-images">
        <img src={activeImg} alt={product.name} className="main-img" />

        <div className="thumbs">
          {[product.img, product.img, product.img].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>
      </div>

      
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>

        <div className="qty-row">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <div className="actions">
          <button className="primary">Add to Cart</button>
          <button className="secondary">Subscribe & Save</button>
        </div>

        <details>
          <summary>Product Description</summary>
          <p>
            Fresh, farm-sourced dairy product crafted with care and quality.
          </p>
        </details>

        <details>
          <summary>Nutritional Information</summary>
          <p>Calories, fats, proteins and essential nutrients.</p>
        </details>
      </div>
    </section>
  );
}
