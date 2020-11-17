import logo from './logo.svg';
import './App.css';
import { T } from "@mojang/t-component";

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <T>Buy more potatoes!</T>
        </p>
        <p>
          <T>Hello world!</T>
        </p>
      </header>
    </div>   
  );
}

export default App;
