import React, { useState } from 'react';
import '../../CSS/header/Header.css'; 
import Logo from "./Logo";
import NavigationLinks from './NavigationLinks';
import HamburgerMenu from './HamburgerMenu';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Logo />
      <div className="header-right">
        <NavigationLinks closeMenu={closeMenu} />
        <LanguageSwitcher />
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
