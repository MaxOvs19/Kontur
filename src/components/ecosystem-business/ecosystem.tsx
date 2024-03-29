import React from 'react'
import './ecosystem.scss'

import tableLaptop from '../../assets/img/header/tableLaptop.png'
import eagle from '../../assets/img/header/eagle.png'
import bookkeeping from '../../assets/img/icons/bookkeeping.png'
import medal from '../../assets/img/icons/medal.png'
import diadoc from '../../assets/img/icons/diadoc.png'
import extern from '../../assets/img/icons/extern.png'
import greenTick from '../../assets/img/icons/greenTick.png'

const Ecosystem = () => {
  return (
    <div className='ecosystem'>
      <div className='ecosystem__title'>
        <h2>Экосистема продуктов для бизнеса</h2>
      </div>
      <div className='ecosystem__box'>
        <div className='icons icons_title'>
          <img src={greenTick} alt='#' />
          <p>ДНР и ЛНР</p>
        </div>
        <div className='table'>
          <div className='icons'>
            <img src={extern} alt='#' />
            <a href='#extern'>Экстерн</a>
          </div>
          <div className='icons'>
            <img src={diadoc} alt='#' />
            <a href='#diadoc'>Диадок</a>
          </div>

          <img src={tableLaptop} alt='#' className='table__table' />
          <img src={eagle} alt='#' className='table__eagle' />
        </div>
        <div className='table'>
          <div className='icons'>
            <img src={medal} alt='#' />
            <a href='#electornicSignature'>ЭЦП</a>
          </div>
          <div className='icons'>
            <img src={bookkeeping} alt='#' />
            <a href='#bookKeeping'>Бухгалтерия</a>
          </div>
        </div>
      </div>
      <div className='ecosystem__services'>
        <div className='text'>
          <p>Электронная подпись</p>
          <br />
          <p>Самозанятость ДНР и ЛНР</p>
          <br />
          <p>Электронный документооборот</p>
        </div>
        <div className='text'>
          <p>Отчетность</p>
          <br />
          <p>Бухгалтерия онлайн</p>
          <br />
          <p>Ведение бизнеса ДНР и ЛНР</p>
        </div>
        <div className='text'>
          <p>Онлайн кассы</p>
          <br />
          <p>Проверка контрагентов</p>
          <br />
          <p>Сервис для ведения учета</p>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
