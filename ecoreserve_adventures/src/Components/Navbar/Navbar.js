import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">LOGO</a>
      </div>
      <ul className="navbar-items">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#adopt-orphan">Adopt an Orphan</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#get-involve">Get Involved</a></li>
        <li><a href="#social-feed">Social Feed</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#visiting">Visiting</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-adopt">Adopt</button>
        <button className="btn-donate">Donate</button>
      </div>
    </nav>
  );
}

export default Navbar;
