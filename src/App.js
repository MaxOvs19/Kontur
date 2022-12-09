import BkKeeping from './components/Bookkeeping/BkKeeping';
import Diadoc from './components/Diadoc/Diadoc';
import ElectrSign from './components/ElectrSign/ElectrSign';
import Extern from './components/Extern/Extern';

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
