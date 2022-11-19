import './App.css';
import BkKeeping from './components/Bookkeeping/BkKeeping';
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
      <div className="container"></div>
    </div>
  );
}

export default App;
