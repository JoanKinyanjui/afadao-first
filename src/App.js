// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Enroll from './Components/Enroll/Enroll';

function App() {


  return (
    <>
    <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/enroll' element={<Enroll />} />
    </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
