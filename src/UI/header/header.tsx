import React, { useState } from 'react';
import './header.scss';
import Ecosystem from '../../components/ecosystem-business/ecosystem';
import MenuBurger from '../menu-burger/menu-burger';

import ButtonUi from '../button/button-ui';
import RequestForm from '../request-form/request-form';

import TmIcon from '../icons/telegram/tmIcon';
import InstIcon from '../icons/inst/instIcon';
import VkIcon from '../icons/vk/vkIcon';
import FbIcon from '../icons/fb/fbIcon';
import LogoKnr from '../icons/logo-kontur/logoKnr';
import BackArrow from '../icons/back-arrow/back-arrow';



const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [modal, setModal] = useState(false);

  const rootClasses = ['menuMobail'];

  if (menuMobile === true) {
    rootClasses.push('active');
  } else {
    let index:number;    
    index = rootClasses.indexOf('active');
    rootClasses.splice(0, index);
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
          <BackArrow onClickAdd={removeMenu}/>

          <RequestForm
            visible={modal}
            setVisible={setModal}
            title={'электронную подпись'}
            titleMini={'Получить ЭЦП в Донецке'}
            type={'ElectrSign'}
          ></RequestForm>

          <ButtonUi onClickBtn={toggleModal} >Отправить заявку</ButtonUi>

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
      <Ecosystem />
    </div>
  );
};

export default Header;
