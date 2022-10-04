import './App.css';
import Navbar from './navbar/Navbar';
import Home from './landing-page/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
