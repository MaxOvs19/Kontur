import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'

import { PostService } from '../../../services/post/post.service'
import './request-form.scss'

import Button from '../button/button'

import sendIcon from '../../../assets/img/icons/sendIcon.png'
import LogoKontur from '../icons/logo-kontur/logoKontur'
import { IForm } from './request-form.props'
import Close from '../icons/close/close'

const RequestForm = ({
  visible,
  setVisible,
  title,
  titleMini,
  type
}: IForm) => {
  const rootClasses = ['modal']
  const colorBtn = ['body__submit']

  const [sendForm, setSendForm] = useState(false)

  const [email, setEmail] = useState('')
  const [fio, setFio] = useState('')
  const [number, setNumber] = useState('')

  const [emailError, setEmailError] = useState('')
  const [fioError, setFioError] = useState('')
  const [numberError, setNumberError] = useState('')

  switch (type) {
    case 'ElectronicSignature':
      colorBtn.push('red')
      break
    case 'Extern':
      colorBtn.push('orange')
      break
    case 'BookKeeping':
      colorBtn.push('purple')
      break
    case 'Diadoc':
      colorBtn.push('aqua')
      break
    default:
      break
  }

  if (visible) {
    rootClasses.push('active')
  }

  const submitForm = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!emailError && !fioError && !numberError) {
      setSendForm(true)
      PostService.postData({ email, fio, number })
    }
  }

  const fioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFio(e.target.value)
    const re = /^[а-яА-Я ]+$/
    if (!re.test(String(e.target.value)))
      setFioError('Фио введены некорректно!')
    else setFioError('')
  }

  const numberHandler = (number: any) => {
    setNumber(number)
    const re = /^[+]*[0-9]+$/
    if (!re.test(String(number))) setNumberError('Номер введен некорректно!')
    else setNumberError('')
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i

    if (!re.test(String(e.target.value).toLowerCase()))
      setEmailError('Email введен некорректно!')
    else setEmailError('')
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='title'>
          <LogoKontur />
          <h2>Официальный партнер в ДНР и ЛНР</h2>
          <Close onClick={() => setVisible(false)} />
        </div>
        {!sendForm ? (
          <div className='body'>
            <div className='body__title'>
              <h2>Заявка на {title}</h2>
              <h5>{titleMini}</h5>
            </div>
            <form action='lol.php' name='aa'>
              <div className='body__inputs'>
                <div className='inputBox'>
                  <input
                    type='text'
                    placeholder='Ваше имя и фамилия'
                    name='fio'
                    required
                    value={fio}
                    onChange={(e) => fioHandler(e)}
                  />
                  {fioError && <div className='error'>{fioError}</div>}
                </div>

                <div className='inputBox'>
                  <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => emailHandler(e)}
                  />
                  {emailError && <div className='error'>{emailError}</div>}
                </div>

                <div className='inputBox'>
                  <PhoneInput
                    countries={['RU']}
                    name='number'
                    placeholder='+7 949 000 00 00'
                    maxLength={16}
                    value={number}
                    onChange={(e) => numberHandler(e)}
                  ></PhoneInput>
                  {numberError && <div className='error'>{numberError}</div>}
                </div>

                <Button
                  disabled={!email || !fio || !number}
                  className={colorBtn.join(' ')}
                  onClick={(e) => submitForm(e)}
                >
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className='send'>
            <div className='body__title'>
              <h2>Спасибо за Вашу заявку</h2>
              <h5>
                Ваша заявка принята, в течение получаса консультант вам
                перезвонит
              </h5>
            </div>
            <div className='send__img'>
              <img src={sendIcon} alt='#' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RequestForm
