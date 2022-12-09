import React, { useState, useEffect } from 'react';
import { PostService } from '../../services/post/post.service';
import './request-form.scss';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import ButtonUi from '../button/button-ui';

// import sendIcon from '../../assets/img/icons/sendIcon.png';
import LogoKnr from '../icons/logo-kontur/logoKnr';
import { IForm } from './request-form.props';

const RequestForm = ({ visible, setVisible, title, titleMini, type }:IForm) => {
  const rootClasses = ['modal'];
  const colorBtn = ['body__submit'];

  const [sendForm, setSendForm] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [data, setData] = useState({ fio: '', email: '', number: '' });

  const [email, setEmail] = useState('');
  const [fio, setFio] = useState('');
  const [number, setNumber] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [fioDirty, setFioDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);

  const [emailError, setEmailError] = useState('Неверно введен E-mail!');
  const [fioError, setFioError] = useState('Неверно введены ФИО!');
  const [numberError, setNumberError] = useState('Неверно введен номер!');

  useEffect(() => {
    if (emailError || fioError || numberError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [emailError, fioError, numberError]);

  switch (type) {
    case 'ElectrSign':
      colorBtn.push('red');
      break;
    case 'Extern':
      colorBtn.push('orange');
      break;
    case 'bkKeeping':
      colorBtn.push('purple');
      break;
    case 'Diadoc':
      colorBtn.push('aqua');
      break;
    default:
      break;
  }

  if (visible) {
    document.body.style.overflow = 'hidden';
    rootClasses.push('active');
  }

  const Send = async (e:React.MouseEvent) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    e.preventDefault();

    setData({
      fio: data.fio,
      email: data.email,
      number: data.number,
    });

    if (data.email === '' && data.fio === '' && data.number === '') {
      return;
    } else {
      setSendForm(true);
    }

    PostService.postData(url, data);
  };

  const Close = () => {
    document.body.style.overflow = '';
    setVisible(false);
  };

  const fioHendler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const cureentValue = e.target.value;
    setFio(cureentValue);
    
    const re = /^[а-яА-Я ]+$/;
    if (!re.test(String(cureentValue))) {
      setFioError('Фио введены некорректно!');
    } else {
      setFioError('');
      setData({ ...data, fio: cureentValue });
    }
  };

  const numberHendler = (number:any) => {
    setNumber(number);
    const re = /^[+]*[0-9]+$/;

    if (!re.test(String(number))) {
      setNumberError('Номер введен некорректно!');
    } else {
      setNumberError('');
      setData({ ...data, number: number });
    }
  };

  const emailHendler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const cureentValue = e.target.value;
    setEmail(cureentValue);
    const re =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

    if (!re.test(String(cureentValue).toLowerCase())) {
      setEmailError('Email введен некорректно!');
    } else {
      setEmailError('');
      setData({ ...data, email: cureentValue });
    }
  };

  const blurHendler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.name;   
    switch (currentValue) {
      case 'fio':
        setFioDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  const numberBlur = () => {
    setNumberDirty(true);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={Close}>
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="title">
         <LogoKnr/>
          <h2>Официальный партнер в ДНР</h2>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="exit"
            onClick={() => {
              setVisible(false);
              document.body.style.overflow = '';
            }}
          >
            <g clipPath="url(#clip0_287_155)">
              <path
                d="M1.36812 9.41284e-05C1.61677 -0.00365622 
                1.76904 0.105104 1.91042 0.247242C3.22455 1.56474 
                4.54092 2.87999 5.85654 4.19599C5.97781 4.31725 6.09857 
                4.31737 6.21883 4.19636C7.50782 2.90699 8.79682 1.61762 
                10.0862 0.328625C10.4286 -0.0134071 10.7399 -0.0115319 
                11.089 0.331625C11.3118 0.550646 11.5353 0.768916 11.7566 0.989062C12.0776 1.30897 
                12.0795 1.64162 11.7566 1.96528C10.4459 3.2779 9.1351 4.58977 
                7.81985 5.89752C7.71222 6.00478 7.70397 6.05841 7.8176 6.1713C9.1261 
                7.46779 10.4282 8.77104 11.7322 10.072C12.0904 10.4294 12.0893 10.7392 
                11.7296 11.0993C11.5087 11.3202 11.2893 11.5422 11.0673 11.7619C10.7504 
                12.0751 10.4203 12.0751 10.1049 11.7601C8.7927 10.4493 7.4797 9.1397 6.17307 
                7.82333C6.05906 7.70857 6.00768 7.71982 5.9008 7.82783C4.60618 9.12995 3.30631 
                10.4268 2.00718 11.7248C1.64415 12.0875 1.33962 12.0882 0.979962 11.7293C0.767692 
                11.5174 0.555422 11.3055 0.343903 11.0933C-0.0082555 10.7404 -0.0105057 10.4276 
                0.337902 10.0773C1.63702 8.77217 2.9354 7.46554 4.23939 6.16492C4.3489 6.05579 
                4.35415 6.00253 4.24314 5.8919C2.91402 4.5714 1.59089 3.24527 0.26627 1.92027C-0.0862628 
                1.56774 -0.088513 1.25384 0.25877 0.906179C0.492792 0.671782 0.728314 0.43926 0.96121 
                0.204113C1.0846 0.0788515 1.23011 0.00609469 1.36812 9.41284e-05Z"
                fill="#263238"
              />
            </g>
            <defs>
              <clipPath id="clip0_287_155">
                <rect width="12" height="11.9978" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
                  <input
                    type="text"
                    placeholder="Ваше имя и фамилия"
                    name="fio"
                    required
                    value={fio}
                    onBlur={(e) => blurHendler(e)}
                    onChange={(e) => fioHendler(e)}
                  />
                  {fioDirty && fioError && <div className="error">{fioError}</div>}
                </div>

                <div className="inputBox">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    required
                    value={email}
                    onBlur={(e) => blurHendler(e)}
                    onChange={(e) => emailHendler(e)}
                  />
                  {emailDirty && emailError && <div className="error">{emailError}</div>}
                </div>

                <div className="inputBox">
                  <PhoneInput
                    type="tel"
                    name="number"
                    maxLength={16}
                    minLength={16}
                    placeholder="+7 949 000 0000"
                    value={number}
                    onBlur={numberBlur}
                    onChange={(e) => numberHendler(e)}
                  ></PhoneInput>
                  {numberDirty && numberError && <div className="error">{numberError}</div>}
                </div>

                <ButtonUi classNameAdd={colorBtn.join(' ')} disabledBtn={!validForm} onClickBtn={Send}>
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
              {/* <img src={sendIcon} alt="#" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
