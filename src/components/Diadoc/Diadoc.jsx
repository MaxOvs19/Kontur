import React from 'react';
import ButtonUi from '../../UI/button/ButtonUi';
import './Diadoc.scss';

const Diadoc = () => {
  return (
    <div className="diadoc" id="diadocLink">
      <div className="diadoc__title">
        <h1>Электронный документооборот || Теперь и в ДНР</h1>
        <p>
          Документооборот с контрагентами. Получение и отправка юридически значимых документов без
          дублирования на бумаге. Входящие документы — бесплатно.
        </p>
      </div>
      <div className="diadoc__content">
        <div className="text">
          <div className="text__title">
            <img src={require('../../assets/img/icons/diadocBig.png')} alt="#" />
            <h2>Диадок</h2>
          </div>
          <div className="text__body">
            <div className="medal">
              <img src={require('../../assets/img/diadoc/medalBlack.png')} alt="#" />
              <p>
                Электронные документы, подписанные КЭП, равны бумажным и не требуют дублирования на
                бумаге
              </p>
            </div>
            <div className="time">
              <img src={require('../../assets/img/diadoc/timeClock.png')} alt="#" />
              <p>Ускорьте подписание документа второй стороной. Документы приходят мгновенно.</p>
            </div>
          </div>
        </div>
        <img
          src={require('../../assets/img/diadoc/diadocBg.png')}
          alt="#"
          className="diadoc__content_img"
        />

        <div className="diadoc__button">
          <img
            src={require('../../assets/img/diadoc/lineKontur.png')}
            alt="#"
            className="diadoc__content_line"
          />
          <ButtonUi className={'requestBtn'}>Отправить заявку</ButtonUi>
        </div>
      </div>
      <div className="diadoc__logo">
        <div className="box__img">
          <img src={require('../../assets/img/diadoc/iconKontur.png')} alt="#" />
          <div className="text-logo">
            <h2>ЭДО для маркетплейсов</h2>
            <p>
              Обменивайтесь документами с Ozon, Wildberries, Яндекс.Маркетом, KazanExpress, Lamoda и
              другими площадками через интернет.
            </p>
          </div>
        </div>

        <div className="box__text">
          <ButtonUi className={'requestBtn'}>Отправить заявку</ButtonUi>
          <ul>
            <li>Быстро разберетесь в интуитивно понятном интерфейсе сервиса</li>
            <li>Справитесь без дополнительных сотрудников</li>
            <li>Снизите риск ошибок в документах — сервис укажет на них и поможет исправить</li>
            <li>Сможете работать из любой точки мира — нужен только доступ в интернет</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Diadoc;
