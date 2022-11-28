import React, { useState } from 'react';
import ButtonUi from '../button/ButtonUi';
import './RequestForm.scss';

const RequestForm = ({ visible, setVisible, title, titleMini, type }) => {
  const rootClasses = ['modal'];
  const colorBtn = ['body__submit'];

  const [sendForm, setSendForm] = useState(false);

  if (type === 'ElectrSign') {
    colorBtn.push('red');
  } else if (type === 'Extern') {
    colorBtn.push('orange');
  } else if (type === 'bkKeeping') {
    colorBtn.push('purple');
  }

  if (visible) {
    document.body.style.overflow = 'hidden';
    rootClasses.push('active');
  }

  const Send = (e) => {
    e.preventDefault();
    setSendForm(true);
  };

  return (
    <div className={rootClasses.join(' ')}>
      <div className="modal__content">
        <div className="title">
          <img src={require('../../assets/img/header/konturLogo.png')} alt="#" />
          <h2>Официальный партнер в ДНР</h2>
          <img
            src={require('../../assets/img/icons/exitIcon.png')}
            alt="#"
            className="exit"
            onClick={() => {
              setVisible(false);
              document.body.style.overflow = '';
            }}
          />
        </div>
        {!sendForm ? (
          <div className="body">
            <div className="body__title">
              <h2>Заявка на {title}</h2>
              <h5>{titleMini}</h5>
            </div>
            <form action="lol.php" name="aa">
              <div className="body__inputs">
                <div className="inputBox">
                  <input type="text" placeholder="Ваше имя и фамилия" name="Fio" required />
                </div>

                <div className="inputBox">
                  <input type="email" placeholder="E-mail" name="Email" required />
                </div>

                <div className="inputBox">
                  <input
                    type="tel"
                    placeholder="+7 949 000 0000"
                    name="Phone"
                    required
                    maxLength={11}
                  />
                </div>

                <ButtonUi className={colorBtn.join(' ')} onClick={Send}>
                  Отправить заявку
                </ButtonUi>
              </div>
            </form>
          </div>
        ) : (
          <div className="send">
            <div className="body__title">
              <h2>Спасибо за Вашу заявку</h2>
              <h5>Ваша заявка принята, в течение получаса консультант вам перезвонит</h5>
            </div>
            <div className="send__img">
              <img src={require('../../assets/img/icons/sendIcon.png')} alt="#" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
