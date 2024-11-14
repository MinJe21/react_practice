import logo from './logo.svg';
import './App.css';
import Component1 from './component1';
import Hello from './components/Hello'
import Component2 from './componet2';
import C20241114 from './components/C20241114';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's due to 2024-11-09-Sat
        </p>
        <Hello name="김민제" />
        <Component1 />
        <Component2 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
