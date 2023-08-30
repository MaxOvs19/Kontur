import React, { useState } from 'react'
import './extern.scss'

import Button from '../common/button/button'
import RequestForm from '../common/request-form/request-form'

import externBig from '../../assets/img/icons/externBig.png'
import bg_extern from '../../assets/img/extern/bg-extern.png'

const Extern = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className='extern' id='externLink'>
      <div className='extern__title'>
        <h1>Все для отчетности в ДНР и ЛНР | Подключи сейчас</h1>
        <p>
          Отчитывайтесь в контролирующие органы вовремя, запрашивайте акты
          сверки, получайте требования и уведомления. Формы отчетов в наших
          сервисах всегда актуальны, встроенная проверка на ошибки поможет сдать
          отчеты с первого раза, техподдержка на связи 24/7.
        </p>
      </div>
      <div className='extern__body'>
        <div className='text'>
          <div className='text__title'>
            <img src={externBig} alt='#' />
            <h2>Экстерн</h2>
          </div>
          <p>
            Система для подготовки, проверки и отправки отчетности через
            интернет. Подходит малому, среднему и крупному бизнесу,
            бухгалтерским фирмам, бухгалтерам-фрилансерам и самозанятым.
          </p>

          <Button className={'text__btn'} onClick={() => setModal(true)}>
            Отправить заявку
          </Button>
        </div>
        <img src={bg_extern} alt='#' className='bg-extern' />
      </div>

      <RequestForm
        visible={modal}
        setVisible={setModal}
        title={'подключение Контур.Экстерн'}
        titleMini={'Все для отчетности в ДНР и ЛНР'}
        type={'Extern'}
      ></RequestForm>
    </div>
  )
}

export default Extern
