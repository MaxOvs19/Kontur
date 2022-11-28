import React from 'react';
import ButtonUi from '../button/ButtonUi';
import './RequestForm.scss';

const RequestForm = ({ visible, setVisible, title, titleMini, type }) => {
  const rootClasses = ['modal'];
  const colorBtn = ['body__submit'];

  if (type === 'ElectrSign') {
    colorBtn.push('red');
  }

  if (visible) {
    rootClasses.push('active');
  }

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
            onClick={() => setVisible(false)}
          />
        </div>
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

              <ButtonUi className={colorBtn.join(' ')}>Отправить заявку</ButtonUi>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
