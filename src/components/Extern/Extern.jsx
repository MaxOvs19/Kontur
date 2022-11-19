import React from 'react';
import ButtonUi from '../../UI/button/ButtonUi';
import './Extern.scss';

const Extern = () => {
  return (
    <div className="extern">
      <div className="extern__title">
        <h1>Все для отчетности в Донецке || Подключи сейчас</h1>
        <p>
          Отчитывайтесь в контролирующие органы вовремя, запрашивайте акты сверки, получайте
          требования и уведомления. Формы отчетов в наших сервисах всегда актуальны, встроенная
          проверка на ошибки поможет сдать отчеты с первого раза, техподдержка на связи 24/7.
        </p>
      </div>
      <div className="extern__body">
        <div className="text">
          <div className="text__title">
            <img src={require('../../assets/img/icons/externBig.png')} alt="#" />

            <h2>Экстерн</h2>
          </div>
          <p>
            Система для подготовки, проверки и отправки отчетности через интернет. Подходит малому,
            среднему и крупному бизнесу, бухгалтерским фирмам, бухгалтерам-фрилансерам и
            самозанятым.
          </p>
          <ButtonUi className={'text__btn'}>Отправить заявку</ButtonUi>
        </div>
        <img src={require('../../assets/img/extern/bg-extern.png')} alt="#" />
      </div>
    </div>
  );
};

export default Extern;
