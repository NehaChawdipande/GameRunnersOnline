import { Link, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import Library from './pages/Library';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
