import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <>
    <Router>
    <div className="container">
    <Routes>
          <Route path="/" element={<Login/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
