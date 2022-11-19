import React from 'react';
import './Diadoc.scss';

const Diadoc = () => {
  return (
    <div className="diadoc">
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
        </div>
        <img src={require('../../assets/img/diadoc/diadocBg.png')} alt="#" />
      </div>
    </div>
  );
};

export default Diadoc;
