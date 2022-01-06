import logo from './logo.svg';
import './App.css';
import { Routes, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
