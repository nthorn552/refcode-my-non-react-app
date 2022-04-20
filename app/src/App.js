import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonClickCount, updateButtonClickCount] = useState(0);
  return (
    <div className="App">
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
        <Button
          variant="primary"
          onClick={() => updateButtonClickCount(buttonClickCount + 1)}
        >
          I'm a react button
        </Button>
        You've clicked this button {buttonClickCount} times
      </header>
    </div>
  );
}

export default App;
