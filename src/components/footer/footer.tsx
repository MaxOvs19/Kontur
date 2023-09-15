import React from 'react'

import LogoKontur from '../common/icons/logo-kontur/logoKontur'
import TelegramIcon from '../common/icons/telegram/telegramIcon'

import './footer.scss'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer__logo'>
          <LogoKontur />
          <h2>Официальный партнер в ДНР и ЛНР</h2>
        </div>
        <nav className='footer__nav'>
          <li>
            <a href='tel:+79495015353'>+7 949 501 53 53</a>
          </li>
          <li>
            <a href='https://t.me/edo_ldnr' target='_blank' rel='noreferrer'>
              <TelegramIcon />
            </a>
          </li>
        </nav>
      </div>
    </div>
  )
}

export default Footer
