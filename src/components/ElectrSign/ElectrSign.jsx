import React, { useState } from 'react';
import ButtonUi from '../../UI/button/button-ui';
import './ElectrSign.scss';
import RequestForm from '../../UI/request-form/request-form';
import flDriveFon from '../../assets/img/systemBusiness/flDriveFon.png';
import lineFon from '../../assets/img/systemBusiness/lineFon.png';

const ElectrSign = () => {
  const [modal, setModal] = useState(false);

  return (
    <div id="epcLink">
      <div className="electrSign__title">
        <h1>Электронная подпись в Донецке || Получить ЭЦП</h1>
        <p>
          Удостоверяющий центр выдает сертификаты электронной подписи для организаций и частных лиц.
        </p>
      </div>

      <div className="electrSign__map">
        <iframe
          id="map"
          title="map"
          src="https://yandex.ru/map-widget/v1/-/CCUfuIfY0D"
          width="670px"
          height="431"
        ></iframe>
        <div className="electrSign__map_adress">
          <h2>Официальный партнер в Донецкой Народной Республике</h2>
          <p className="name">
            ИП Бондаренко <br /> Станислав Геннадиевич
          </p>

          <h4>Адрес:</h4>
          <p>Донецкая республика, г.Донецк, ул. Мира Проспект, 17, 9 этаж, 95 офис </p>

          <h4>Контакты</h4>
          <ul>
            <li>071 501 53 53 </li>
            <li>+7 949 501 53 53</li>
            <li>dnr@myparus.ru</li>
          </ul>
        </div>
      </div>

      <div className="electrSign__text">
        <div className="description">
          <div className="description__text">
            <p>
              С 1 января 2022 года первым лицам организаций и ИП нужно получать новые сертификаты
              электронной подписи от удостоверяющего центра ФНС (УЦ ФНС). <br />
              Посетите один из наших офисов, где находится доверенный партнер, подтвердите личность
              и выпустите свой сертификат. Мы установим сертификат и настроим компьютер для работы с
              электронной подписью.
            </p>
          </div>
          <div className="description__services">
            <div className="black">Для руководителей и ИП</div>
            <div className="white">Для физических лиц</div>
            <div className="black">Зарегистрировать ООО или ИП</div>
            <div className="white">Для Госуслуг</div>
            <div className="white">Оформить недвижимость в собственность</div>
          </div>
          <div className="description__text">
            <p>
              Квалифицированная электронная подпись с базовым набором возможностей для решения
              бизнес-задач. Она нужна, чтобы взаимодействовать с контролирующими органами и их
              информационными системами:
            </p>
            <ul>
              <li>сайт ФНС nalog.ru;</li>
              <li> ФГИС ЕИАС (ФАС России);</li>
              <li>Госуслуги;</li>
              <li>Федресурс (ЕФРСДЮЛ и ЕФРСБ);</li>
              <li>Электронный ПТС (ЭПТС).</li>
            </ul>

            <img src={flDriveFon} alt="#" className="description__img_drive" />
            <img src={lineFon} alt="#" className="description__img_line" />
          </div>
        </div>
      </div>

      <div className="electrSign__request">
        <ButtonUi onClickBtn={() => setModal(true)}>Отправить заявку</ButtonUi>
        <p>Оставьте заявку, и мы подберем подпись под ваши задачи</p>
      </div>

      <RequestForm
        visible={modal}
        setVisible={setModal}
        title={'электронную подпись'}
        titleMini={'Получить ЭЦП в Донецке'}
        type={'ElectrSign'}
      ></RequestForm>
    </div>
  );
};

export default ElectrSign;
