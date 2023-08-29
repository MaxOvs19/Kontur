import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

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
  const [validForm, setValidForm] = useState(false)
  const [data, setData] = useState({ fio: '', email: '', number: '' })

  const [email, setEmail] = useState('')
  const [fio, setFio] = useState('')
  const [number, setNumber] = useState('+7')

  const [emailDirty, setEmailDirty] = useState(false)
  const [fioDirty, setFioDirty] = useState(false)
  const [numberDirty, setNumberDirty] = useState(false)

  const [emailError, setEmailError] = useState('Неверно введен E-mail!')
  const [fioError, setFioError] = useState('Неверно введены ФИО!')
  const [numberError, setNumberError] = useState('Неверно введен номер!')

  useEffect(() => {
    if (emailError || fioError || numberError) setValidForm(false)
    else setValidForm(true)
  }, [emailError, fioError, numberError])

  switch (type) {
    case 'ElectronicSignature':
      colorBtn.push('red')
      break
    case 'Extern':
      colorBtn.push('orange')
      break
    case 'bkKeeping':
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

  const Send = async (e: React.MouseEvent) => {
    e.preventDefault()

    setData({
      fio: data.fio,
      email: data.email,
      number: data.number
    })

    if (!data.email && !data.fio && !data.number) return
    else setSendForm(true)

    PostService.postData(data)
  }

  const fioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFio(e.target.value)

    const re = /^[а-яА-Я ]+$/
    if (!re.test(String(e.target.value))) {
      setFioError('Фио введены некорректно!')
    } else {
      setFioError('')
      setData({ ...data, fio: e.target.value })
    }
  }

  const numberHandler = (number: any) => {
    setNumber(number)
    const re = /^[+]*[0-9]+$/

    if (!re.test(String(number))) {
      setNumberError('Номер введен некорректно!')
    } else {
      setNumberError('')
      setData({ ...data, number: number })
    }
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email введен некорректно!')
    } else {
      setEmailError('')
      setData({ ...data, email: e.target.value })
    }
  }

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.name
    switch (currentValue) {
      case 'fio':
        setFioDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const numberBlur = () => {
    setNumberDirty(true)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className='modal__content'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className='title'>
          <LogoKontur />
          <h2>Официальный партнер в ДНР</h2>
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
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => fioHandler(e)}
                  />
                  {fioDirty && fioError && (
                    <div className='error'>{fioError}</div>
                  )}
                </div>

                <div className='inputBox'>
                  <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    required
                    value={email}
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => emailHandler(e)}
                  />
                  {emailDirty && emailError && (
                    <div className='error'>{emailError}</div>
                  )}
                </div>

                <div className='inputBox'>
                  <PhoneInput
                    type='tel'
                    name='number'
                    maxLength={16}
                    minLength={16}
                    placeholder='+7 949 000 0000'
                    value={number}
                    onBlur={numberBlur}
                    onChange={(e) => numberHandler(e)}
                  ></PhoneInput>
                  {numberDirty && numberError && (
                    <div className='error'>{numberError}</div>
                  )}
                </div>

                <Button
                  className={colorBtn.join(' ')}
                  disabled={!validForm}
                  onClick={Send}
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
