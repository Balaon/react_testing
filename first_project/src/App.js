import logo from './logo.svg';
import './App.css';
import { App as App2 } from "./App2";
import { User } from './components/user'


function App(props) {
  return (
    <div className="App">
      <User />
      <div>Yo! { props.name }</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <App2 />

    </div>
  );
}

export default App;
