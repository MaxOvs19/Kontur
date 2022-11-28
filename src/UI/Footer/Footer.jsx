import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__logo">
          <img src={require('../../assets/img/header/konturLogo.png')} alt="#" />
          <h2>Официальный партнер в ДНР</h2>
        </div>
        <nav className="footer__nav">
          <li>071 501 53 53</li>
          <li>Где мы находимся</li>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
