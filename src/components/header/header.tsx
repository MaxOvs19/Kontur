import React, { useState } from 'react'

import Ecosystem from '../ecosystem-business/ecosystem'
import MenuBurger from '../common/menu-burger/menu-burger'
import Button from '../common/button/button'
import RequestForm from '../common/request-form/request-form'
import TelegramIcon from '../common/icons/telegram/telegramIcon'
import LogoKontur from '../common/icons/logo-kontur/logoKontur'
import BackArrow from '../common/icons/back-arrow/back-arrow'

import './header.scss'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const [modal, setModal] = useState(false)

  const rootClasses = ['menu-mobile']

  if (menuMobile) {
    rootClasses.push('active')
  } else {
    rootClasses.splice(0, rootClasses.indexOf('active'))
  }

  return (
    <div>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__logo'>
            <MenuBurger onClick={() => setMenuMobile(true)} />
            <LogoKontur />
            <h2>Официальный партнер в ДНР</h2>
          </div>
          <nav className='header__nav'>
            <li>
              <a href='tel:+79495035151'>+7 949 503 51 51</a>
            </li>
            <li>
              <a href='#map'>Где мы находимся</a>
            </li>
          </nav>
        </div>
      </div>

      <div className={rootClasses.join(' ')}>
        <div className='menu-mobile__content'>
          <h2>
            <a href='tel:+79495035151'>+7 949 503 51 51</a>
          </h2>
          <h4>Где мы находимся</h4>
          <BackArrow onClick={() => setMenuMobile(false)} />

          <RequestForm
            visible={modal}
            setVisible={setModal}
            title={'электронную подпись'}
            titleMini={'Получить ЭЦП в Донецке'}
            type={'ElectronicSignature'}
          ></RequestForm>
          <Button onClick={() => setModal(true)}>Отправить заявку</Button>
          <p>Пишите нам!</p>
          <div>
            <a href='#telegram'>
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <Ecosystem />
    </div>
  )
}

export default Header
