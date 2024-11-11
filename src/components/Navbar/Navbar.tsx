import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbarstyles.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the menu visibility for mobile
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Toggle the dropdown visibility for languages
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
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

        {/* Language Dropdown */}
        <div className="dropdown-container">
          <button onClick={toggleDropdown} className="dropdown-button">
            ENG
            {/* Dropdown arrow icon */}
            <svg
              className={`dropdown-arrow ${showDropdown ? "open" : ""}`}
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3L5 7L9 3"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <p className="dropdown-item">English</p>
              <p className="dropdown-item">Spanish</p>
              <p className="dropdown-item">French</p>
            </div>
          )}
        </div>
      </nav>

      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
