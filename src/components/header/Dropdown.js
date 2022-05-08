import React from 'react';
import './Dropdown.css';
import Triangle from './Triangle';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown-link">About</button>
      <button className="dropdown-link">Services</button>
      <button className="dropdown-link">Porjects</button>
      <button className="dropdown-link-active">Contact</button>
      <Triangle />
    </div>
  );
};

export default Dropdown;
