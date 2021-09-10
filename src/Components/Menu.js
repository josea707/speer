import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
const Menu = ({ AdittionalMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className='header-row'>
      <div className='menu-container'>
        <div
          className={
            openMenu
              ? 'menu-container__circle open-menu'
              : 'menu-container__circle close-menu'
          }
        ></div>
        <div
          className='menu-container__icon'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className='lines'></div>
          <div className='lines'></div>
          <div className='lines'></div>
          <div className='relative-position__navigation'>
            <ul
              className={
                openMenu ? 'navigation show-text' : 'navigation hide-text'
              }
            >
              <li className='nav-text'>WHAT IS IT</li>
              <li className='nav-text'>PERKS</li>
              <Link to='/pricing'>
                <li className='nav-text'>PRICING</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='menu-container__title'>
          <Logo />
        </div>
      </div>
      {AdittionalMenu && <AdittionalMenu />}
    </header>
  );
};

export default Menu;
