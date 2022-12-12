import React, { useState } from 'react';
import './bk-keeping.scss';

import ButtonUi from '../../UI/button/button-ui';
import RequestForm from '../../UI/request-form/request-form';

import bgBk from '../../assets/img/bkKeeping/bgBk.png';
import bkBig from '../../assets/img/icons/bkBig.png';

const BkKeeping = () => {
  const [modal, setModal] = useState(false);
  
  return (
    <div className="wrapper">
      <div className="bkKeeping" id="bkLink">
        <div className="bkKeeping__body">
          <img src={bgBk} alt="#" />
          <div className="text">
            <div className="text__title">
              <img src={bkBig} alt="#" />
              <h2>Бухгалтерия</h2>
            </div>
            <p>
              Сервис для ведения учета, расчета и уплаты налогов, работы с сотрудниками и отправки
              отчетности в контролирующие органы через интернет.
            </p>

            <ButtonUi classNameAdd={'text__btn'} onClickBtn={() => setModal(true)}>
              Отправить заявку
            </ButtonUi>
          </div>
        </div>

        <RequestForm
          visible={modal}
          setVisible={setModal}
          title={'подключение Контур.Бухгалтерия'}
          titleMini={'Все для отчетности в Донецк'}
          type={'bkKeeping'}
        ></RequestForm>
      </div>
    </div>
  );
};

export default BkKeeping;
