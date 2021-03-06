import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import arrowDown from '../../images/icon-arrow-down.svg';
const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <h1 className="header-text">We are creatives</h1>
      <img
        src={arrowDown}
        className="arrow-down"
        alt="header icon arrow down"
      />
    </header>
  );
};

export default Header;
