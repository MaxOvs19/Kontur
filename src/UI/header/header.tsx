import React, { useState } from 'react';
import './header.scss';
// import Ecosystem from '../../components/EcosystemBusiness/Ecosystem';
import MenuBurger from '../menu-burger/menu-burger';

import ButtonUi from '../button/button-ui';
// import RequestForm from '../RequestForm/RequestForm';

import TmIcon from '../icons/telegram/tmIcon';
import InstIcon from '../icons/inst/instIcon';
import VkIcon from '../icons/vk/vkIcon';
import FbIcon from '../icons/fb/fbIcon';
import LogoKnr from '../icons/logo-kontur/logoKnr';



const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [modal, setModal] = useState(false);

  const rootClasses = ['menuMobail'];

  if (menuMobile === true) {
    rootClasses.push('active');
  } else {
    // rootClasses.splice(0, 'active');
  }

  const toggleModal = () => {
    setModal(true)
  }

  const activeMenu = () => {
    setMenuMobile(true);
  };

  const removeMenu = () => {
    setMenuMobile(false);
  };

  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <div className="header__logo">
            <MenuBurger onClick={activeMenu} />
            <LogoKnr/>
            <h2>Официальный партнер в ДНР</h2>
          </div>
          <nav className="header__nav">
            <li>071 501 53 53</li>
            <li>
              <a href="#map">Где мы находимся</a>
            </li>
          </nav>
        </div>
      </div>

      <div className={rootClasses.join(' ')}>
        <div className="menuMobail__content">
          <h2>071 501 53 53</h2>
          <h4>Где мы находимся</h4>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back"
            onClick={removeMenu}
          >
            <path
              d="M8.93026 13.8388L8.93047 13.8386L8.93477 13.8446C9.17936 14.1835 9.15259 14.664 8.85311 14.9719C8.52241 15.312 7.98505 15.312 7.65435 14.9719L1.14689 8.28092L1.1467 8.28111L1.14199 8.2755L1.06973 8.18944L1.06953 8.18961L1.06523 8.18366C0.820637 7.84471 0.847413 7.36425 1.14689 7.05633L7.65435 0.365318L7.65416 0.365129L7.65965 0.36025L7.74335 0.285956L7.74317 0.28575L7.74908 0.281239C8.08112 0.0279258 8.55258 0.0563109 8.85311 0.365318L8.8533 0.365131L8.85801 0.370736L8.93026 0.456798L8.93047 0.456625L8.93477 0.462582C9.17936 0.801527 9.15258 1.28199 8.85311 1.58991L8.78142 1.52019L8.85311 1.58991L2.9409 7.66862L8.85311 13.7473L8.8533 13.7472L8.85801 13.7528L8.93026 13.8388Z"
              fill="black"
              stroke="#263238"
              strokeWidth="0.2"
            />
          </svg>

          {/* <RequestForm
            visible={modal}
            setVisible={setModal}
            title={'электронную подпись'}
            titleMini={'Получить ЭЦП в Донецке'}
            type={'ElectrSign'}
          ></RequestForm> */}

          {/* <ButtonUi onClick={toggleModal}>Отправить заявку</ButtonUi> */}

          <p>Пишите нам!</p>
          <div>
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
          </div>
        </div>
      </div>
      {/* <Ecosystem /> */}
    </div>
  );
};

export default Header;
