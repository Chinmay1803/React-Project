import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import { ParentDynamicComponent } from "./components/ParentDynamicComponent/ParentDynamicComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          
          <Route
            path="/"
            element={
              <>
                <FirstComponent />
                <header className="App-header">
                  <ParentDynamicComponent id="1" />
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

                  <ParentDynamicComponent id="2" />
                </header>

                <FirstComponent />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
