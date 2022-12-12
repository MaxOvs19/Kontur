import BkKeeping from './components/Bookkeeping/bk-keeping.tsx';
import Diadoc from './components/diadoc/diadoc';
import ElectrSign from './components/electro-sign/electro-sign';
import Extern from './components/extern/extern';

import Footer from './UI/footer/footer.tsx';
import Header from './UI/header/header.tsx';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ElectrSign />
        <Extern />
      </div>

      <BkKeeping />

      <div className="container">
        <Diadoc />
        <Footer />
      </div>
    </div>
  );
}

export default App;
