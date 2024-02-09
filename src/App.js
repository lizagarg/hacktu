import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <div className="container">
    <Routes>
          <Route path="/" element={<Login />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
