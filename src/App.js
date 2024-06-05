import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import { ParentDynamicComponent } from './components/ParentDynamicComponent/ParentDynamicComponent';


function App() {


  return (
    <div className="App">
      <FirstComponent/>
      <header className="App-header">

        <ParentDynamicComponent />
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

      <FirstComponent/>
    </div>
  );
}

export default App;
