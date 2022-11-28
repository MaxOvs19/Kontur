import React, { useState } from 'react';
import ButtonUi from '../../UI/button/ButtonUi';
import RequestForm from '../../UI/RequestForm/RequestForm';
import './BkKeeping.scss';

const BkKeeping = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bkKeeping" id="bkLink">
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

          <RequestForm
            visible={modal}
            setVisible={setModal}
            title={'подключение Контур.Бухгалтерия'}
            titleMini={'Все для отчетности в Донецк'}
            type={'bkKeeping'}
          ></RequestForm>

          <ButtonUi className={'text__btn'} onClick={() => setModal(true)}>
            Отправить заявку
          </ButtonUi>
        </div>
      </div>
    </div>
  );
};

export default BkKeeping;
