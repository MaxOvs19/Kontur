import React from 'react';
import Ecosystem from '../../components/EcosystemBusiness/Ecosystem';
import MenuBurger from '../MenuBurger/MenuBurger';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <MenuBurger />
          <img src={require('../../assets/img/header/konturLogo.png')} alt="#" />
          <h2>Официальный партнер в ДНР</h2>
        </div>
        <nav className="header__nav">
          <li>071 501 53 53</li>
          <li>Где мы находимся</li>
        </nav>
      </div>
      <Ecosystem />
    </div>
  );
};

export default Header;
