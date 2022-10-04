import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navigation">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a to='/' className="nav-link">Home</a>
                </li>
                <li className="nav-list-item">
                    <a to='/search' className="nav-link">Search</a>
                </li>
                <li className="nav-list-item">
                    <a to='/about' className="nav-link">About</a>
                </li>
                <li className="nav-list-item">
                    <a to='/feedback' className="nav-link">Feedback</a>
                </li>
                <li className="nav-list-item">
                    <a to='contact' className="nav-link">Contact</a>
                </li>
                <li className="nav-list-item">
                    <a to='/authentication' className="nav-link">Log In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;