import React from 'react';
import ButtonUi from '../../UI/button/ButtonUi';
import './ElectrSign.scss';

const ElectrSign = () => {
  return (
    <div>
      <div className="electrSign__title">
        <h1>Электронная подпись в Донецке || Получить ЭЦП</h1>
        <p>
          Удостоверяющий центр выдает сертификаты электронной подписи для организаций и частных лиц.
        </p>
      </div>
      <div className="electrSign__map">
        {/* <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.8378214821846!2d37.80922374947294!3d48.01684305296687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0903fc9e66b5b%3A0x6651508ebecae25e!2sMyru%20Ave%2C%2017%2C%20Donetsk%2C%20Donets&#39;ka%20oblast%2C%20Ukraine%2C%2083000!5e0!3m2!1sen!2s!4v1668853546625!5m2!1sen!2s"
          width="1018"
          height="431"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <iframe
          title="map"
          src="https://yandex.ru/map-widget/v1/-/CCUfuIfY0D"
          width="1018"
          height="431"
        ></iframe>
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
          <div className="description__buttons">
            <ButtonUi className={'description__buttons_black'}>Для руководителей и ИП</ButtonUi>
            <ButtonUi className={'description__buttons_white'}>Для физических лиц</ButtonUi>
            <ButtonUi className={'description__buttons_black'}>
              Зарегистрировать ООО или ИП
            </ButtonUi>
            <ButtonUi className={'description__buttons_white'}>Для Госуслуг</ButtonUi>
            <ButtonUi className={'description__buttons_white'}>
              Оформить недвижимость в собственность
            </ButtonUi>
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
            <img
              src={require('../../assets/img/systemBusiness/flDriveFon.png')}
              alt="#"
              className="description__img_drive"
            />
            <img
              src={require('../../assets/img/systemBusiness/lineFon.png')}
              alt="#"
              className="description__img_line"
            />
          </div>
        </div>
      </div>
      <div className="electrSign__request">
        <ButtonUi>Отправить заявку</ButtonUi>
        <p>Оставьте заявку, и мы подберем подпись под ваши задачи</p>
      </div>
    </div>
  );
};

export default ElectrSign;
