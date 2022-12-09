import React from 'react';

import FbIcon from '../icons/fb/fbIcon';
import InstIcon from '../icons/inst/instIcon';
import LogoKnr from '../icons/logo-kontur/logoKnr';
import TmIcon from '../icons/telegram/tmIcon';
import VkIcon from '../icons/vk/vkIcon';

import './footer.scss';


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__logo">
          <LogoKnr/>
          <h2>Официальный партнер в ДНР</h2>
        </div>
        <nav className="footer__nav">
          <li>071 501 53 53</li>
          <li>
            <a href="#facebook">
             <FbIcon/>
            </a>

            <a href="#vk">
              <VkIcon/>
            </a>

            <a href="#inst">
             <InstIcon/>
            </a>

            <a href="#telega">
              <TmIcon/>
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
