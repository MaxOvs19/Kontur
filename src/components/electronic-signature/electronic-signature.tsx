import React, { useState } from 'react'

import Button from '../common/button/button'
import RequestForm from '../common/request-form/request-form'

import flDriveFon from '../../assets/img/systemBusiness/flDriveFon.png'
import lineFon from '../../assets/img/systemBusiness/lineFon.png'

import './electronic-signature.scss'

const ElectronicSignature = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <div className='electronic-signature__title'>
        <h1>Электронная подпись в ДНР и ЛНР | Получить ЭЦП</h1>
        <p>
          Удостоверяющий центр выдает сертификаты электронной подписи для
          организаций и частных лиц.
        </p>
      </div>

      <div className='electronic-signature__map'>
        <iframe
          id='map'
          title='map'
          src='https://yandex.ru/map-widget/v1/-/CCUfuIfY0D'
          width='670px'
          height='431'
        ></iframe>
        <div className='electronic-signature__map_address'>
          <h2>Официальный партнер в ДНР и ЛНР</h2>
          <p className='name'>ИП Бондаренко Станислав Геннадиевич</p>

          <h4>Адрес:</h4>
          <p>ДНР, г.Донецк, ул. Мира Проспект, 17, 9 этаж, 95 офис</p>

          <h4>Контакты</h4>
          <ul>
            <li>
              <a href='tel:+79495035151'>+7 949 503 51 51</a>
            </li>
            <li>
              <a href='mailto:office@edoldnr.ru'>office@edoldnr.ru</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='electronic-signature__text'>
        <div className='description'>
          <div className='description__text'>
            <p>
              С 1 января 2022 года первым лицам организаций и ИП нужно получать
              новые сертификаты электронной подписи от удостоверяющего центра
              ФНС (УЦ ФНС). <br />
              Посетите один из наших офисов, где находится доверенный партнер,
              подтвердите личность и выпустите свой сертификат. Мы установим
              сертификат и настроим компьютер для работы с электронной подписью.
            </p>
          </div>
          <div className='description__services'>
            <div className='white'>Для руководителей и ИП</div>
            <div className='white'>Для физических лиц</div>
            <div className='white'>Зарегистрировать ООО или ИП</div>
            <div className='white'>Для Госуслуг</div>
            <div className='white'>Оформить недвижимость в собственность</div>
          </div>
          <div className='description__text'>
            <p>
              Квалифицированная электронная подпись с базовым набором
              возможностей для решения бизнес-задач. Она нужна, чтобы
              взаимодействовать с контролирующими органами и их информационными
              системами:
            </p>
            <ul>
              <li>сайт ФНС nalog.ru;</li>
              <li> ФГИС ЕИАС (ФАС России);</li>
              <li>Госуслуги;</li>
              <li>Федресурс (ЕФРСДЮЛ и ЕФРСБ);</li>
              <li>Электронный ПТС (ЭПТС).</li>
            </ul>

            <img src={flDriveFon} alt='#' className='description__img_drive' />
            <img src={lineFon} alt='#' className='description__img_line' />
          </div>
        </div>
      </div>

      <div className='electronic-signature__request'>
        <Button onClick={() => setModal(true)}>Отправить заявку</Button>
        <p>Оставьте заявку, и мы подберем подпись под ваши задачи</p>
      </div>

      <RequestForm
        visible={modal}
        setVisible={setModal}
        title={'электронную подпись'}
        titleMini={'Получить ЭЦП в ДНР и ЛНР'}
        type={'ElectronicSignature'}
      ></RequestForm>
    </div>
  )
}

export default ElectronicSignature
