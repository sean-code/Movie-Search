import './App.css';
import Home from './components/landing-page/Home';
import Navbar from './components/navbar/Navbar';
import {
  HashRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Feedback from './components/feedback/Feedback';
import MoviesAll from './components/search/MoviesAll';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element= {<MoviesAll />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
