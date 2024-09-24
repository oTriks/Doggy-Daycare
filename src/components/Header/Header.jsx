import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../CSS/header/Header.css'; 
import Logo from "./Logo";
import NavigationLinks from './NavigationLinks';
import LanguageSwitcher from './LanguageSwitcher';
import HamburgerMenu from './HamburgerMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { t } = useTranslation(); 
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
