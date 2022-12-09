import React, { useState, useEffect } from 'react';
import { PostService } from '../../services/post/post.service';
import './RequestForm.scss';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import ButtonUi from '../button/button-ui';

import sendIcon from '../../assets/img/icons/sendIcon.png';

const RequestForm = ({ visible, setVisible, title, titleMini, type }) => {
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

  const Send = async (e) => {
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

  const fioHendler = (e) => {
    setFio(e.target.value);
    const re = /^[а-яА-Я ]+$/;
    if (!re.test(String(e.target.value))) {
      setFioError('Фио введены некорректно!');
    } else {
      setFioError('');
      setData({ ...data, fio: e.target.value });
    }
  };

  const numberHendler = (number) => {
    setNumber(number);
    const re = /^[+]*[0-9]+$/;
    if (!re.test(String(number))) {
      setNumberError('Номер введен некорректно!');
    } else {
      setNumberError('');
      setData({ ...data, number: number });
    }
  };

  const emailHendler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email введен некорректно!');
    } else {
      setEmailError('');
      setData({ ...data, email: e.target.value });
    }
  };

  const blurHendler = (e) => {
    switch (e.target.name) {
      case 'fio':
        setFioDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={rootClasses.join(' ')} onClick={Close}>
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="title">
          <svg
            width="106"
            height="29"
            viewBox="0 0 106 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5486 11.3411L22.6226 23.0001H18.1024L11.1507 13.0557H7.81509V23.0001H3.85603V4.57636H0.863342L2.85847 0.866699H7.81509V9.62656H11.1507L17.7595 0.866699H22.2486L14.5486 11.3411ZM21.4069 15.0196C21.4069 13.2947 21.8017 11.7879 22.5915 10.4994C23.3604 9.29396 24.4099 8.36916 25.74 7.72496C27.0701 7.08066 28.5041 6.75856 30.042 6.75856C31.6215 6.75856 33.0451 7.07026 34.3128 7.69376C35.6429 8.33796 36.6924 9.29396 37.4613 10.5618C38.2303 11.8087 38.6148 13.2947 38.6148 15.0196C38.6148 16.7654 38.2303 18.2721 37.4613 19.5398C36.6924 20.7868 35.6429 21.7532 34.3128 22.439C33.0035 23.104 31.5799 23.4365 30.042 23.4365C28.5249 23.4365 27.1013 23.104 25.7712 22.439C24.4203 21.7739 23.35 20.8075 22.5603 19.5398C21.7913 18.2513 21.4069 16.7446 21.4069 15.0196ZM88.6486 7.25736H92.1713V9.40826C92.7116 8.57696 93.4286 7.94316 94.3223 7.50666C95.2367 7.04946 96.4109 6.82086 97.8449 6.82086C99.3205 6.82086 100.63 7.15336 101.773 7.81846C102.874 8.50426 103.726 9.48106 104.329 10.7488C104.953 11.9958 105.264 13.4298 105.264 15.0508C105.264 16.6926 104.953 18.1474 104.329 19.4151C103.726 20.6621 102.874 21.6285 101.773 22.3143C101.253 22.6676 100.64 22.9274 99.9335 23.0936C99.2477 23.2807 98.5515 23.3742 97.8449 23.3742C96.6187 23.3742 95.7043 23.2807 95.1016 23.0936C93.8547 22.7195 92.9714 22.0961 92.4518 21.2232V28.5802H88.6486V7.25736ZM40.6411 7.25736H44.4131V13.2427H50.8661V7.25736H54.6069V23.0001H50.8661V16.3601H44.4131V23.0001H40.6411V7.25736ZM56.2591 7.25736H70.7549V10.25H65.393V23.0001H61.5587V10.25H56.2591V7.25736ZM75.9609 7.25736C77.3741 11.1229 78.6627 14.9469 79.8265 18.7293C80.9279 14.9884 82.1749 11.1645 83.5673 7.25736H87.3705L81.5722 23.3118C81.0942 24.6211 80.637 25.6291 80.2006 26.3357C79.7226 27.0423 79.1303 27.5722 78.4237 27.9256C77.7378 28.2996 76.8234 28.4867 75.6804 28.4867C75.0361 28.4867 74.6828 28.4763 74.6205 28.4555L73.3423 25.4628C73.7372 25.546 74.2256 25.5875 74.8075 25.5875C75.5141 25.5875 76.0856 25.4836 76.5221 25.2758C76.9169 25.1095 77.2183 24.8809 77.4261 24.59C77.6339 24.3198 77.8106 23.9769 77.956 23.5612L71.9707 7.25736H75.9609ZM25.2412 14.9884C25.2412 16.7134 25.6569 18.0331 26.4882 18.9475C27.3195 19.8412 28.4729 20.288 29.9485 20.288C31.4448 20.288 32.6086 19.8412 33.4399 18.9475C34.292 18.0331 34.7181 16.7134 34.7181 14.9884C34.7181 13.3051 34.3024 12.0373 33.4711 11.1852C32.6398 10.3124 31.4656 9.87596 29.9485 9.87596C28.4521 9.87596 27.2883 10.3124 26.457 11.1852C25.6465 12.0373 25.2412 13.3051 25.2412 14.9884ZM92.3583 15.0196C92.3999 16.5783 92.8155 17.8253 93.6053 18.7605C94.395 19.6957 95.5069 20.1633 96.9409 20.1633C98.3749 20.1633 99.4763 19.6957 100.245 18.7605C101.035 17.8253 101.44 16.5783 101.461 15.0196C101.44 13.4817 101.035 12.2555 100.245 11.3411C99.4763 10.4059 98.3749 9.93826 96.9409 9.93826C95.5069 9.93826 94.395 10.3955 93.6053 11.3099C92.8155 12.2244 92.3999 13.4609 92.3583 15.0196Z"
              fill="#222222"
            />
          </svg>
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
                d="M1.36812 9.41284e-05C1.61677 -0.00365622 1.76904 0.105104 1.91042 0.247242C3.22455 1.56474 4.54092 2.87999 5.85654 4.19599C5.97781 4.31725 6.09857 4.31737 6.21883 4.19636C7.50782 2.90699 8.79682 1.61762 10.0862 0.328625C10.4286 -0.0134071 10.7399 -0.0115319 11.089 0.331625C11.3118 0.550646 11.5353 0.768916 11.7566 0.989062C12.0776 1.30897 12.0795 1.64162 11.7566 1.96528C10.4459 3.2779 9.1351 4.58977 7.81985 5.89752C7.71222 6.00478 7.70397 6.05841 7.8176 6.1713C9.1261 7.46779 10.4282 8.77104 11.7322 10.072C12.0904 10.4294 12.0893 10.7392 11.7296 11.0993C11.5087 11.3202 11.2893 11.5422 11.0673 11.7619C10.7504 12.0751 10.4203 12.0751 10.1049 11.7601C8.7927 10.4493 7.4797 9.1397 6.17307 7.82333C6.05906 7.70857 6.00768 7.71982 5.9008 7.82783C4.60618 9.12995 3.30631 10.4268 2.00718 11.7248C1.64415 12.0875 1.33962 12.0882 0.979962 11.7293C0.767692 11.5174 0.555422 11.3055 0.343903 11.0933C-0.0082555 10.7404 -0.0105057 10.4276 0.337902 10.0773C1.63702 8.77217 2.9354 7.46554 4.23939 6.16492C4.3489 6.05579 4.35415 6.00253 4.24314 5.8919C2.91402 4.5714 1.59089 3.24527 0.26627 1.92027C-0.0862628 1.56774 -0.088513 1.25384 0.25877 0.906179C0.492792 0.671782 0.728314 0.43926 0.96121 0.204113C1.0846 0.0788515 1.23011 0.00609469 1.36812 9.41284e-05Z"
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
                    onBlur={(e) => blurHendler(e)}
                    onChange={(e) => numberHendler(e)}
                  ></PhoneInput>
                  {numberDirty && numberError && <div className="error">{numberError}</div>}
                </div>

                <ButtonUi className={colorBtn.join(' ')} onClick={Send} disabled={!validForm}>
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
              <img src={sendIcon} alt="#" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
