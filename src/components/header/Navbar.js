import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import './Navbar.css';
import Dropdown from './Dropdown';
import { useWindowSize } from './../../custom-hooks/useWindowSize';

const Navbar = () => {
  const [width] = useWindowSize();
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <nav className="navbar">
      <img src={logo} alt="sunnyside logo" />
      <div className="navbar-right">
        <button className="navlink collapse">About</button>
        <button className="navlink collapse">Services</button>
        <button className="navlink collapse">Porjects</button>
        <button className="navlink-active collapse">Contact</button>
        <img
          src={hamburger}
          onClick={toggleDropdown}
          className="mobile"
          alt="hamburger icon"
        />
        {dropdown && width < 900 && <Dropdown />}
      </div>
    </nav>
  );
};

export default Navbar;
