import React from 'react';
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
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.8378214821846!2d37.80922374947294!3d48.01684305296687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0903fc9e66b5b%3A0x6651508ebecae25e!2sMyru%20Ave%2C%2017%2C%20Donetsk%2C%20Donets&#39;ka%20oblast%2C%20Ukraine%2C%2083000!5e0!3m2!1sen!2s!4v1668853546625!5m2!1sen!2s"
          width="1018"
          height="431"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          //   access-control-allow-origin="google.com"
        ></iframe>
      </div>
    </div>
  );
};

export default ElectrSign;
