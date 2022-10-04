import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navigation">
        <div>
            <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/search' className="nav-link">Search</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/about' className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/feedback' className="nav-link">Feedback</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/contact' className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/authentication' className="nav-link">Sign In</NavLink>
                    </li>
                </ul>
        </div>
        </nav>
    )
}

export default Navbar;