import React from "react";


export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
         
          <div className="footer-brand">
            <h2>Park Farms</h2>
            <p>Fresh from our farm to your table, every day.</p>
          </div>
  
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
  
          <div>
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
  
          
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          © 2026 Park Farms. All rights reserved.
        </div>
      </footer>
    );
  }
  