import React, { useState } from 'react'
import { openInNewTab } from '../../utils'

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

  menuMobile
    ? rootClasses.push('active')
    : rootClasses.splice(0, rootClasses.indexOf('active'))

  return (
    <div>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__logo'>
            <MenuBurger onClick={() => setMenuMobile(true)} />
            <LogoKontur />
            <h2>Официальный партнер в ДНР и ЛНР</h2>
          </div>
          <nav className='header__nav'>
            <li>
              <a href='tel:+79495015353'>+7 949 501 53 53</a>
            </li>
            <li>
              <a href='#map'>Где мы находимся?</a>
            </li>
          </nav>
        </div>
      </div>

      <div className={rootClasses.join(' ')}>
        <div className='menu-mobile__content'>
          <h2>
            <a href='tel:+79495015353'>+7 949 501 53 53</a>
          </h2>
          <BackArrow onClick={() => setMenuMobile(false)} />
          <RequestForm
            visible={modal}
            setVisible={setModal}
            title={'электронную подпись'}
            titleMini={'Получить ЭЦП в ДНР и ЛНР'}
            type={'ElectronicSignature'}
          ></RequestForm>
          <Button
            onClick={() => openInNewTab('https://kontur.ru/products?p=z07597')}
          >
            Отправить заявку
          </Button>
          <p>Пишите нам!</p>
          <div>
            <a href='https://t.me/edo_ldnr' target='_blank' rel='noreferrer'>
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
