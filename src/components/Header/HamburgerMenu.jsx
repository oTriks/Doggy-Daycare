
import React from 'react';
import '../../CSS/header/HamburgerMenu.css'; 

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <button className="hamburger" onClick={toggleMenu}>
      &#9776;
    </button>
  );
};

export default HamburgerMenu;
