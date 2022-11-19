import React from 'react';
import Ecosystem from '../EcosystemBusiness/Ecosystem';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <img src={require('../../assets/img/header/konturLogo.png')} alt="#" />
          <h2>Официальный партнер в ДНР</h2>
        </div>
        <nav className="header__nav">
          <li>Техподдержка</li>
          <li>Где мы находимся</li>
        </nav>
      </div>
      <Ecosystem />
    </div>
  );
};

export default Header;
