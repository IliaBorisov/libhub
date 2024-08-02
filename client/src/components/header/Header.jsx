import logo from '../../assets/libhub-light.svg';
import avatar from '../../assets/john_stevens.svg';

import { Link } from 'react-router-dom'

import './Header.css';


export default function Header() {
    return (
        <header>
            <img id='logo' src={logo} alt="" />
            <nav id='navbar'>
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-books">Books</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li>
                        <img className='profile-avatar-header' src={avatar}></img>
                    </li>
                </ul>
            </nav>
        </header>
    );
}