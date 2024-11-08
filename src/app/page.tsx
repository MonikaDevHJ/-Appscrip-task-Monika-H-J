"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/main/Main"

export default function Component() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");



  return (
    <div className="container">

      {/* Nvarbar Started */}
      <Navbar />
      {/* Navbar Ended */}

     
       {/* main started */}
      <Main/>
      {/* main Ended */}





      <footer className="footer">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="footer-section">
            <h4>CURRENCY</h4>
            <p>USD</p>
          </div>
          <div className="footer-section">
            <h4>mettā muse</h4>
            <Link href="/about">About</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/artisans">Artisans</Link>
            <Link href="/boutiques">Boutiques</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/eu-compliance">EU Compliance Docs</Link>
          </div>
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <Link href="/orders">Orders & Shipping</Link>
            <Link href="/join">Join/Login as a Seller</Link>
            <Link href="/payment">Payment & Pricing</Link>
            <Link href="/returns">Return & Refunds</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
