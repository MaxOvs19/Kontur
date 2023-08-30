import React, { useState } from 'react'
import './bk-keeping.scss'

import Button from '../common/button/button'
import RequestForm from '../common/request-form/request-form'

import bgBk from '../../assets/img/book-keeping/bgBk.png'
import bkBig from '../../assets/img/icons/bkBig.png'

const BookKeeping = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className='wrapper'>
      <div className='book-keeping' id='bkLink'>
        <div className='book-keeping__body'>
          <img src={bgBk} alt='#' />
          <div className='text'>
            <div className='text__title'>
              <img src={bkBig} alt='#' />
              <h2>Бухгалтерия</h2>
            </div>
            <p>
              Сервис для ведения учета, расчета и уплаты налогов, работы с
              сотрудниками и отправки отчетности в контролирующие органы через
              интернет.
            </p>

            <Button className={'text__btn'} onClick={() => setModal(true)}>
              Отправить заявку
            </Button>
          </div>
        </div>

        <RequestForm
          visible={modal}
          setVisible={setModal}
          title={'подключение Контур.Бухгалтерия'}
          titleMini={'Все для отчетности в Донецк'}
          type={'BookKeeping'}
        ></RequestForm>
      </div>
    </div>
  )
}

export default BookKeeping
