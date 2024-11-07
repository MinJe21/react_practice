import logo from './logo.svg';
import './App.css';
import Component1 from './component1';
import Hello from './components/Hello'
import Component2 from './componet2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          20241028 react OSS class
        </p>
        <Hello />
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
