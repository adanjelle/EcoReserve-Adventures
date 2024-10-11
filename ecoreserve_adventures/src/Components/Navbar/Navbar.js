import React from 'react';
import './Navbar.css';
import image2 from '../../Components/images/image2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={image2} style={{height:"85px", width:"85px",borderRadius:"50%"}} alt="Logo"/></Link>
      </div>
      <ul className="navbar-items">
        <li>
          <Link to="/project"> Projects<i className="fa fa-angle-down"></i></Link>
        </li>
        <li>
          <Link to="/adopt">Adopt an Orphan<i className="fa fa-angle-down"></i> </Link>
        </li>
        <li>
          <Link to="/new"> News<i className="fa fa-angle-down"></i></Link>
        </li>
        <li>
          <Link to="/get involve"> Get Involved<i className="fa fa-angle-down"></i></Link>
        </li>
        <li>
          <Link to="/social">Social Feed<i className="fa fa-angle-down"></i></Link>
        </li>
        <li>
          <Link to="/visiting"> Visiting<i className="fa fa-angle-down"></i></Link>
        </li>
        <li>
          <Link to="/about"> About<i className="fa fa-angle-down"></i></Link>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-adopt">Adopt</button>
        <button className="btn-donate">Donate</button>
      </div>
    </nav>
  );
}

export default Navbar;
