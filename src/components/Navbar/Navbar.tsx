import React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import "../app/styles.css";
import "./Navbarstyles.css"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className="header">
        {/* Left-side icon */}
        <div className="left-image">
          <Image
            src="/LogoNav_img.svg"
            alt="Left Side Icon"
            className="left-icon"
            width={35.61}
            height={35.66}
          />
        </div>

        {/* Centered logo with links below */}
        <div className="center-content">
          <div className="logo-text">LOGO</div>

          {/* Navigation links */}
          <div className={`nav-links ${menuActive ? "active" : ""}`}>
            <Link href="/shop">SHOP</Link>
            <Link href="/skills">SKILLS</Link>
            <Link href="/stories">STORIES</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT US</Link>
          </div>
        </div>

        {/* Right-side icons */}
        <nav className="icon-nav">
          <Image
            src="/search-normalnav_img.svg"
            alt="Search"
            className="nav-icon"
            width={24}
            height={24}
          />
          <Image
            src="/heartsybmbol.svg"
            alt="Favorites"
            className="nav-icon"
            width={24}
            height={24}
          />
          <Image
            src="/shopping-bagnav_img.svg"
            alt="Cart"
            className="nav-icon"
            width={24}
            height={24}
          />
          <Image
            src="/profilenav_img.svg"
            alt="Profile"
            className="nav-icon"
            width={24}
            height={24}
          />
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
