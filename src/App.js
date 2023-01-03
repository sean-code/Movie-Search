import './App.css';
import Home from './components/landing-page/Home';
import Navbar from './components/navbar/Navbar';
import {
  HashRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Search from './components/search/Search';
import Feedback from './components/feedback/Feedback';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element= {<Search />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
