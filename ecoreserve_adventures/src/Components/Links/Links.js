import React from 'react';
import './Links.css';

function Links() {
  return (
    <nav className="navbar-link">
      <ul className="navbar-links">
        <li><a href="#login"><i className="fas fa-sign-in-alt"></i> LOGIN</a></li>
        <li><a href="#region">MY REGION: GLOBAL</a></li>
        <li><a href="#account"><i className="fas fa-user"></i> MY ACCOUNT</a></li>
        <li><a href="#basket"><i className="fas fa-shopping-basket"></i> MY BASKET <span style={{ color: "orange" }}>(0)</span></a></li>
      </ul>
    </nav>
  );
}

export default Links;
