import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="headerLogo">
      <Link to="/">Taniti Travel Site</Link>
    </div>
    <nav className="headerNav">
      <ul className="headerNavLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Food">Food</Link></li>
        <li><Link to="/Transportation">Transportation</Link></li>
        <li><Link to="/Entertainment">Entertainment</Link></li>
        <li><Link to="/Lodging">Lodging</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
