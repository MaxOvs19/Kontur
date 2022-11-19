import React from 'react';
import ButtonUi from '../../UI/button/ButtonUi';
import './BkKeeping.scss';

const BkKeeping = () => {
  return (
    <div className="bkKeeping">
      <div className="bkKeeping__body">
        <img src={require('../../assets/img/bkKeeping/bgBk.png')} alt="#" />
        <div className="text">
          <div className="text__title">
            <img src={require('../../assets/img/icons/bkBig.png')} alt="#" />
            <h2>Бухгалтерия</h2>
          </div>
          <p>
            Сервис для ведения учета, расчета и уплаты налогов, работы с сотрудниками и отправки
            отчетности в контролирующие органы через интернет.
          </p>
          <ButtonUi className={'text__btn'}>Отправить заявку</ButtonUi>
        </div>
      </div>
    </div>
  );
};

export default BkKeeping;
