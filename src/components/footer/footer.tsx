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
          <h2>Официальный партнер в ДНР</h2>
        </div>
        <nav className='footer__nav'>
          <li>
            <a href='tel:+79495035151'>+7 949 503 51 51</a>
          </li>
          <li>
            <a href='#telegram'>
              <TelegramIcon />
            </a>
          </li>
        </nav>
      </div>
    </div>
  )
}

export default Footer
