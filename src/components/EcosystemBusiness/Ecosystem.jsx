import React from 'react';
import './Ecosystem.scss';

const Ecosystem = () => {
  return (
    <div className="ecosistem">
      <div className="ecosistem__title">
        <h2>Экосистема продуктов для бизнеса</h2>
      </div>
      <div className="ecosistem__box">
        <div className="icons icons_title">
          <img src={require('../../assets/img/icons/greenTick.png')} alt="#" />
          <p>Донецкая Народная Республика</p>
        </div>
        <div className="table">
          <div className="icons">
            <img src={require('../../assets/img/icons/extern.png')} alt="#" />
            <p>Экстерн</p>
          </div>
          <div className="icons">
            <img src={require('../../assets/img/icons/diadoc.png')} alt="#" />
            <p>Диадок</p>
          </div>

          <img
            src={require('../../assets/img/header/tableLaptop.png')}
            alt="#"
            className="table__table"
          />
          <img
            src={require('../../assets/img/header/eagle.png')}
            alt="#"
            className="table__eagle"
          />
        </div>
        <div className="table">
          <div className="icons">
            <img src={require('../../assets/img/icons/medal.png')} alt="#" />
            <p>ЭЦП</p>
          </div>
          <div className="icons">
            <img src={require('../../assets/img/icons/buhgalteria.png')} alt="#" />
            <p>Бухгалтерия</p>
          </div>
        </div>
      </div>
      <div className="ecosistem__services">
        <div className="text">
          <p>Электронная подпись</p>
          <br />
          <p>Проверка контрагентов</p>
          <br />
          <p>Электронный документооборот</p>
        </div>
        <div className="text">
          <p>Электронная подпись</p>
          <br />
          <p>Проверка контрагентов</p>
          <br />
          <p>Электронный документооборот</p>
        </div>
        <div className="text">
          <p>Электронная подпись</p>
          <br />
          <p>Проверка контрагентов</p>
          <br />
          <p>Электронный документооборот</p>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
