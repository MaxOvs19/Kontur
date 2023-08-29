import React from 'react'

import BkKeeping from './components/Bookkeeping/bk-keeping.tsx'
import Diadoc from './components/diadoc/diadoc'
import ElectrSign from './components/electro-sign/electro-sign'
import Extern from './components/extern/extern'

import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <ElectrSign />
        <Extern />
      </div>
      <BkKeeping />
      <div className='container'>
        <Diadoc />
        <Footer />
      </div>
    </div>
  )
}

export default App
