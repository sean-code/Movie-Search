import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navigation">
        <div>
            <h1 className='logo'>Movie Search+<sub>developed by Sean</sub></h1>
            <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/search' className="nav-link">Search</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/feedback' className="nav-link">Feedback</NavLink>
                    </li>
                </ul>
        </div>
        </nav>
    )
}

export default Navbar;