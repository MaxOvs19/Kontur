import React from 'react'

import BookKeeping from './components/book-keeping/book-keeping'
import Diadoc from './components/diadoc/diadoc'
import ElectronicSignature from './components/electronic-signature/electronic-signature'
import Extern from './components/extern/extern'

import Footer from './components/footer/footer'
import Header from './components/header/header'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <ElectronicSignature />
        <Extern />
      </div>
      <BookKeeping />
      <div className='container'>
        <Diadoc />
        <Footer />
      </div>
    </div>
  )
}

export default App
