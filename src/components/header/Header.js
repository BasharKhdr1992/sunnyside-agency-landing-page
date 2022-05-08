import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import arrowDown from '../../images/icon-arrow-down.svg';
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <header>
        <h1 className="header-text">We are creatives</h1>
      </header>
      <img
        src={arrowDown}
        className="arrow-down"
        alt="header icon arrow down"
      />
    </div>
  );
};

export default Header;
