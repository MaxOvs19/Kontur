import './App.css';
import BkKeeping from './components/Bookkeeping/BkKeeping';
import Diadoc from './components/Diadoc/Diadoc';
import ElectrSign from './components/ElectrSign/ElectrSign';
import Extern from './components/Extern/Extern';
import Header from './UI/Header/Header';

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
      </div>
    </div>
  );
}

export default App;
