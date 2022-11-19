import './App.css';
import ElectrSign from './components/ElectrSign/ElectrSign';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <ElectrSign></ElectrSign>
      </div>
    </div>
  );
}

export default App;
