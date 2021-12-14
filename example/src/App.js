import logo from './logo.svg';
import './App.css';
import { useLocalStorage } from './lib';

function App() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count</p>
        <h1 className="counter">{count}</h1>
        <p>
          React States using LocalStorage
        </p>
        <div className="buttons">
        <button className="button minus" onClick={()=>{
          setCount(count-1);
        }}>
          -
        </button>
        <button className="button plus" onClick={()=>{
          setCount(count+1);
        }}>
          +
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
