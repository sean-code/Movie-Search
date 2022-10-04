import './App.css';
import Home from './components/landing-page/Home';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';
import Search from './components/search/Search';
import About from './components/about/About';
import Feedback from './components/feedback/Feedback';
import Contact from './components/contact/Contact';
import Signin from './components/authentication/Signin';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/search' element= {<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/authentication' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
