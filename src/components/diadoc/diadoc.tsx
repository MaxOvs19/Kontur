import React, { useState } from 'react'
import { openInNewTab } from '../../utils'

import Button from '../common/button/button'
import RequestForm from '../common/request-form/request-form'

import './diadoc.scss'

import diadocBg from '../../assets/img/diadoc/diadocBg.png'
import medalBlack from '../../assets/img/diadoc/medalBlack.png'
import timeClock from '../../assets/img/diadoc/timeClock.png'
import lineKontur from '../../assets/img/diadoc/lineKontur.png'
import iconKontur from '../../assets/img/diadoc/iconKontur.png'
import diadocBig from '../../assets/img/icons/diadocBig.png'

const Diadoc = () => {
  const [modalDiadoc, setModalDiadoc] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <div className='diadoc' id='diadocLink'>
      <div className='diadoc__title'>
        <h1>Электронный документооборот | Теперь и в ДНР и ЛНР</h1>
        <p>
          Документооборот с контрагентами. Получение и отправка юридически
          значимых документов без дублирования на бумаге. Входящие документы —
          бесплатно.
        </p>
      </div>
      <div className='diadoc__content'>
        <div className='text'>
          <div className='text__title'>
            <img src={diadocBig} alt='#' />
            <h2>Диадок</h2>
          </div>
          <div className='text__body'>
            <div className='medal'>
              <img src={medalBlack} alt='#' />
              <p>
                Электронные документы, подписанные КЭП, равны бумажным и не
                требуют дублирования на бумаге
              </p>
            </div>
            <div className='time'>
              <img src={timeClock} alt='#' />
              <p>
                Ускорьте подписание документа второй стороной. Документы
                приходят мгновенно.
              </p>
            </div>
          </div>
        </div>

        <img src={diadocBg} alt='#' className='diadoc__content_img' />

        <div className='diadoc__button'>
          <img src={lineKontur} alt='#' className='diadoc__content_line' />

          <RequestForm
            visible={modalDiadoc}
            setVisible={setModalDiadoc}
            title={'подключение Контур.Диадок'}
            titleMini={'Электронный документооборот в ДНР и ЛНР'}
            type={'Diadoc'}
          ></RequestForm>

          <Button
            className={'requestBtn'}
            onClick={() => openInNewTab('https://kontur.ru/diadoc?p=z07597')}
          >
            Отправить заявку
          </Button>
        </div>
      </div>
      <div className='diadoc__logo'>
        <div className='box__img'>
          <img src={iconKontur} alt='#' />
          <div className='text-logo'>
            <h2>ЭДО для маркетплейсов</h2>
            <p>
              Обменивайтесь документами с Ozon, Wildberries, Яндекс.Маркетом,
              KazanExpress, Lamoda и другими площадками через интернет.
            </p>
          </div>
        </div>

        <div className='box__text'>
          <Button
            className={'requestBtn'}
            onClick={() => openInNewTab('https://kontur.ru/market?p=z07597')}
          >
            Отправить заявку
          </Button>
          <ul>
            <li>Быстро разберетесь в интуитивно понятном интерфейсе сервиса</li>
            <li>Справитесь без дополнительных сотрудников</li>
            <li>
              Снизите риск ошибок в документах — сервис укажет на них и поможет
              исправить
            </li>
            <li>
              Сможете работать из любой точки мира — нужен только доступ в
              интернет
            </li>
          </ul>
        </div>
      </div>

      <RequestForm
        visible={modal}
        setVisible={setModal}
        title={'подключение ЭДО для маркетплейсов'}
        titleMini={'Электронный документооборот в ДНР и ЛНР'}
        type={'Diadoc'}
      ></RequestForm>
    </div>
  )
}

export default Diadoc
