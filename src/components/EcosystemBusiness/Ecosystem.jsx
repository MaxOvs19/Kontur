import React from 'react';
import './Ecosystem.scss';

import tableLaptop from '../../assets/img/header/tableLaptop.png';
import eagle from '../../assets/img/header/eagle.png';
import buhgalteria from '../../assets/img/icons/buhgalteria.png';
import medal from '../../assets/img/icons/medal.png';
import diadoc from '../../assets/img/icons/diadoc.png';
import extern from '../../assets/img/icons/extern.png';
import greenTick from '../../assets/img/icons/greenTick.png';

const Ecosystem = () => {
  return (
    <div className="ecosistem">
      <div className="ecosistem__title">
        <h2>Экосистема продуктов для бизнеса</h2>
      </div>
      <div className="ecosistem__box">
        <div className="icons icons_title">
          <img src={greenTick} alt="#" />
          <p>Донецкая Народная Республика</p>
        </div>
        <div className="table">
          <div className="icons">
            <img src={extern} alt="#" />
            <a href="#externLink">Экстерн</a>
          </div>
          <div className="icons">
            <img src={diadoc} alt="#" />
            <a href="#diadocLink">Диадок</a>
          </div>

          <img src={tableLaptop} alt="#" className="table__table" />
          <img src={eagle} alt="#" className="table__eagle" />
        </div>
        <div className="table">
          <div className="icons">
            <img src={medal} alt="#" />
            <a href="#epcLink">ЭЦП</a>
          </div>
          <div className="icons">
            <img src={buhgalteria} alt="#" />
            <a href="#bkLink">Бухгалтерия</a>
          </div>
        </div>
      </div>
      <div className="ecosistem__services">
        <div className="text">
          <p>Электронная подпись</p>
          <br />
          <p>Самозанятость ДНР</p>
          <br />
          <p>Электронный документооборот</p>
        </div>
        <div className="text">
          <p>Отчетность</p>
          <br />
          <p>Бухгалтерия онлайн</p>
          <br />
          <p>Ведение бизнеса ДНР</p>
        </div>
        <div className="text">
          <p>Онлайн кассы</p>
          <br />
          <p>Проверка контрагентов</p>
          <br />
          <p>Сервис для ведения учета</p>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
